// eslint-disable-next-line import/no-extraneous-dependencies
import { ReactElement } from 'react';
import Link from 'next/link';
import { UrlObject } from 'url';

interface ButtonProps {
  onClick?: () => void;
  to?: string | UrlObject;
  type?: 'button' | 'submit' | 'reset' | 'link' | 'route';
  className: string;
  disabled?: boolean;
  children: React.ReactNode;
}

/**
 * Build button classnames
 */
const buildClassNames = (className: string): string =>
  [
    className,
    'bg-gradient-to-r',
    'from-green-400',
    'to-blue-500',
    'text-white',
    'text-sm',
    'font-semibold',
    'px-7',
    'py-3',
    'rounded-full',
    'hover:from-green-300',
    'hover:to-blue-400',
    'active:from-green-500',
    'active:to-blue-600',
    'focus:ring-2',
    'focus:ring-green-400',
    'focus:ring-offset-2',
    'focus:outline-none',
  ].join(' ');

/**
 * The button component
 */
const Button = ({
  to,
  type,
  className,
  disabled,
  children,
  onClick,
}: ButtonProps): ReactElement => {
  const classNames = buildClassNames(className);

  switch (type) {
    case 'link':
      return (
        <a href={to as string} className={classNames}>
          {children}
        </a>
      );

    case 'route':
      return (
        <Link href={to as string}>
          <a className={classNames}>{children}</a>
        </Link>
      );

    default:
      return (
        <button
          type={type}
          onClick={onClick}
          className={classNames}
          disabled={disabled}
        >
          {children}
        </button>
      );
  }
};

Button.defaultProps = {
  as: 'button',
  type: 'button',
  disabled: false,
  className: '',
};

export default Button;
