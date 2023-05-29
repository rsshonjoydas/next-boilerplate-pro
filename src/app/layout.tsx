import Providers from '@/components/Providers';
import { cn } from '@/lib/utils';
import { Children } from '@/types';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import 'react-tooltip/dist/react-tooltip.css';
import '../styles/index.scss';

export const metadata: Metadata = {
  title: 'Redolence',
  description: 'MERN Stack Web Developer',
  keywords:
    'Redolence, web developer, HTML, CSS, SASS, Tailwindcss, JavaScript, Typescript, ReactJS, NextJS, NodeJS, ExpressJS, MondoDB, Redis, Firebase and Docker',
};

const font = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function RootLayout({ children }: Children) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'antialiased text-gray-700 transition-colors duration-300 select-none bg-light dark:bg-dark dark:text-gray-200',
          font.className
        )}
      >
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
