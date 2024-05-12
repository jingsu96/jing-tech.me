'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WritingLink } from '@/components/lab/writing-link';
import * as Separator from '@radix-ui/react-separator';
import * as Collapsible from '@radix-ui/react-collapsible';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/lab/ui/breadcrumb';

const WritingListLayout = ({ filteredPosts, slug, classname }) => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const pathname = usePathname();

  const parsedUrl = pathname.split('/');
  const hasTopic = filteredPosts.some((post) => post.topic);

  const groupedPost = hasTopic
    ? filteredPosts.reduce((acc, post) => {
        if (post?.topic && !acc[post.topic]) {
          acc[post.topic] = [];
        }
        acc[post.topic].push(post);
        return acc;
      }, {})
    : { '': filteredPosts };

  return (
    <div className={classname}>
      <AnimatePresence mode="wait" initial={false}>
        {isSidebarVisible && (
          <motion.div
            className="flex max-h-[100vh] w-full min-w-[24rem] max-w-[24rem] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40"
            initial={{ display: 'none', minWidth: 0, width: 0 }}
            animate={{ display: 'flex', minWidth: '24rem' }}
            exit={{ display: 'none', minWidth: 0, width: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {parsedUrl.length > 2 && (
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/writing">Writing</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href={`/writing/${parsedUrl[2]}`}>{parsedUrl[2]}</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{parsedUrl[3]}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            )}

            <ul className="mx-auto mt-10 flex h-full min-w-[24rem] flex-1 flex-col gap-1 px-[15px] text-sm">
              {Object.entries(groupedPost)
                .map(([topic, posts]: [string, any[]]) => {
                  if (topic === '') {
                    return posts?.map?.((post) => (
                      <WritingLink key={post.slug} post={post} isActive={post.slug === slug} />
                    ));
                  }
                  return (
                    <Collapsible.Root key={topic} className="w-full">
                      <Collapsible.Trigger className="flex items-center justify-between px-2 py-1 text-sm font-bold text-gray-800 dark:text-gray-200">
                        <h2>{topic}</h2>
                        <Separator.Root orientation="vertical" />
                      </Collapsible.Trigger>
                      <Collapsible.Content className="flex flex-col gap-1">
                        {posts?.map?.((post) => (
                          <WritingLink key={post.slug} post={post} isActive={post.slug === slug} />
                        ))}
                      </Collapsible.Content>
                    </Collapsible.Root>
                  );
                })
                .flat()}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        className={cn(
          'absolute left-[-15px] top-[50%] hidden rounded-full border border-gray-300 bg-bg-alt p-1 lg:flex'
        )}
        onClick={() => setSidebarVisible((prev) => !prev)}
      >
        {isSidebarVisible ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
      </button>
    </div>
  );
};

export default WritingListLayout;
