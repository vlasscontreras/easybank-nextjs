import { ReactElement } from 'react';
import Link from 'next/link';

interface NavbarMenuItemProps {
  to: string;
  children: ReactElement | string;
  onClick?: () => void;
}

/**
 * The item CSS classes.
 */
const className = [
  'text-gray-800',
  'px-3',
  'py-2',
  'inline-flex',
  'text-center',
  'border-b-2',
  'border-transparent',
  'hover:border-green-500',
  'md:text-2sm',
  'md:text-gray-500',
  'md:hover:text-gray-800',
].join(' ');

/**
 * The navbar item component
 */
const NavbarMenuItem = ({
  to,
  children,
  onClick,
}: NavbarMenuItemProps): ReactElement => {
  return (
    <Link href={to}>
      <a className={className} onClick={onClick}>{children}</a>
    </Link>
  );
};

NavbarMenuItem.defaultProps = {
  onClick: () => {},
};

export default NavbarMenuItem;
