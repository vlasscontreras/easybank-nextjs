import { ReactElement } from 'react';
import Classable from 'types/classable';

/**
 * Burger component
 */
const Burger = ({ className }: Classable): ReactElement => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="11" className={className}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z"/>
      </g>
    </svg>
  );
};

export default Burger;
