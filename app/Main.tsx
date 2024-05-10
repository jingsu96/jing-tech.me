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
import { MDXLayoutRenderer } from 'pliny/mdx-components';
import { components } from '@/components/MDXComponents';
import { Authors } from 'contentlayer/generated';
import { PageTitle } from '@/components/lab/page-title';
import { Button } from '@/components/lab/ui/button';
import Image from '@/components/Image';

const MAX_DISPLAY = 5;

const WORK_EXPERIENCE = [
  {
    name: 'Houzz',
    link: 'https://www.houzz.com',
    image: '/static/images/experience/houzz.png',
    experience: [
      {
        title: 'Software Engineer',
        level: 'L4',
        period: 'November 2022 - Present',
      },
      {
        title: 'Software Engineer',
        level: 'L3',
        period: 'January-October 2022',
      },
    ],
  },
  {
    name: 'Jkopay',
    link: 'https://www.jkopay.com',
    image: '/static/images/experience/jkopay.png',
    experience: [
      {
        title: 'Frontend Engineer',
        period: 'October 2019 - October 2021',
      },
    ],
  },
];

export default function Home({ posts: items, authors }) {
  return (
    <ScrollArea useScrollAreaId={true}>
      <FloatingHeader scrollTitle="Home" />
      <section className="mx-auto mt-10 max-w-[840px] px-4">
        <div className="grid grid-cols-1 gap-x-16 gap-y-1 sm:grid-cols-3">
          {/* ABOUT ME */}
          <div className="sm:col-span-2 sm:row-span-2">
            <h1 className="text-m mb-m font-bold leading-tight text-[#ff0a78] dark:text-[#ff0a78] sm:text-lg">
              ABOUT ME
            </h1>
            <div className="py-4 sm:pl-0 [&>p]:mb-4">
              <MDXLayoutRenderer code={authors.body.code} components={components} />
            </div>
          </div>

          {/* WORK EXPERIENCE */}
          <div className="flex flex-col justify-center">
            <h1 className="text-m mb-1 font-bold leading-tight text-[#ff0a78] dark:text-[#ff0a78] sm:text-lg">
              WORK EXPERIENCE
            </h1>
            <div className="p-4 sm:pl-2">
              <ol className="relative border-l border-gray-200 dark:border-gray-700">
                {WORK_EXPERIENCE.map((company) => (
                  <li key={company.name} className="mb-6 ml-6">
                    <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-[#fff] dark:bg-blue-900 dark:ring-gray-900">
                      <Image
                        src={company.image}
                        height={24}
                        width={24}
                        alt={company.name}
                        className="rounded-full shadow-lg"
                      />
                    </span>
                    <h2 className="mt-1 text-lg font-bold leading-tight">
                      <Link href={company.link}>{company.name}</Link>
                    </h2>
                    {company.experience.map((exp) => (
                      <div key={exp.period} className="flex-col pt-5 sm:flex">
                        <h3 className="mb-1 flex items-center whitespace-nowrap text-base font-semibold text-gray-900 dark:text-white sm:text-sm md:text-sm lg:text-base">
                          {exp.title} {exp.level ? '- ' + exp.level : null}
                        </h3>
                        <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                          {exp.period}
                        </time>
                      </div>
                    ))}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        <WritingList items={items} />
      </section>
    </ScrollArea>
  );
}

//     {/* <div className="content-wrapper">
//       <div className="content">
//         <PageTitle title="Home" className="lg:hidden" />
//         <p>
//           Hi 👋 I'm Onur (meaning "Honour" in English), a software engineer, dj, writer, and minimalist based in
//           Amsterdam, The Netherlands.
//         </p>
//         <p>
//           I develop things as a Senior Frontend Software Engineer at Bitvavo. Previously, I worked as a Senior
//           Frontend Software Engineer at heycar, Frontend Software Engineer at Yemeksepeti, Fullstack Software Engineer
//           at Sistas, Mobile Developer at Tanbula, and Specialist at Apple.
//         </p>
//         <Button asChild variant="link" className="inline px-0">
//           <Link href="/writing">
//             <h2 className="mb-4 mt-8">Writing</h2>
//           </Link>
//         </Button>
//        <Suspense fallback={<ScreenLoadingSpinner />}>
//           <WritingList items={items} header="Writing" />
//         </Suspense>
//       </div>
//     </div>
//   </ScrollArea>
// );

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
// }
