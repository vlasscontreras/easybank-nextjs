import { ReactElement } from 'react';
import Classable from 'types/classable';

/**
 * Close component
 */
const Close = ({ className }: Classable): ReactElement => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" className={className}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M.868.661l16.97 16.97-.706.708L.162 1.369z"/><path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z"/>
      </g>
    </svg>
  );
};

export default Close;
