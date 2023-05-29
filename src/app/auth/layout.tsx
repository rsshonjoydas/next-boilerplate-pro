import { Children } from '@/types';
import type { Metadata } from 'next';
import PoliciesPage from '../../components/Policies';

export const metadata: Metadata = {
  title: 'Redolence | Auth',
  description: 'MERN Stack Web Developer',
  keywords:
    'Redolence, web developer, HTML, CSS, SASS, Tailwindcss, JavaScript, Typescript, ReactJS, NextJS, NodeJS, ExpressJS, MondoDB, Redis, Firebase and Docker',
};

export default function AuthLayout({ children }: Children) {
  return (
    <>
      <div className='flex items-center justify-center h-screen'>{children}</div>
      <PoliciesPage />
    </>
  );
}
