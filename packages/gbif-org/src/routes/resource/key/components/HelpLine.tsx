import { MdInfoOutline } from 'react-icons/md';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Skeleton } from '@/components/ui/skeleton';
import { Failed, useHelp } from '../project/HelpText';

export function HelpLine({
  title,
  body,
  loading,
  icon,
  error
}: {
  title: string;
  body: string;
  loading?: boolean;
  icon?: boolean | React.ReactNode;
  error?: Error;
}) {
  return (
    <Popover>
      <PopoverTrigger>
        {error && <Failed />}
        {!error && loading && <Skeleton className="inline">Loading</Skeleton>}
        {!loading && !error && (
          <>
            {title} {icon && (typeof icon === 'boolean' ? <MdInfoOutline /> : icon)}
          </>
        )}
      </PopoverTrigger>
      <PopoverContent className="prose max-w-lg w-auto">
        {error && <Failed />}
        {body && <div dangerouslySetInnerHTML={{ __html: body ?? '' }}></div>}
        {!body || loading && <Skeleton>Loading</Skeleton>}
      </PopoverContent>
    </Popover>
  );
}

export function HelpLineFromId({
  id,
  title: userTitle,
  ...props
}: { id: string; title?: React.ReactNode } & React.HTMLProps<HTMLDivElement>) {
  const { loading, body, title, error } = useHelp(id);
  return <HelpLine title={userTitle ?? title} body={body} loading={loading} error={error} {...props}/>;
}
