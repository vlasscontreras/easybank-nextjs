import React, { ReactElement } from 'react';
import SocialLink from 'types/social-link';
import Classable from 'types/classable';
import FacebookLogo from 'components/icons/brands/FacebookLogo';
import InstagramLogo from 'components/icons/brands/InstagramLogo';
import PinterestLogo from 'components/icons/brands/PinterestLogo';
import TwitterLogo from 'components/icons/brands/TwitterLogo';
import YouTubeLogo from 'components/icons/brands/YouTubeLogo';

/**
 * Links to display in the navigation bar
 */
const links = [
  { icon: FacebookLogo, name: 'Facebook', url: 'https://www.facebook.com/' },
  { icon: InstagramLogo, name: 'Instagram', url: 'https://www.instagram.com/' },
  { icon: PinterestLogo, name: 'Pinterest', url: 'https://www.pinterest.com/' },
  { icon: TwitterLogo, name: 'Twitter', url: 'https://twitter.com/' },
  { icon: YouTubeLogo, name: 'YouTube', url: 'https://www.youtube.com/' },
] as SocialLink[];

/**
 * Build CSS classes
 */
const buildClasses = (className?: string) =>
  [className, 'flex', 'space-x-2', 'items-end', 'text-gray-600', 'dark:text-gray-300', 'dark:hover:text-white', 'transition-colors'].join(' ');

/**
 * Social menu component
 */
const SocialMenu = ({ className }: Classable): ReactElement => {
  return (
    <ul className={buildClasses(className)}>
      {links.map(({ icon, url, name }) => (
        <li key={name}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            { React.createElement(icon) }
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMenu;
