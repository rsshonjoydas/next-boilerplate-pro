'use client';

import { Children } from '@/types';
import { ThemeProvider } from 'next-themes';
import { usePathname } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from './Logo';
import Navbar from './Navbar';

const Providers = ({ children }: Children) => {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith('/auth/');
  const shouldRenderNavbar = !isAuthPage && pathname !== '/auth';

  return (
    <ThemeProvider enableSystem attribute='class' defaultTheme='system'>
      {shouldRenderNavbar ? (
        <Navbar />
      ) : (
        <div>
          {pathname === '/auth' ? (
            <Logo className='absolute inset-x-0 flex items-center justify-center top-[38%]' />
          ) : (
            <Logo className='absolute inset-x-0 flex items-center justify-center top-4' />
          )}
        </div>
      )}

      <ToastContainer
        // position='top-right'
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        // rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />

      {children}
    </ThemeProvider>
  );
};

export default Providers;
