'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const MenuList = [
  {
    name: 'Info',
    path: '/info',
  },
  {
    name: 'Bookmark',
    path: '/bookmark',
  },
  {
    name: 'Search',
    path: '/search',
  },
  {
    name: 'Todo',
    path: '/todo',
  },
  {
    name: 'Clock',
    path: '/clock',
  },
  {
    name: 'Daily Routine',
    path: '/dailyRoutine',
  },
  {
    name: 'Draw',
    path: '/draw',
  },
];

export function Links() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className='font-extrabold w-full text-center mb-10'>
      {MenuList.map((menu, i) => {
        const isActive = menu.path === pathname;
        const isLast = i === MenuList.length - 1;
        return (
          <Link
            href={menu.path}
            key={menu.name}
            style={{
              textDecoration: 'none',
            }}
          >
            <span className={cn(isActive ? 'text-red-400 font-bold' : '')}>
              {menu.name}
            </span>
            <span>{!isLast ? ' | ' : ''}</span>
          </Link>
        );
      })}
    </nav>
  );
}
