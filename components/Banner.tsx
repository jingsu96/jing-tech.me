'use client';

import React, { useState, useEffect } from 'react';
import { Info, X } from 'lucide-react';

const MigrationBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if user has dismissed the banner before
    const dismissed = localStorage.getItem('migration-banner-dismissed');
    if (dismissed) {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('migration-banner-dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="w-full border-b border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 dark:border-amber-700/50 dark:from-amber-900/20 dark:to-orange-900/20">
      <div className="mx-auto max-w-7xl px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-1 items-center gap-3">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-800/50">
                <Info className="h-3 w-3 text-amber-600 dark:text-amber-400" />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-wrap items-center gap-1 text-xs text-slate-700 dark:text-slate-200 lg:text-sm">
              <span className="font-medium text-amber-800 dark:text-amber-200">網站遷移公告：</span>
              <span>
                很高興各位讀者近年來的陪伴！本部落格目前正在緩步遷移至{' '}
                <a
                  href="https://www.jingsu.fyi?ref=jing-tech.me&utm_source=jing-tech.me"
                  className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  jingsu.fyi
                </a>
                <span> (個人內容) 以及 </span>
                <a
                  href="https://www.parseweb.dev?ref=jing-tech.me&utm_source=jing-tech.me"
                  className="font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
                >
                  parseweb.dev
                </a>
                <span> (技術相關內容)</span>
              </span>
            </div>
          </div>

          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="group flex-shrink-0 rounded-full p-1 transition-colors duration-200 hover:bg-amber-100 dark:hover:bg-amber-800/50"
            aria-label="關閉公告"
          >
            <X className="h-4 w-4 text-amber-600 group-hover:text-amber-800 dark:text-amber-400 dark:group-hover:text-amber-200" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MigrationBanner;
