import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/lab/ui/breadcrumb';
import { upperFirst } from '@/lib/utils';

type breadcrumbType = {
  name: string;
  url: string;
};

export const WritingBreadcrumb = ({ path, className }: { path: string; className?: string }) => {
  const parsedUrl = `/${path}`.split('/').reduce((acc: breadcrumbType[], name, idx) => {
    if (idx === 0) {
      acc.push({ name: name, url: name });
      return acc;
    }
    acc.push({ name, url: acc[idx - 1]?.url.concat(`/${name}`) });
    return acc;
  }, []);

  return (
    <Breadcrumb className={className}>
      <BreadcrumbList className="mx-6 w-[20rem]">
        {parsedUrl.map(({ name, url }, idx) => {
          if (!name || !url) return null;
          return idx === parsedUrl.length - 1 ? (
            <BreadcrumbItem key={url}>
              <BreadcrumbPage className="font-semibold">{upperFirst(name)}</BreadcrumbPage>
            </BreadcrumbItem>
          ) : (
            <>
              <BreadcrumbItem key={url}>
                <BreadcrumbLink href={url}>{upperFirst(name)}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator key={idx} />
            </>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
