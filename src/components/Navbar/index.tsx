'use client';

import { navbarData } from '@/data/NavbarData';
import { Popover } from '@headlessui/react';
import { usePathname } from 'next/navigation';
import Logo from '../Logo';
import { ThemeToggle } from '../ThemeToggle';
import Border from '../ui/Border';
import MobileDrawer from './Drawer';
import NavbarItem from './NavbarItem';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <Popover className='bg-light/30 dark:bg-dark/30 backdrop-blur-md border-b-[1px] dark:border-dark-300 fixed top-0 inset-x-0 z-10 h-16 text-white font-medium'>
      <Border className='-mb-[2px] bottom-full' />
      <div className='container px-4 mx-auto sm:px-6'>
        <div className='flex items-center justify-between lg:justify-end'>
          <div className='flex items-center justify-start lg:w-0 lg:flex-1'>
            <div className='md:hidden'>
              <div className='inline-flex items-center justify-center p-3 mt-2 text-gray-400 bg-gray-100 rounded-full shadow-xl cursor-pointer dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/70 shadow-black/5 ring-1 ring-slate-700/10'>
                <MobileDrawer />
              </div>
            </div>
            <Logo />
          </div>

          <Popover.Group as='nav' className='justify-end hidden p-3 my-2 md:flex lg:flex'>
            {navbarData.map((menuItem) => (
              <NavbarItem
                key={menuItem.id}
                label={menuItem.label}
                href={menuItem.path}
                className={`cursor-pointer p-3 text-sm font-semibold text-gray-400 ${
                  pathname === menuItem.path
                    ? 'shadow-lg bg-gray-300/30 dark:bg-gray-500/30 rounded-lg text-primary'
                    : ''
                }`}
              />
            ))}
          </Popover.Group>

          <div className='flex items-center'>
            {/* <div className='items-end hidden gap-4 md:flex md:flex-1lg:w-0'>
              <AuthBtn />
            </div> */}

            <div className='mx-3 border-l border-slate-200 dark:border-slate-800'>
              <div className='mt-1 ml-3'>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Border className='top-full' />
    </Popover>
  );
};

export default Navbar;
