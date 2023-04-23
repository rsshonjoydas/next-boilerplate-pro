'use client';

import { Children } from '@/types';
import { ThemeProvider } from 'next-themes';
import { FC } from 'react';

const Providers: FC<Children> = ({ children }) => (
  <ThemeProvider enableSystem attribute='class' defaultTheme='system'>
    {children}
  </ThemeProvider>
);
export default Providers;
