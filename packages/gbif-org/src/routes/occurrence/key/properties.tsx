import React from 'react';
import { Term as T, Value as V, AutomaticPropertyValue } from '@/components/Properties';
import { FormattedMessage } from 'react-intl';
import { OccurrenceTermFragment } from '@/gql/graphql';

// import { prettifyEnum } from '../../../utils/labelMaker/config2labels';

function prettifyEnum(str?: string | null) {
  return str;
}

function startCase(str?: string | null) {
  return str;
}

const licenseMap = {
  CC0_1_0: 'http://creativecommons.org/publicdomain/zero/1.0/legalcode',
  CC_BY_4_0: 'http://creativecommons.org/licenses/by/4.0/legalcode',
  CC_BY_NC_4_0: 'http://creativecommons.org/licenses/by-nc/4.0/legalcode',
};

export function HtmlField(props: { term: OccurrenceTermFragment, showDetails?: boolean }) {
  if (!props.term) return null;
  const { htmlValue } = props.term;
  return (
    <Field {...props}>
      <AutomaticPropertyValue
        value={htmlValue}
        formatter={(val) => <span dangerouslySetInnerHTML={{ __html: val }} />}
      />
    </Field>
  );
}

export function PlainTextField(props: { term: OccurrenceTermFragment, showDetails?: boolean }) {
  if (!props.term) return null;
  const { value, htmlValue } = props.term;
  return (
    <Field {...props}>
      <AutomaticPropertyValue value={value} />
    </Field>
  );
}

export function CustomValueField(props: { term: OccurrenceTermFragment }) {
  if (!props.term) return null;
  return <Field {...props} />;
}

export function EnumField({
  getEnum,
  ...props
}: {
  term: OccurrenceTermFragment;
  showDetails?: boolean;
  getEnum: (value: string) => string;
}) {
  if (!props.term) return null;
  const { value } = props.term;
  return (
    <Field {...props}>
      <FormattedMessage id={getEnum(value)} defaultMessage={value} />
    </Field>
  );
}

export function LicenseField({
  getEnum,
  label,
  term,
  ...props
}: {
  term: OccurrenceTermFragment;
  getEnum: (value: string) => string;
  label?: string;
}) {
  if (!term) return null;
  const { value } = term;
  const license = typeof value === 'string' ? value : 'UNKNOWN';
  const licenseLink = licenseMap[license]; // TODO, handle typescript complaints
  return (
    <>
      <T>
        <FormattedMessage id={label || 'occurrenceFieldNames.license'} defaultMessage="License" />
      </T>
      <V>
        {licenseLink && (
          <a href={licenseLink}>
            <FormattedMessage id={`enums.license.${value}`} defaultMessage={value} />
          </a>
        )}
        {!licenseLink && term.verbatim}
      </V>
    </>
  );
}

export function BasicField({
  label,
  children,
  ...props
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <T>
        <FormattedMessage id={label} defaultMessage={label} />
      </T>
      <V {...props}>{children}</V>
    </>
  );
}

export function Field({
  term,
  label,
  showDetails,
  hideIssues,
  hideRemarks,
  ...props
}: {
  term: OccurrenceTermFragment;
  label?: string;
  showDetails?: boolean;
  hideIssues?: boolean;
  hideRemarks?: boolean;
}) {
  const { simpleName, verbatim, value } = term;
  if (isEmpty(value) && (!verbatim || !showDetails)) return null;

  const fieldName = label || `occurrenceFieldNames.${simpleName}`;
  return (
    <React.Fragment {...props}>
      <T>
        <FormattedMessage id={fieldName} defaultMessage={startCase(simpleName) ?? ''} />
      </T>
      <V style={{ position: 'relative' }}>
        <div style={{ display: 'inline-block', paddingRight: 8 }} {...props}></div>
        <Chips
          issues={term.issues}
          remarks={term.remarks}
          hideRemarks={hideRemarks}
          hideIssues={hideIssues}
        />
        <Provenance {...{ term, showDetails, hideRemarks }} />
      </V>
    </React.Fragment>
  );
}

function Provenance({
  term,
  showDetails,
}: {
  term: OccurrenceTermFragment;
  showDetails?: boolean;
}) {
  // should show if inferred or different from original value. Or if user has asked to see everything.
  if (!term.verbatim) return null;
  if (!showDetails && term.remarks !== 'INFERRED' && term.remarks !== 'ALTERED') return null;
  return (
    <div title="Verbatim">
      <span style={{ opacity: 0.6, whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>
        {term.verbatim}
      </span>{' '}
      <Tags>
        <Tag type="light">
          <FormattedMessage id="occurrenceDetails.info.original" />
        </Tag>
        {term.value === null && (
          <Tag type="light">
            <FormattedMessage id="occurrenceDetails.info.excluded" />
          </Tag>
        )}
      </Tags>
    </div>
  );
}

export function Chips({
  issues = [],
  remarks,
  hideRemarks,
  hideIssues,
}: {
  issues?: any[] | null;
  remarks?: string | null;
  hideRemarks?: boolean;
  hideIssues?: boolean;
}) {
  const isInferred = remarks === 'INFERRED';
  const isAltered = remarks === 'ALTERED';
  const hasRemarks = !hideRemarks && (isInferred || isAltered);
  const hasIssues = !hideIssues && issues && issues?.length > 0;
  if (!hasIssues && !hasRemarks) return null;

  return (
    <Tags>
      {hasIssues &&
        issues.map((i) => (
          <Tag type={i.severity} key={i.id}>
            <FormattedMessage
              id={`enums.occurrenceIssue.${i.id}`}
              defaultMessage={prettifyEnum(i.id) ?? ''}
            />
          </Tag>
        ))}

      {!hideRemarks && (
        <>
          {isInferred && (
            <Tag type="INFO">
              <FormattedMessage id="occurrenceDetails.info.inferred" defaultMessage="Inferred" />
            </Tag>
          )}
          {isAltered && (
            <Tag type="INFO">
              <FormattedMessage id="occurrenceDetails.info.altered" defaultMessage="Altered" />
            </Tag>
          )}
        </>
      )}
    </Tags>
  );
}

function Tags({ children }: { children: React.ReactNode }) {
  return <div className="-mx-1 inline-block">{children}</div>;
}

function Tag({ type, children }: { type: string; children: React.ReactNode }) {
  const colors: { [key: string]: string } = {
    INFO: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    WARNING: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    ERROR: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    LIGHT: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300',
  };
  const color = colors[type] ?? colors.LIGHT;

  return (
    <span className={`inline-block mx-1 text-xs font-medium me-2 px-2.5 py-0.5 rounded ${color}`}>
      {children}
    </span>
  );
}

function isEmpty(value: any) {
  return value === null || value === undefined || (Array.isArray(value) && value.length === 0);
}
