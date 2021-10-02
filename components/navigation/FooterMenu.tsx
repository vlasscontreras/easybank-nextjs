import { ReactElement } from 'react';
import Link from 'next/link';
import NavLink from 'types/nav-link';
import Classable from 'types/classable';

interface FooterMenuProps extends Classable {
  links: NavLink[];
}

/**
 * Build the menu CSS classes
 */
const buildClasses = (className?: string): string =>
  [className, 'w-full', 'md:w-auto'].join(' ');

/**
 * Footer component
 */
const FooterMenu = ({ links, className }: FooterMenuProps): ReactElement => {
  return (
    <nav className={buildClasses(className)}>
      <ul className="text-center md:text-left grid grid-cols-1 md:grid-cols-2 md:gap-x-20">
        {links.map(({ name, url }) => (
          <li key={name}>
            <Link href={url}>
              <a className="text-gray-600 dark:text-gray-300 dark:hover:text-white py-1.5 block transition-colors">{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterMenu;
