import { DynamicLink } from '@/components/DynamicLink';
import {
  DeletedMessage,
  GenericFeature,
  Hostname,
  defaultDateFormatProps,
} from '@/components/HeaderComponents';
import {
  LicenceTag,
} from '@/components/IdentifierTag';
import { Tabs } from '@/components/Tabs';
import { DatasetQuery, DatasetQueryVariables } from '@/gql/graphql';
import { ArticleContainer } from '@/routes/resource/key/components/ArticleContainer';
import { ArticlePreTitle } from '@/routes/resource/key/components/ArticlePreTitle';
import { ArticleSkeleton } from '@/routes/resource/key/components/ArticleSkeleton';
import { ArticleTextContainer } from '@/routes/resource/key/components/ArticleTextContainer';
import { ArticleTitle } from '@/routes/resource/key/components/ArticleTitle';
import { LoaderArgs } from '@/types';
import { required } from '@/utils/required';
import { Helmet } from 'react-helmet-async';
import { MdLink, MdPeople } from 'react-icons/md';
import { FormattedDate, FormattedMessage } from 'react-intl';
import { Outlet, useLoaderData } from 'react-router-dom';

const DATASET_QUERY = /* GraphQL */ `
  query Dataset($key: ID!) {
    dataset(key: $key) {
      title
      type
      deleted
      created
      publishingOrganizationKey
      publishingOrganizationTitle

      contactsCitation {
        key
        abbreviatedName
        firstName
        lastName
        userId
        roles
      }
    }
  }
`;

export function datasetLoader({ params, graphql }: LoaderArgs) {
  const key = required(params.key, 'No key was provided in the URL');

  return graphql.query<DatasetQuery, DatasetQueryVariables>(DATASET_QUERY, { key });
}

export const DatasetPageSkeleton = ArticleSkeleton;

export function DatasetPage() {
  const { data } = useLoaderData() as { data: DatasetQuery };

  if (data.dataset == null) throw new Error('404');
  const dataset = data.dataset;

  const deletedAt = dataset.deleted;
  const contactThreshold = 6;
  const contactsCitation = dataset.contactsCitation?.filter(c => c.abbreviatedName) || [];

  return (
    <>
      <Helmet>
        <title>{dataset.title}</title>
      </Helmet>

      <ArticleContainer>
        <ArticleTextContainer className="max-w-6xl">
          <ArticlePreTitle
            secondary={
              <FormattedMessage
                id="dataset.registeredDate"
                values={{
                  DATE: <FormattedDate value={dataset.created ?? undefined} {...defaultDateFormatProps} />,
                }}
              />
            }
          >
            <FormattedMessage id={`dataset.longType.${dataset.type}`} />
          </ArticlePreTitle>
          {/* it would be nice to know for sure which fields to expect */}
          <ArticleTitle
            dangerouslySetTitle={{ __html: dataset.title || 'No title provided' }}
          ></ArticleTitle>

          {dataset.publishingOrganizationTitle && (
            <div className="mt-2">
              Published by{' '}
              <DynamicLink
                className="hover:underline text-primary-500"
                to={`/publisher/${dataset.publishingOrganizationKey}`}
              >
                {dataset?.publishingOrganizationTitle}
              </DynamicLink>
            </div>
          )}

          {deletedAt && <DeletedMessage date={deletedAt} />}

          <div className="mt-6 mb-3 flex items-end">
            <div className="flex-grow">
              <div className="flex flex-wrap items-center -my-1 mt-3">
                {contactsCitation.length > 0 && (
                  <GenericFeature>
                    <MdPeople />
                    {contactsCitation.length < contactThreshold && (
                      <span>
                        {contactsCitation.map((c) => c.abbreviatedName).join(' • ')}
                      </span>
                    )}
                    {contactsCitation.length >= contactThreshold && <FormattedMessage id="counts.nAuthors" values={{ total: contactsCitation.length }} />}
                  </GenericFeature>
                )}
                <GenericFeature>
                  <MdLink />{' '}
                  <Hostname href="https://www.gbif.org/dataset/1b7a5c6e-4b9b-4e1e-8f4a-6e2f0f6e6f4e" />
                </GenericFeature>
                <GenericFeature>
                  <LicenceTag value="https://creativecommons.org/licenses/by/4.0/legalcode" />
                </GenericFeature>
                <GenericFeature>23 published datasets</GenericFeature>
              </div>
            </div>
            <div className="flex-shrink">edit</div>
          </div>
          <div className="border-b"></div>
          <Tabs
            links={[
              { to: '.', children: 'About' },
              { to: 'occurrences', children: 'Occurrences' },
              { to: 'download', children: 'Download' },
              // { to: 'citations', children: 'Citations' },
            ]}
          />
        </ArticleTextContainer>
      </ArticleContainer>

      <div className="bg-slate-100">
        <Outlet />
        <div style={{ height: 800 }}></div>
        {/* <div className="text-red-500 mt-4 mb-4">
          <p>
            TODO have tabs that are accessible and can be used as either state push, href links or
            not url linkable tabs (simple react state only) For the dataset page the tabs would have
            state in the url and work as state push
          </p>
          <p>Notice that occurrence search lives in one of the tabs.</p>
          <p>
            The fonts should be themed as well. It is fine that the hp owner have to add the fonts
            themselves to the site head
          </p>
        </div> */}

        <Outlet />
      </div>
    </>
  );
}
