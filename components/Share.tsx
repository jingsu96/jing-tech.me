'use client';

import { Button } from '@/components/lab/ui/button';
import { Threads, X } from './social-icons/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Share() {
  const pathname = usePathname();
  const shareUrl = `https://v2.jing-tech.me/${pathname}`;
  return (
    <div className="flex items-center">
      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">分享到：</span>
      <Button asChild variant="ghost" size="sm" className="hover:bg-[#1DA1F2]/10">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={`https://twitter.com/share?url=${encodeURI(shareUrl)}&text=${encodeURI(`@jing_tech_tw`)}`}
        >
          <X className="share-icon h-3 w-3" />
          <span className="sr-only">Share on Twitter</span>
        </Link>
      </Button>
      <Button variant="ghost" size="sm" className="hover:bg-[#1DA1F2]/10">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={`https://threads.net/intent/post?text=${encodeURI(`${shareUrl} @jing.tech`)}`}
        >
          <Threads className="share-icon h-3 w-3" />
          <span className="sr-only">Share on Facebook</span>
        </Link>
      </Button>
    </div>
  );
}
