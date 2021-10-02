import { ReactElement } from 'react';
import NavbarMenuItem from 'components/navigation/NavbarMenuItem';
import NavLink from 'types/nav-link';

interface NavbarMenuProps {
  links: NavLink[];
  className?: string;
  onClick?: () => void;
}

/**
 * Build the menu CSS classes
 */
const buildClasses = (className?: string): string => {
  const classes = [
    className,
    'py-4',
    'rounded-xl',
    'shadow-2xl',
    'md:shadow-none',
    'md:py-0',
    'md:flex',
    'md:bg-transparent',
    'bg-white',
    'md:bg-transparent',
    'dark:bg-gray-800',
    'dark:md:bg-transparent',
    'transition-colors'
  ];

  return classes.join(' ');
}

/**
 * The navbar menu component
 */
const NavbarMenu = ({
  links,
  className,
  onClick,
}: NavbarMenuProps): ReactElement => {
  const items = links.map((link) => (
    <li key={link.name} className="text-center">
      <NavbarMenuItem to={link.url} onClick={onClick}>
        {link.name}
      </NavbarMenuItem>
    </li>
  ));

  return <ul className={buildClasses(className)}>{items}</ul>;
};

NavbarMenu.defaultProps = {
  links: [],
  className: '',
  onClick: () => {},
};

export default NavbarMenu;
