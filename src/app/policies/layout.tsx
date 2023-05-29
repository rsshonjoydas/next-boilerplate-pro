import { Children } from '@/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Redolence | Policies',
  description: 'MERN Stack Web Developer',
  keywords:
    'Redolence, web developer, HTML, CSS, SASS, Tailwindcss, JavaScript, Typescript, ReactJS, NextJS, NodeJS, ExpressJS, MondoDB, Redis, Firebase and Docker',
};

export default function PoliciesLayout({ children }: Children) {
  return <div className='container px-4 py-8 mx-auto mt-12'>{children}</div>;
}
