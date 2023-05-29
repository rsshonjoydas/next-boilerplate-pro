/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/require-default-props */
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Icons } from '../Icons';

const buttonVariants = cva(
  'active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900',
  {
    variants: {
      variant: {
        default:
          'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100',
        destructive: 'text-white hover:bg-red-600 dark:hover:bg-red-600',
        outline:
          'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100 border border-slate-200 dark:border-slate-700',
        subtle:
          'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100',
        ghost:
          'bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent',
        link: 'bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent',
        glass:
          'flex items-center justify-center w-full gap-2 px-4 py-2 my-2 text-[16px] transition duration-150 border rounded-sm h-14 dark:text-gray-400 dark:border-slate-700 dark:hover:bg-gray-700/40 border-slate-200 text-slate-700 hover:bg-gray-200/40 hover:text-slate-900',
        primary:
          'w-full h-14 mt-2 text-lg rounded-[4px] bg-primary-50 hover:bg-primary-50/90 text-yellow-50',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-2 rounded-md',
        lg: 'h-11 px-8 rounded-md',
      },
    },
    // defaultVariants: {
    //   variant: 'default',
    //   size: 'default',
    // },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  onClick?: any;
  disabled?: boolean;
  type?: any;
  step?: number;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, isLoading, size, step, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      disabled={isLoading}
      type={step === 1 ? 'button' : 'submit'}
      {...props}
    >
      {isLoading ? (
        <>
          {isLoading ? (
            <>
              <Icons.Loading /> Loading...
            </>
          ) : (
            `${children}`
          )}
        </>
      ) : (
        <>{children}</>
      )}
    </button>
  )
);
Button.displayName = 'Button';

export { Button, buttonVariants };
