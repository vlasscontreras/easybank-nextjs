import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * This component will restore the scroll position on every route
 * change.
 */
export default (): null => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
