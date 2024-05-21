'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WritingLink } from '@/components/lab/writing-link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/lab/ui/accordion';
import ReadingProgress from '@/components/lab/reading-progress';
import useMobileDetect from '@/hooks/useMobileDetect';

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
  return (
    <AccordionItem value={topic}>
      <AccordionTrigger
        className={cn(
          'my-2 flex w-full items-center justify-between rounded-lg px-2 py-2 text-lg font-bold text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800'
        )}
      >
        <h2>{topic}</h2>
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-1">
        {posts?.map?.((post) => <WritingLink key={post.slug} post={post} isActive={post.slug === slug} />)}
      </AccordionContent>
    </AccordionItem>
  );
};

const WritingListLayout = ({ filteredPosts, slug, classname }) => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const hasTopic = filteredPosts.some((post) => post.topic);
  const currentTopic = filteredPosts.find((post) => post.slug === slug)?.topic;

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
    <>
      <div className={classname}>
        <AnimatePresence mode="wait" initial={false}>
          {isSidebarVisible && (
            <motion.div
              className="flex max-h-[100vh] w-full min-w-[22rem] max-w-[22rem] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 "
              initial={{ display: 'none', minWidth: 0, width: 0 }}
              animate={{ display: 'flex', minWidth: '22rem' }}
              exit={{ display: 'none', minWidth: 0, width: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <ul className="mx-auto mt-6 flex h-[calc(100vh-70px)] min-w-[22rem] flex-1 flex-col gap-1 text-sm xl:px-2 3xl:px-[10px]">
                <Accordion className="w-full" type="single" collapsible defaultValue={currentTopic}>
                  {Object.entries(groupedPost)
                    .map(([topic, posts]: [string, any[]]) => {
                      if (topic === '') {
                        return posts?.map?.((post) => (
                          <WritingLink key={post.slug} post={post} isActive={post.slug === slug} />
                        ));
                      }

                      const activeTopic = posts.some((post) => post.slug === slug);

                      return (
                        <CollapsibleList
                          key={topic}
                          activeTopic={activeTopic}
                          topic={topic}
                          posts={posts}
                          slug={slug}
                        />
                      );
                    })
                    .flat()}
                </Accordion>
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
      {/* {!isSidebarVisible && <ReadingProgress className="hidden xl:flex" />}{' '} */}
    </>
  );
};

export default WritingListLayout;
