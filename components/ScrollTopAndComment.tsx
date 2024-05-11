'use client';

import siteMetadata from '@/data/siteMetadata';
import { useEffect, useState } from 'react';
import { ArrowUp, MessageCircleMore } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const ScrollTopAndComment = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const jtArticle = document.getElementById('jt-article') as HTMLElement;
    const handleWindowScroll = () => {
      if (jtArticle.scrollTop > 50) setShow(true);
      else setShow(false);
    };

    jtArticle.addEventListener('scroll', handleWindowScroll);
    return () => jtArticle.removeEventListener('scroll', handleWindowScroll);
  }, []);

  const handleScrollTop = () => {
    const jtArticle = document.getElementById('jt-article') as HTMLElement;
    jtArticle.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToComment = () => {
    document.getElementById('comment')?.scrollIntoView();
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: 'easeIn' }}
          className={'fixed bottom-8 right-8 hidden flex-col gap-3 md:flex'}
        >
          {siteMetadata.comments?.provider && (
            <button
              aria-label="Scroll To Comment"
              onClick={handleScrollToComment}
              className="rounded-lg bg-bg-alt p-2 text-text-1 shadow-jt2 transition-all hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
            >
              <MessageCircleMore size={16} />
            </button>
          )}
          <button
            aria-label="Scroll To Top"
            onClick={handleScrollTop}
            className="rounded-lg bg-bg-alt p-2 text-text-1 shadow-jt2 transition-all hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
          >
            <ArrowUp size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollTopAndComment;
