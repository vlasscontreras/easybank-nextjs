import { ReactElement } from 'react';
import Image from 'next/image';
import SocialLink from 'types/social-link';
import iconFacebook from 'assets/svg/icon-facebook.svg';
import iconInstagram from 'assets/svg/icon-instagram.svg';
import iconPinterest from 'assets/svg/icon-pinterest.svg';
import iconTwitter from 'assets/svg/icon-twitter.svg';
import iconYouTube from 'assets/svg/icon-youtube.svg';

interface SocialMenuProps {
  className?: string;
}

/**
 * Links to display in the navigation bar
 */
const links = [
  { icon: iconFacebook, name: 'Facebook', url: 'https://www.facebook.com/' },
  { icon: iconInstagram, name: 'Instagram', url: 'https://www.instagram.com/' },
  { icon: iconPinterest, name: 'Pinterest', url: 'https://www.pinterest.com/' },
  { icon: iconTwitter, name: 'Twitter', url: 'https://twitter.com/' },
  { icon: iconYouTube, name: 'YouTube', url: 'https://www.youtube.com/' },
] as SocialLink[];

/**
 * Build CSS classes
 */
const buildClasses = (className?: string) =>
  [className, 'flex', 'space-x-2', 'items-end'].join(' ');

/**
 * Social menu component
 */
const SocialMenu = ({ className }: SocialMenuProps): ReactElement => {
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
            <Image src={icon} alt={name} width="20" height="20" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMenu;
