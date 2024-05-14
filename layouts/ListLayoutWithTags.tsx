'use client';
/* eslint-disable jsx-a11y/anchor-is-valid */
import { usePathname } from 'next/navigation';
import { slug } from 'github-slugger';
import { formatDate } from 'pliny/utils/formatDate';
import { CoreContent } from 'pliny/utils/contentlayer';
import type { Blog } from 'contentlayer/generated';
import Link from '@/components/CustomLink';
import Tag from '@/components/Tag';
import siteMetadata from '@/data/siteMetadata';
import tagData from 'app/tag-data.json';
import { FloatingHeader } from '@/components/lab/floating-header';
import { cn } from '@/lib/utils';

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
        <div className="flex-1">
          {!prevPage && (
            <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
              Previous
            </button>
          )}
          {prevPage && (
            <Link href={`/${basePath}/page/${currentPage - 1}`} rel="prev">
              Previous
            </Link>
          )}
        </div>
        <span className="flex flex-1 justify-center">
          {currentPage} of {totalPages}
        </span>
        <div className="flex flex-1 justify-end">
          {!nextPage && (
            <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
              Next
            </button>
          )}
          {nextPage && (
            <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
              Next
            </Link>
          )}
        </div>
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
      <div className="flex h-[100vh] w-full flex-col overflow-y-scroll lg:flex-row">
        <FloatingHeader scrollTitle="Writing" />
        <div className="flex flex-col p-4 lg:flex-row lg:space-x-12 lg:p-0">
          <div className="hidden h-[100vh] w-full min-w-[24rem] max-w-[24rem] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 lg:flex">
            <div className="px-6 py-4">
              {pathname.startsWith('/writing') ? (
                <h3 className="font-bold uppercase text-primary-500">All Posts</h3>
              ) : (
                <Link
                  href={`/writing`}
                  className="font-bold uppercase text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
                >
                  All Posts
                </Link>
              )}
              <ul>
                {sortedTags.map((t) => {
                  return (
                    <li key={t} className="my-3">
                      {pathname.split('/tags/')[1] === slug(t) ? (
                        <h3 className="inline px-3 py-2 text-sm font-bold uppercase text-primary-500">
                          {`${t} (${tagCounts[t]})`}
                        </h3>
                      ) : (
                        <Link
                          href={`/tags/${slug(t)}`}
                          className="px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
                          aria-label={`View posts tagged ${t}`}
                        >
                          {`${t} (${tagCounts[t]})`}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/** Mobile Pill*/}
          <div className="mb-2 inline-flex overflow-x-scroll lg:hidden">
            {sortedTags.map((t) => {
              return (
                <li key={t} className="mr-2 list-none">
                  {decodeURI(pathname.split('/tags/')[1]) === slug(t) ? (
                    <Link href="/writing" aria-label={`View posts tagged ${t}`}>
                      <Pill
                        text={`${t} (${tagCounts[t]})`}
                        className="bg-gray-900/10 text-gray-900 dark:bg-gray-100/10 dark:text-gray-200"
                      />
                    </Link>
                  ) : (
                    <Link href={`/tags/${slug(t)}`} aria-label={`View posts tagged ${t}`}>
                      <Pill text={`${t} (${tagCounts[t]})`} />
                    </Link>
                  )}
                </li>
              );
            })}
          </div>
        </div>
        <div className="flex flex-row justify-start px-5 lg:mt-12 lg:flex-1 lg:flex-col lg:items-center">
          <ul>
            {displayPosts.map((post) => {
              const { path, date, title, summary, tags } = post;
              return (
                <li key={path} className="[&:not(:first-child)]:pt-5">
                  <article className="flex flex-col space-y-2 xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-3">
                      <div>
                        <h2 className="text-xl font-bold leading-8 tracking-tight md:text-2xl">
                          <Link href={`/${path}`} className="text-gray-900 dark:text-gray-100">
                            {title}
                          </Link>
                        </h2>
                        <div className="flex flex-wrap">{tags?.map((tag) => <Tag key={tag} text={tag} />)}</div>
                      </div>
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400">{summary}</div>
                    </div>
                  </article>
                </li>
              );
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
      </div>
    </>
  );
}
