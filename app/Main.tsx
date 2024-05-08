import Link from '@/components/CustomLink';
import Tag from '@/components/Tag';
import siteMetadata from '@/data/siteMetadata';
import { formatDate } from 'pliny/utils/formatDate';
import NewsletterForm from 'pliny/ui/NewsletterForm';

import { Suspense } from 'react';
import { ScrollArea } from '@/components/lab/scroll-area';
import { ScreenLoadingSpinner } from '@/components/lab/screen-loading-spinner';
import { WritingList } from '@/components/lab/writing-list';
import { FloatingHeader } from '@/components/lab/floating-header';
import { PageTitle } from '@/components/lab/page-title';
import { Button } from '@/components/lab/ui/button';

const MAX_DISPLAY = 5;

export default function Home({ posts: items }) {
  return (
    <ScrollArea useScrollAreaId={true}>
      <FloatingHeader scrollTitle="Home" />
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title="Home" className="lg:hidden" />
          <p>
            Hi 👋 I'm Onur (meaning "Honour" in English), a software engineer, dj, writer, and minimalist based in
            Amsterdam, The Netherlands.
          </p>
          <p>
            I develop things as a Senior Frontend Software Engineer at Bitvavo. Previously, I worked as a Senior
            Frontend Software Engineer at heycar, Frontend Software Engineer at Yemeksepeti, Fullstack Software Engineer
            at Sistas, Mobile Developer at Tanbula, and Specialist at Apple.
          </p>
          <Button asChild variant="link" className="inline px-0">
            <Link href="/writing">
              <h2 className="mb-4 mt-8">Writing</h2>
            </Link>
          </Button>
          {/* <Suspense fallback={<ScreenLoadingSpinner />}>
            <WritingList items={items} header="Writing" />
          </Suspense> */}
        </div>
      </div>
    </ScrollArea>
  );

  // <>
  //   <div className="divide-y divide-gray-200 dark:divide-gray-700">
  //     <div className="space-y-2 pb-8 pt-6 md:space-y-5">
  //       <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
  //         Latest
  //       </h1>
  //       <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
  //         {siteMetadata.description}
  //       </p>
  //     </div>
  //     <ul className="divide-y divide-gray-200 dark:divide-gray-700">
  //       {!posts.length && 'No posts found.'}
  //       {posts.slice(0, MAX_DISPLAY).map((post) => {
  //         const { slug, date, title, summary, tags } = post
  //         return (
  //           <li key={slug} className="py-12">
  //             <article>
  //               <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
  //                 <dl>
  //                   <dt className="sr-only">Published on</dt>
  //                   <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
  //                     <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
  //                   </dd>
  //                 </dl>
  //                 <div className="space-y-5 xl:col-span-3">
  //                   <div className="space-y-6">
  //                     <div>
  //                       <h2 className="text-2xl font-bold leading-8 tracking-tight">
  //                         <Link
  //                           href={`/blog/${slug}`}
  //                           className="text-gray-900 dark:text-gray-100"
  //                         >
  //                           {title}
  //                         </Link>
  //                       </h2>
  //                       <div className="flex flex-wrap">
  //                         {tags.map((tag) => (
  //                           <Tag key={tag} text={tag} />
  //                         ))}
  //                       </div>
  //                     </div>
  //                     <div className="prose max-w-none text-gray-500 dark:text-gray-400">
  //                       {summary}
  //                     </div>
  //                   </div>
  //                   <div className="text-base font-medium leading-6">
  //                     <Link
  //                       href={`/blog/${slug}`}
  //                       className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
  //                       aria-label={`Read more: "${title}"`}
  //                     >
  //                       Read more &rarr;
  //                     </Link>
  //                   </div>
  //                 </div>
  //               </div>
  //             </article>
  //           </li>
  //         )
  //       })}
  //     </ul>
  //   </div>
  //   {posts.length > MAX_DISPLAY && (
  //     <div className="flex justify-end text-base font-medium leading-6">
  //       <Link
  //         href="/blog"
  //         className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
  //         aria-label="All posts"
  //       >
  //         All Posts &rarr;
  //       </Link>
  //     </div>
  //   )}
  //   {siteMetadata.newsletter?.provider && (
  //     <div className="flex items-center justify-center pt-4">
  //       <NewsletterForm />
  //     </div>
  //   )}
  // </>
  // )
}
