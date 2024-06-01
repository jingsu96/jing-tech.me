'use client';

import siteMetadata from '@/data/siteMetadata';
import { PropsWithChildren, useEffect, useState } from 'react';
import { ArrowUp, MessageCircleMore } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import useMobileDetect from '@/hooks/useMobileDetect';

const FloatButton = ({
  onClick,
  label,
  children,
}: PropsWithChildren<{
  onClick: () => void;
  label: string;
}>) => (
  <button
    aria-label={label}
    onClick={onClick}
    className="rounded-xl bg-bg-alt p-2 text-text-1 shadow-jt2 transition-all hover:bg-gray-200 dark:bg-bg-elv dark:text-gray-400 dark:hover:bg-gray-600"
  >
    {children}
  </button>
);

const ScrollTopAndComment = () => {
  const [show, setShow] = useState(false);
  const { isMobile: getIsMobile } = useMobileDetect();
  const isMobile = getIsMobile();

  useEffect(() => {
    const element = isMobile ? window : document.getElementById('jt-article');
    const handleWindowScroll = () => {
      const position = isMobile ? window.scrollY : (element as HTMLElement).scrollTop;
      if (position > 50) setShow(true);
      else setShow(false);
    };

    if (!element) return;

    element.addEventListener('scroll', handleWindowScroll);

    return () => {
      element.removeEventListener('scroll', handleWindowScroll);
    };
  }, [isMobile]);

  const handleScrollTop = () => {
    const element = isMobile ? window : (document.getElementById('jt-article') as HTMLElement);
    element.scrollTo({ top: 0, behavior: 'smooth' });
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
          className={'fixed bottom-2 right-2 z-50 flex flex-col gap-3 lg:bottom-8 lg:right-8'}
        >
          {siteMetadata.comments?.provider && (
            <FloatButton label="Scroll To Comment" onClick={handleScrollToComment}>
              <MessageCircleMore size={16} />
            </FloatButton>
          )}
          <FloatButton label="Scroll To Top" onClick={handleScrollTop}>
            <ArrowUp size={16} />
          </FloatButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollTopAndComment;
