import { Children } from '@/types';
import { LinkProps } from '@/types/pathType';
import Link from 'next/link';

const NavbarItem = ({ label, href, className, children }: LinkProps & Children) => (
  <Link href={href}>
    <span className={`text-base font-medium ${className}`}>
      {label}
      {children}
    </span>
  </Link>
);

export default NavbarItem;
