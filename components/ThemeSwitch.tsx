'use client';

import { useEffect, useState, useLayoutEffect } from 'react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { Sun, Moon, Monitor } from 'lucide-react';
import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components/lab/ui/select';

const ThemeSwitch = ({ className, offSet = 4 }: { className?: string; offSet?: number }) => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useLayoutEffect(() => {
    // set meta name theme-color based on theme
    const metaThemeColor = document.querySelector('meta[name=theme-color]');

    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', resolvedTheme === 'dark' ? '#1b1b1f' : '#FFF');
    }
  }, [resolvedTheme]);

  return mounted ? (
    <div className={cn(className)}>
      <Select value={theme} onValueChange={setTheme}>
        <SelectTrigger className="border-none p-0 focus:outline-none [&:has(:focus-visible)]:ring-1">
          {resolvedTheme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
        </SelectTrigger>
        <SelectContent position="popper" className="rounded-md bg-bg-primary shadow-jt2" sideOffset={-5}>
          {['light', 'dark', 'system'].map((value) => {
            const active = value === theme;
            return (
              <SelectItem
                key={value}
                value={value}
                className={cn('mt-1 px-2 py-[0.5] hover:bg-bg-soft focus:outline-none', active && 'bg-bg-soft')}
              >
                <button className="group flex w-full items-center rounded-md px-2 py-2 text-sm">
                  <div className="mr-2">
                    {value === 'light' ? (
                      <Sun size={16} />
                    ) : value === 'dark' ? (
                      <Moon size={16} />
                    ) : (
                      <Monitor size={16} />
                    )}
                  </div>
                  <span>{value === 'light' ? 'Light' : value === 'dark' ? 'Dark' : 'System'}</span>
                </button>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  ) : (
    <div className={cn(className, 'h-4 w-4')} />
  );
};

export default ThemeSwitch;
