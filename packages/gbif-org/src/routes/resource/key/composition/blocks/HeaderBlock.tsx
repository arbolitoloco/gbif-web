import { HeaderBlockDetailsFragment } from '@/gql/graphql';
import { ArticleBanner } from '../../components/ArticleBanner';
import { ArticleIntro } from '../../components/ArticleIntro';
import { ArticlePreTitle } from '../../components/ArticlePreTitle';
import { ArticleTextContainer } from '../../components/ArticleTextContainer';
import { ArticleTitle } from '../../components/ArticleTitle';
import { fragmentManager } from '@/services/FragmentManager';
import { FormattedMessage } from 'react-intl';
import { BlockContainer } from './_shared';

fragmentManager.register(/* GraphQL */ `
  fragment HeaderBlockDetails on HeaderBlock {
    __typename
    title
    summary
    hideTitle
    primaryImage {
      ...ArticleBanner
    }
  }
`);

type Props = {
  resource: HeaderBlockDetailsFragment;
  resourceType?: string;
};

export function HeaderBlock({ resource, resourceType }: Props) {
  return (
    <BlockContainer className="pb-0">
      <ArticleTextContainer>
        {resourceType && (
          <ArticlePreTitle>
            <FormattedMessage id={`cms.contentType.${resourceType}`} />
          </ArticlePreTitle>
        )}

        {!resource.hideTitle && resource.title && <ArticleTitle title={resource.title} />}

        {resource.summary && (
          <ArticleIntro dangerouslySetInnerHTML={{ __html: resource.summary }} className="mt-2" />
        )}
      </ArticleTextContainer>

      <ArticleBanner className="mt-8" image={resource?.primaryImage} />
    </BlockContainer>
  );
}
