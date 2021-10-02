import { ReactElement } from 'react';
import { ThemeContext } from 'context/ThemeContext';
import Sun from 'components/icons/Sun';
import Moon from 'components/icons/Moon';
import Classable from 'types/classable';

/**
 * Get the button CSS classes
 */
const getButtonClass = (className?: string, theme?: string): string => {
  const classes = [
    className,
    'relative',
    'inline-flex',
    'flex-shrink-0',
    'h-6',
    'w-11',
    'border-2',
    'border-transparent',
    'rounded-full',
    'cursor-pointer',
    'transition-colors',
    'ease-in-out',
    'duration-200',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'focus:ring-blue-500',
  ];

  if (theme === 'dark') {
    classes.push('bg-blue-600');
  } else {
    classes.push('bg-gray-200');
  }

  return classes.join(' ');
};

/**
 * Get the wrapper span CSS classes
 */
const getWrapperSpanClass = (theme: string): string => {
  const classes = [
    'pointer-events-none',
    'relative',
    'inline-block',
    'h-5',
    'w-5',
    'rounded-full',
    'bg-white',
    'shadow',
    'transform',
    'ring-0',
    'transition',
    'ease-in-out',
    'duration-200',
  ];

  if (theme === 'dark') {
    classes.push('translate-x-5');
  } else {
    classes.push('translate-x-0');
  }

  return classes.join(' ');
};

/**
 * Get the icon wrapper CSS classes
 */
const getIconWrapperClass = (theme: string, negate: boolean = false): string => {
  const classes = [
    'absolute',
    'inset-0',
    'h-full',
    'w-full',
    'flex',
    'items-center',
    'justify-center',
    'transition-opacity',
  ];

  const condition = negate
    ? theme === 'dark'
    : theme !== 'dark';

  if (condition) {
    classes.push('opacity-0', 'ease-out', 'duration-100');
  } else {
    classes.push('opacity-100', 'ease-in', 'duration-200');
  }

  return classes.join(' ');
};

/**
 * Theme toggler component
 */
const ThemeToggler = ({ className }: Classable): ReactElement => {
  return (
    <ThemeContext.Consumer>
      {({theme, setTheme}) => (
        <button
          type="button"
          className={getButtonClass(className, theme)}
          role="switch"
          aria-checked={theme === 'dark'}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <span className="sr-only">Use dark theme</span>

          <span className={getWrapperSpanClass(theme)}>
            <span className={getIconWrapperClass(theme)} aria-hidden="true">
              <Moon className="h-3 w-3 text-blue-600" />
            </span>

            <span className={getIconWrapperClass(theme, true)} aria-hidden="true">
              <Sun className="h-3 w-3 text-yellow-400" />
            </span>
          </span>
        </button>
      )}
    </ThemeContext.Consumer>
  );
};

export default ThemeToggler;
