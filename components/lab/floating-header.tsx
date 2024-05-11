'use client';

import { memo, useState } from 'react';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';
import { ArrowLeftIcon, RadioIcon, Search } from 'lucide-react';

import { Button } from '@/components/lab/ui/button';
import { LoadingSpinner } from '@/components/lab/loading-spinner';
import ThemeSwitch from '@/components/ThemeSwitch';
import SearchButton from '../SearchButton';
const MobileDrawer = dynamic(() => import('@/components/lab/mobile-drawer').then((mod) => mod.MobileDrawer));
const SubmitBookmarkDrawer = dynamic(
  () => import('@/components/lab/submit-bookmark/drawer').then((mod) => mod.SubmitBookmarkDrawer),
  {
    loading: () => <LoadingSpinner />,
    ssr: false,
  }
);

const SCROLL_AREA_ID = 'scroll-area';
const MOBILE_SCROLL_THRESHOLD = 20;

export const FloatingHeader = memo(
  ({
    scrollTitle,
    title,
    goBackLink,
    bookmarks,
    currentBookmark,
    children,
  }: {
    scrollTitle?: string;
    title?: string;
    goBackLink?: string;
    bookmarks?: any;
    currentBookmark?: any;
    children?: React.ReactNode;
  }) => {
    const [transformValues, setTransformValues] = useState({
      translateY: 0,
      opacity: scrollTitle ? 0 : 1,
    });
    const pathname = usePathname();
    const isWritingIndexPage = pathname === '/writing';
    const isWritingPath = pathname.startsWith('/writing');
    const isBookmarksIndexPage = pathname === '/bookmarks';
    const isBookmarkPath = pathname.startsWith('/bookmarks');

    return (
      <header className="sticky inset-x-0 top-0 z-10 mx-auto flex h-12 w-full shrink-0 items-center overflow-hidden bg-bg-primary text-sm font-medium shadow-jt1 lg:hidden">
        <div className="flex size-full items-center px-3">
          <div className="flex w-full items-center justify-between gap-2">
            <div className="flex flex-1 items-center gap-1">
              {goBackLink ? (
                <Button variant="ghost" size="icon" className="shrink-0 bg-bg-primary" asChild>
                  <Link href={goBackLink} title="Go back">
                    <ArrowLeftIcon size={16} />
                  </Link>
                </Button>
              ) : (
                <MobileDrawer />
              )}
              <div className="flex flex-1 items-center justify-between">
                {scrollTitle && <span className="line-clamp-2 font-semibold tracking-tight">{scrollTitle}</span>}
                {title && (
                  <Balancer ratio={0.35}>
                    <span className="line-clamp-2 font-semibold tracking-tight">{title}</span>
                  </Balancer>
                )}
                <div className="inline-flex">
                  <SearchButton />
                  <ThemeSwitch className="mx-4 inline-flex items-center" />
                  <div className="flex items-center gap-2">
                    {(isWritingIndexPage || isBookmarksIndexPage) && (
                      <Button variant="outline" size="xs" asChild>
                        <a href="/feed.xml" title="RSS feed" target="_blank" rel="noopener noreferrer">
                          <RadioIcon size={16} className="mr-2" />
                          RSS feed
                        </a>
                      </Button>
                    )}
                    {isBookmarkPath && <SubmitBookmarkDrawer bookmarks={bookmarks} currentBookmark={currentBookmark} />}
                  </div>
                </div>
              </div>
            </div>

            {/* {scrollTitle && isWritingPath && <div className="flex min-w-[50px] justify-end">{children}</div>} */}
          </div>
        </div>
      </header>
    );
  }
);

FloatingHeader.displayName = 'FloatingHeader';
