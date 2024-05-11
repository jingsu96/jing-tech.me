'use client';

import siteMetadata from '@/data/siteMetadata';
import { useEffect, useState } from 'react';
import { ArrowUp, MessageCircleMore } from 'lucide-react';

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
    <div className={`z-100 fixed bottom-8 right-8 hidden flex-col gap-3 ${show ? 'md:flex' : 'md:hidden'}`}>
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
    </div>
  );
};

export default ScrollTopAndComment;
