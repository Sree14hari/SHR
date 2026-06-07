import type { SocialLink } from '../types/social-links';
import { USER } from './user';

const baseUrl = 'https://res.cloudinary.com/chef0111/image/upload/v1';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: `${baseUrl}/github.webp`,
    title: 'GitHub',
    subtitle: 'sree14hari',
    href: USER.socialLinks.github,
  },
  {
    icon: `${baseUrl}/linkedin.webp`,
    title: 'LinkedIn',
    subtitle: 'sree14hari',
    href: USER.socialLinks.linkedin,
  },
  {
    icon: `${baseUrl}/facebook.webp`,
    title: 'Facebook',
    subtitle: 'sree14hari',
    href: USER.socialLinks.facebook,
  },
  {
    icon: `${baseUrl}/discord.webp`,
    title: 'Discord',
    subtitle: 'sree14hari',
    href: USER.socialLinks.discord,
  },
  {
    icon: `${baseUrl}/instagram.webp`,
    title: 'Instagram',
    subtitle: '@sree14hari',
    href: USER.socialLinks.instagram,
  },
  {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/ORCID_iD.svg/3840px-ORCID_iD.svg.png',
    title: 'ORCID',
    subtitle: '0009-0005-7047-963X',
    href: USER.socialLinks.orcid,
  },
];
