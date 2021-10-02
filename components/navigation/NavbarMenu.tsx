import { ReactElement } from 'react';
import NavbarMenuItem from 'components/navigation/NavbarMenuItem';
import NavLink from 'types/nav-link';
import Classable from 'types/classable';
import ThemeToggler from 'components/navigation/ThemeToggler';

interface NavbarMenuProps extends Classable {
  links: NavLink[];
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

  return (
    <ul className={buildClasses(className)}>
      {items}

      <div className="text-center md:hidden mt-7">
        <ThemeToggler />
      </div>
    </ul>
  );
};

NavbarMenu.defaultProps = {
  links: [],
  className: '',
  onClick: () => {},
};

export default NavbarMenu;
