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
const buildClasses = (): string => {
  const className = [
    'px-3',
    'py-2',
    'inline-flex',
    'text-center',
    'border-b-2',
    'border-transparent',
    'hover:border-green-500',
    'md:text-2sm',
    'text-gray-800',
    'md:text-gray-500',
    'md:hover:text-gray-800',
    'dark:text-white',
    'dark:hover:text-gray-300',
    'transition-colors',
  ];

  return className.join(' ');
};

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
      <a className={buildClasses()} onClick={onClick}>{children}</a>
    </Link>
  );
};

NavbarMenuItem.defaultProps = {
  onClick: () => {},
};

export default NavbarMenuItem;
