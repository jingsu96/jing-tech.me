'use client';
/* eslint-disable jsx-a11y/anchor-is-valid */
import { usePathname } from 'next/navigation';
import { slug } from 'github-slugger';
import { CoreContent } from 'pliny/utils/contentlayer';
import type { Blog } from 'contentlayer/generated';
import Link from '@/components/CustomLink';
import tagData from 'app/tag-data.json';
import { FloatingHeader } from '@/components/lab/floating-header';
import { cn, upperFirst } from '@/lib/utils';
import ListItem from '@/components/ListItem';
import { TOPIC_EN_TO_ZH } from '@/lib/constants';
import { ScrollArea } from '@/components/lab/scroll-area';
import { TagIcon } from 'lucide-react';
import {
  Pagination as PaginationRoot,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/lab/ui/pagination';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  v2: boolean;
  className?: string;
}
interface ListLayoutProps {
  posts: CoreContent<Blog>[];
  title: string;
  initialDisplayPosts?: CoreContent<Blog>[];
  pagination?: PaginationProps;
}

function Pagination({ totalPages, currentPage, v2, className }: PaginationProps) {
  const pathname = usePathname();
  let basePath = pathname.split('/')[1];

  if (v2) {
    basePath = pathname.split('/')[1] + '/' + pathname.split('/')[2];
  }

  const prevPage = currentPage - 1 > 0;
  const nextPage = currentPage + 1 <= totalPages;

  return (
    <div className={cn('mt-auto px-6 py-4 lg:pb-10 lg:pt-0', className)}>
      <nav className="flex w-full justify-between lg:justify-around">
        <PaginationRoot>
          <PaginationContent>
            <PaginationItem className="w-[88px]">
              {prevPage && (
                <PaginationPrevious
                  href={`/${basePath}/page/${currentPage - 1}`}
                  rel="prev"
                  className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-text-1"
                />
              )}
            </PaginationItem>
            <PaginationItem className="mx-2">
              {currentPage} {'/'} {totalPages}
            </PaginationItem>
            <PaginationItem className="w-[88px]">
              {nextPage && (
                <PaginationNext
                  href={`/${basePath}/page/${currentPage + 1}`}
                  rel="next"
                  className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-text-1"
                />
              )}
            </PaginationItem>
          </PaginationContent>
        </PaginationRoot>
      </nav>
    </div>
  );
}

const Pill = ({ text, className }: { text: string; className?: string }) => (
  <div
    className={cn(
      'relative grid select-none items-center whitespace-nowrap rounded-lg border border-gray-900 px-3 py-1.5 font-sans text-xs font-bold uppercase text-gray-700 dark:bg-bg-primary dark:text-gray-300',
      className
    )}
  >
    <span>{text}</span>
  </div>
);

export default function ListLayoutWithTags({ posts, title, initialDisplayPosts = [], pagination }: ListLayoutProps) {
  const pathname = usePathname();
  const tagCounts = tagData as Record<string, number>;
  const tagKeys = Object.keys(tagCounts);
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a]);

  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts;

  return (
    <>
      <div className="flex w-full flex-col md:h-[100vh] md:overflow-y-scroll lg:flex-row">
        <FloatingHeader scrollTitle="文章" />
        <div className="flex flex-col p-4 lg:flex-row lg:space-x-12 lg:p-0">
          <div className="hidden h-[100vh] w-full min-w-[22rem] max-w-[22rem] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 lg:flex">
            <div className="w-full px-6 py-4">
              {pathname.startsWith('/writing') ? (
                <h3 className="font-bold uppercase text-indigo-1">所有主題</h3>
              ) : (
                <Link href={`/writing`} className="font-bold uppercase text-gray-700 text-indigo-1">
                  所有主題
                </Link>
              )}
              <ul>
                {sortedTags.map((t) => {
                  return (
                    <li
                      key={t}
                      className={`mt-1 flex w-full items-center gap-1 rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${pathname.split('/tags/')[1]?.includes(slug(t)) ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                    >
                      <TagIcon className="h-4 w-4" />
                      <Link
                        href={`/tags/${slug(t)}`}
                        className="ml-1 py-1 text-sm font-medium"
                        aria-label={`View posts tagged ${t}`}
                      >
                        {`${upperFirst(TOPIC_EN_TO_ZH[t])}`}
                        <span className="ml-1 text-xs text-text-2">{tagCounts[t]} 篇文章</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/** Mobile Pill*/}
          <div className="inline-flex overflow-x-scroll lg:hidden">
            {sortedTags.map((t) => {
              return (
                <li key={t} className="mr-2 list-none">
                  {pathname.split('/tags/')[1]?.includes(slug(t)) ? (
                    <Link href="/writing" aria-label={`View posts tagged ${t}`}>
                      <Pill
                        text={`${TOPIC_EN_TO_ZH[t] || t} (${tagCounts[t]})`}
                        className="bg-gray-900/10 text-gray-900 dark:bg-gray-100/10 dark:text-gray-200"
                      />
                    </Link>
                  ) : (
                    <Link href={`/tags/${slug(t)}`} aria-label={`View posts tagged ${t}`}>
                      <Pill text={`${TOPIC_EN_TO_ZH[t] || t} (${tagCounts[t]})`} />
                    </Link>
                  )}
                </li>
              );
            })}
          </div>
        </div>
        <ScrollArea className="hidden w-full lg:flex">
          <div className="flex flex-row justify-start px-5 lg:mt-8 lg:flex-1 lg:flex-col lg:items-center">
            <ul className="mx-auto w-full max-w-[calc(750px+8vw)] divide-y divide-divider dark:text-divider md:px-[4vw]">
              {displayPosts.map((post) => {
                const { path, date, title, tags } = post;
                return <ListItem key={path} date={date} title={title} path={path} tags={tags} />;
              })}
            </ul>
            {pagination && pagination.totalPages > 1 && (
              <Pagination
                className="hidden lg:flex lg:w-[60%]"
                currentPage={pagination.currentPage}
                totalPages={pagination.totalPages}
                v2={pagination.v2}
              />
            )}
          </div>
          {pagination && pagination.totalPages > 1 && (
            <Pagination
              className="flex lg:hidden"
              currentPage={pagination.currentPage}
              totalPages={pagination.totalPages}
              v2={pagination.v2}
            />
          )}
        </ScrollArea>
      </div>
    </>
  );
}
