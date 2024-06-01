'use client';

import Link from 'next/link';
import Image from 'next/image';

import { NavigationLink } from '@/components/lab/navigation-link';
import { PROFILES, LINKS } from '@/lib/constants';
import ThemeSwitch from '@/components/ThemeSwitch';
import SearchButton from '../SearchButton';
import siteMetadata from '@/data/siteMetadata';
import { Languages } from 'lucide-react';
import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components/lab/ui/select';
import { cn } from '@/lib/utils';

const locales = { 'zh-tw': 'v2.jing-tech.me', en: 'en.jing-tech.me' };
const LANDGUAGE = { 'zh-tw': '繁體中文', en: 'English' };

const LanguageSelect = ({ className, iconSize = 20 }: { className?: string; iconSize?: number }) => {
  const changeLanguage = (newlocale) => {
    console.log('===>', newlocale);
    window.location.href = `https://${locales[newlocale]}`;
  };

  return (
    <Select defaultValue="zh-tw" onValueChange={changeLanguage}>
      <SelectTrigger
        className={cn(
          'mb-4 ml-auto mt-auto w-fit border-border focus:outline-none [&:has(:focus-visible)]:ring-1',
          className
        )}
        showIcon={false}
      >
        <Languages size={iconSize} />
      </SelectTrigger>
      <SelectContent className="rounded-md bg-bg-primary shadow-jt2" sideOffset={-5}>
        {Object.keys(locales).map((key) => {
          const active = key === 'zh-tw';
          return (
            <SelectItem key={key} value={key} className={cn('mt-1 hover:bg-bg-soft', active && 'bg-bg-soft')}>
              <span>{LANDGUAGE[key]}</span>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

const Header = ({ from }) => {
  const { author, position, title } = siteMetadata;
  return (
    <div className="inline-flex justify-between">
      <Link href="/" className="link-card inline-flex items-center gap-2 p-2">
        <Image
          src="/static/images/logo.jpeg"
          alt={author}
          width={40}
          height={40}
          loading="lazy"
          className="rounded-full border shadow-sm"
        />
        <div className="flex flex-col">
          <span className="font-semibold tracking-tight">{title}</span>
          <span className="text-gray-600 dark:text-gray-300 md:hidden">{position}</span>
        </div>
      </Link>
      <div className="inline-flex items-center gap-x-5">
        <SearchButton />
        <ThemeSwitch className={from === 'Drawer' ? 'flex' : 'hidden lg:flex'} />
        <LanguageSelect className="my-0 flex border-none p-0" iconSize={16} />
      </div>
    </div>
  );
};

export const MenuContent = ({ from }: { from?: string }) => {
  return (
    <>
      <div className="flex w-full flex-col text-sm">
        <div className="mb-2 flex flex-col gap-4">
          <Header from={from} />
          <div className="flex flex-col gap-1">
            {LINKS.map((link, linkIndex) => (
              <NavigationLink
                key={link.href}
                href={link.href}
                label={link.label}
                icon={link.icon}
                shortcutNumber={linkIndex + 1}
              />
            ))}
          </div>
        </div>
        <hr />
        <div className="mt-4 flex flex-col gap-2 text-sm">
          <span className="px-2 text-xs font-medium leading-relaxed text-gray-600 dark:text-gray-200">Online</span>
          <div className="flex flex-col gap-1">
            {Object.values(PROFILES).map((profile) => (
              <NavigationLink key={profile.url} href={profile.url} label={profile.title} icon={profile.icon} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
