import { ReactElement } from 'react';

interface FooterCopyrightProps {
  className?: string;
}

/**
 * Build CSS classes
 */
const buildClasses = (className?: string): string =>
  [className, 'text-white', 'opacity-40'].join(' ');

/**
 * Footer copyright component
 */
const FooterCopyright = ({ className }: FooterCopyrightProps): ReactElement => (
  <div className={buildClasses(className)}>
    &copy; EasyBank. All Rights Reserved.
  </div>
);

export default FooterCopyright;
