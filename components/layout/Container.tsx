import { ReactElement } from 'react';
import Classable from 'types/classable';

interface ContainerProps extends Classable {
  children: React.ReactNode;
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
