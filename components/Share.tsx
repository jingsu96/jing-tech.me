'use client';

import { useState } from 'react';
import { Button } from '@/components/lab/ui/button';
import { Threads, X } from './social-icons/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Copy, CopyCheck } from 'lucide-react';

export default function Share() {
  const pathname = usePathname();
  const shareUrl = `https://www.jing-tech.me/${pathname}`;
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(shareUrl);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center gap-y-3">
      <span className="text-text-1">
        如果您喜歡這篇文章，請點擊下方按鈕分享給更多人，這將是對筆者創作的最大支持和鼓勵。
      </span>
      <div className="flex items-center justify-center gap-x-3">
        <Button asChild variant="ghost" size="icon" className="bg-[#1DA1F2]/5 hover:bg-[#1DA1F2]/10">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={`https://twitter.com/share?url=${encodeURI(shareUrl)}&text=${encodeURI(`@jing_tech_tw`)}`}
          >
            <X className="share-icon h-5 w-5" />
            <span className="sr-only">Share on Twitter</span>
          </Link>
        </Button>
        <Button variant="ghost" size="icon" className="bg-[#1DA1F2]/5 hover:bg-[#1DA1F2]/10">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={`https://threads.net/intent/post?text=${encodeURI(`${shareUrl} @jing.tech`)}`}
          >
            <Threads className="share-icon h-5 w-5" />
            <span className="sr-only">Share on Thread</span>
          </Link>
        </Button>
        <Button variant="ghost" size="icon" className="bg-[#1DA1F2]/5 hover:bg-[#1DA1F2]/10">
          {copied ? (
            <CopyCheck className="h-5 w-5 text-black dark:text-white hover:dark:text-white" />
          ) : (
            <Copy className="h-5 w-5 text-black dark:text-white hover:dark:text-white" onClick={onCopy} />
          )}
          <span className="sr-only">Copy</span>
        </Button>
      </div>
    </div>
  );
}
