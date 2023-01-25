import { Bell, Bookmark, Home, User } from '@steeze-ui/heroicons';
import type { IconSource } from '@steeze-ui/heroicons/types';
import { z } from 'zod';

const _navLink = z.object({
  link: z.string()
});

export type NavLink = z.infer<typeof _navLink> & { icon: IconSource };

export const BOTTOM_NAV_LINK: Array<NavLink> = [
  {
    link: '/',
    icon: Home
  },
  {
    link: '/saved',
    icon: Bookmark
  },
  {
    link: '/notifications',
    icon: Bell
  },
  {
    link: '/profile',
    icon: User
  }
];
