import { ReactElement } from 'react';
import Navbar from 'components/navigation/Navbar';

/**
 * Header component
 */
const Header = (): ReactElement => {
  return (
    <header className="z-20 sticky top-0">
      <Navbar />
    </header>
  );
};

export default Header;
