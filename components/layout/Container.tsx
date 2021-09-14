import { ReactElement } from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Build CSS classes
 */
const buildClasses = (className?: string): string =>
  [className, 'container', 'mx-auto', 'px-5', 'lg:max-w-7xl'].join(' ');

/**
 * Header component
 */
const Header = ({ className, children }: ContainerProps): ReactElement => {
  return <div className={buildClasses(className)}>{children}</div>;
};

export default Header;
