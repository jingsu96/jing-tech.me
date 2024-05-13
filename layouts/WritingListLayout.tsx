'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WritingLink } from '@/components/lab/writing-link';
import * as Collapsible from '@radix-ui/react-collapsible';
import { ArrowLeft, ArrowRight, ChevronRight, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { WritingBreadcrumb } from '@/components/lab/writing-breadcrumb';

const CollapsibleList = ({
  activeTopic,
  topic,
  posts,
  slug,
}: {
  activeTopic: boolean;
  topic: string;
  posts: any[];
  slug: string;
}) => {
  const [open, setOpen] = useState(activeTopic);
  return (
    <Collapsible.Root key={topic} className="w-full" open={open} onOpenChange={setOpen}>
      <Collapsible.Trigger className="flex w-full items-center justify-between px-2 py-2 text-lg font-bold text-gray-800 dark:text-gray-200">
        <h2>{topic}</h2>
        {open ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      </Collapsible.Trigger>
      <Collapsible.Content className="flex flex-col gap-1">
        {posts?.map?.((post) => <WritingLink key={post.slug} post={post} isActive={post.slug === slug} />)}
      </Collapsible.Content>
    </Collapsible.Root>
  );
};

const WritingListLayout = ({ filteredPosts, slug, classname, path }) => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
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
            <WritingBreadcrumb path={path} />
            <ul className="mx-auto mt-6 flex h-full min-w-[24rem] flex-1 flex-col gap-1 px-[15px] text-sm">
              {Object.entries(groupedPost)
                .map(([topic, posts]: [string, any[]]) => {
                  if (topic === '') {
                    return posts?.map?.((post) => (
                      <WritingLink key={post.slug} post={post} isActive={post.slug === slug} />
                    ));
                  }
                  const activeTopic = posts.some((post) => post.slug === slug);

                  return (
                    <CollapsibleList key={topic} activeTopic={activeTopic} topic={topic} posts={posts} slug={slug} />
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
