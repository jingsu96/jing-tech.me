'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WritingLink } from '@/components/lab/writing-link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const WritingListLayout = ({ filteredPosts, slug, classname }) => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  return (
    <div className={classname}>
      <AnimatePresence mode="wait" initial={false}>
        {isSidebarVisible && (
          <motion.div
            className="flex min-h-[100vh] w-full min-w-[24rem] max-w-[24rem] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40"
            initial={{ display: 'none', minWidth: 0, width: 0 }}
            animate={{ display: 'flex', minWidth: '24rem' }}
            exit={{ display: 'none', minWidth: 0, width: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <ul className="mx-auto mt-10 flex min-w-[24rem] flex-1 flex-col gap-1 px-[15px] text-sm">
              {filteredPosts.map((post) => {
                return <WritingLink key={post.slug} post={post} isActive={post.slug === slug} />;
              })}
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
