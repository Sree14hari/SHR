import {
  AwardIcon,
  BoxIcon,
  BriefcaseBusiness,
  TextInitial,
} from 'lucide-react';

import type { NavItem } from '@/components/layout/header/types/nav';
import { USER } from '@/features/portfolio/data/user';

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://sree14hari.me',
  ogImage: USER.ogImage,
  description:
    'Sreehari R · AI & ML Engineering Student. Passionate about building software, AI solutions, and digital products.',
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: '#ffffff',
  dark: '#09090b',
};

export const MAIN_NAV: NavItem[] = [
  {
    title: 'About',
    href: '#about',
  },
  {
    title: 'Experience',
    href: '#experience',
  },
  {
    title: 'Projects',
    href: '#projects',
  },
  {
    title: 'Awards',
    href: '#awards',
  },
];

export const MOBILE_NAV: NavItem[] = [
  {
    title: 'About',
    href: '#about',
    icon: TextInitial,
  },
  {
    title: 'Experience',
    href: '#experience',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Projects',
    href: '#projects',
    icon: BoxIcon,
  },
  {
    title: 'Awards',
    href: '#awards',
    icon: AwardIcon,
  },
];

export const UTM_PARAMS = {
  utm_source: 'sree14hari.me',
};

export const GITHUB_REPO_URL = 'https://github.com/sree14hari/cheffolio';

export const GITHUB_USERNAME = 'sree14hari';
export const X_USERNAME = '';

export const SOUNDS = {
  toggle: 'https://res.cloudinary.com/chef0111/video/upload/toggle.mp3',
};

export const FOOTER_SLOGAN = 'Coding as Sreehari';
