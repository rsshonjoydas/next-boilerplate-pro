import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { FC } from 'react';

const headingVariants = cva(
  'text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tighter',
  {
    variants: {
      size: {
        default: 'text-4xl md:text-5xl lg:text-6xl',
        lg: 'text-5xl md:text-6xl lg:text-7xl',
        sm: 'text-2xl md:text-3xl lg:text-4xl',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const Heading: FC<HeadingProps> = ({ children, className, size, ...props }) => (
  <h1 {...props} className={cn(headingVariants({ size, className }))}>
    {children}
  </h1>
);

export default Heading;