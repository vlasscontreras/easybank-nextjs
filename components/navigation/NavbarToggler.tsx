import { ReactElement } from 'react';
import Image from 'next/image';
import iconBurger from 'assets/svg/icon-hamburger.svg';
import iconClose from 'assets/svg/icon-close.svg';

interface NavbarTogglerProps {
  className?: string;
  onClick: () => void;
  status: boolean;
}

/**
 * Build the menu CSS classes
 */
const buildClasses = (className?: string): string =>
  [className, 'focus:outline-none'].join(' ');

/**
 * Navbar brand component
 */
const NavbarBrand = ({
  className,
  onClick,
  status,
}: NavbarTogglerProps): ReactElement => {
  const icon = status ? iconClose : iconBurger;

  return (
    <button onClick={onClick} className={buildClasses(className)}>
      <Image
        src={icon}
        alt="Toggle"
        width="24"
        height="24"
        className="w-6 h-6 object-contain"
      />
    </button>
  );
};

NavbarBrand.defaultProps = {
  onClick: () => {},
  status: false,
  className: '',
};

export default NavbarBrand;
