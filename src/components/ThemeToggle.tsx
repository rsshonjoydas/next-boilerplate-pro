'use client';

import { useTheme } from 'next-themes';
import { Icons } from './Icons';
import { Button } from './ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/DropdownMenu';

export function ThemeToggle() {
  const { setTheme } = useTheme();

  const theme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='sm'>
          <Icons.Sun className='w-6 h-6 transition-all scale-100 rotate-0 hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100 stroke-sky-500' />
          <Icons.Moon className='absolute w-6 h-6 transition-all scale-0 rotate-90 hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100 fill-sky-500' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' forceMount>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <Icons.Sun
            className={`w-5 h-5 mr-2 ${theme === 'light' ? 'stroke-sky-500' : 'stroke-slate-400'}`}
          />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <Icons.Moon
            className={`w-5 h-5 mr-2 ${
              theme === 'dark' || theme === 'system' || theme === null
                ? 'fill-sky-500'
                : 'fill-slate-400'
            }`}
          />

          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          <Icons.System className='w-5 h-5 mr-2' />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
