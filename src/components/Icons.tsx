import { ClassName } from '@/types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Moon = ({ className }: ClassName) => (
  <svg viewBox='0 0 24 24' fill='none' className={className}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z'
      className='fill-sky-400/20'
    />
    <path
      d='m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z'
      className={className}
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z'
      className={className}
    />
  </svg>
);

const Sun = ({ className }: ClassName) => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
  >
    <path d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' className={`fill-sky-400/20 ${className}`} />
    <path
      d='M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836'
      className={className}
    />
  </svg>
);

const System = ({ className }: ClassName) => (
  <span className={className}>
    <svg viewBox='0 0 24 24' fill='none' className='w-5 h-5 mr-2'>
      <path
        d='M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z'
        strokeWidth='2'
        strokeLinejoin='round'
        className='stroke-slate-400 dark:stroke-slate-500'
      />
      <path
        d='M14 15c0 3 2 5 2 5H8s2-2 2-5'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='stroke-slate-400 dark:stroke-slate-500'
      />
    </svg>
  </span>
);

const Loading = () => (
  <svg
    role='status'
    className='inline w-4 h-4 mr-3 text-white animate-spin'
    viewBox='0 0 100 101'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
      fill='#E5E7EB'
    />
    <path
      d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
      fill='currentColor'
    />
  </svg>
);

export const Icons = {
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
  System,
  Loading,
};

export default Icons;
