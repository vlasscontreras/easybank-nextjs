import { ReactElement } from 'react';
import Classable from 'types/classable';

/**
 * Build CSS classes
 */
const buildClasses = (className?: string): string =>
  [className, 'text-gray-400', 'transition-colors'].join(' ');

/**
 * Footer copyright component
 */
const FooterCopyright = ({ className }: Classable): ReactElement => (
  <div className={buildClasses(className)}>
    &copy; EasyBank. All Rights Reserved.
  </div>
);

export default FooterCopyright;
