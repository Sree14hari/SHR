import dynamic from 'next/dynamic';
import Link from 'next/link';

import { GithubIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { GITHUB_REPO_URL, MAIN_NAV, UTM_PARAMS } from '@/config/site';
import { addQueryParams } from '@/utils/url';

import { DesktopNav } from './desktop-nav';
import { SiteHeaderLogo } from './site-header-logo';
import { SiteHeaderNav } from './site-header-nav';
import ThemeToggle from './theme-toggle';

const CommandMenu = dynamic(() =>
  import('@/components/cheffolio/command-menu').then((mod) => mod.CommandMenu)
);

export function SiteHeader() {
  return (
    <SiteHeaderNav>
      <Link
        className="transition-[scale] ease-out active:scale-98 has-data-[visible=false]:pointer-events-none [&_svg]:h-8"
        href="/"
        aria-label="Home"
      >
        <SiteHeaderLogo />
      </Link>
      <div className="flex items-center gap-2 *:first:mr-2 max-sm:*:data-[slot=command-menu-trigger]:hidden">
        <DesktopNav items={MAIN_NAV} />
        <CommandMenu enabledHotkeys />

        <ThemeToggle />
      </div>
    </SiteHeaderNav>
  );
}
