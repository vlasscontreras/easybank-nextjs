import { ReactElement } from 'react';

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children: React.ReactNode;
}

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

/**
 * Get heading level class
 */
const getLevelClass = (level: number): Array<string> => {
  let textSize: Array<string> = [];

  switch (level) {
    case 1:
      textSize = ['text-4xl', 'lg:text-6xl'];
      break;
    case 2:
      textSize = ['text-3xl', 'lg:text-5xl'];
      break;
    case 3:
      textSize = ['text-2xl', 'lg:text-4xl'];
      break;
    case 4:
      textSize = ['text-xl', 'lg:text-3xl'];
      break;
    case 5:
      textSize = ['text-lg', 'lg:text-2xl'];
      break;
    case 6:
      textSize = ['text-base', 'lg:text-lg'];
      break;
  }

  return textSize;
};

/**
 * Build CSS classes
 */
const buildClasses = (level: number, className?: string): string => {
  let textSize: Array<string> = [];

  if (!className?.match(/text-\d?(xs|sm|lg|xl|base)/)) {
    textSize = getLevelClass(level);
  }

  return [className, 'text-gray-700', 'leading-relaxed']
    .concat(textSize)
    .join(' ')
    .trim();
};

/**
 * Heading component
 */
const Heading = ({
  level,
  className,
  children,
}: HeadingProps): ReactElement => {
  const HeadingTag = `h${level}` as HeadingTag;

  return (
    <HeadingTag className={buildClasses(level, className)}>
      {children}
    </HeadingTag>
  );
};

Heading.defaultProps = {
  level: 2,
};

export default Heading;
