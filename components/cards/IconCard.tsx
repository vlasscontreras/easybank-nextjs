import { ReactElement } from 'react';
import Image from 'next/image';
import Heading from '../type/Heading';

interface IconCardProps {
  icon: string;
  title: string;
  children: React.ReactNode;
}

/**
 * Icon card component
 */
const IconCard = ({ icon, title, children }: IconCardProps): ReactElement => {
  return (
    <article className="text-center md:text-left space-y-4">
      <Image
        src={icon}
        alt={title}
        width="72"
        height="72"
        className="inline-block"
      />
      <Heading level={3} className="text-lg md:text-xl dark:text-white transition-colors">
        {title}
      </Heading>
      <div className="text-gray-400 dark:text-gray-300 text-sm md:text-base transition-colors">{children}</div>
    </article>
  );
};

export default IconCard;
