import React, { ReactElement } from 'react';
import Link from 'next/link';
import { ThemeContext } from 'context/ThemeContext';
import Logo from 'components/icons/Logo';

const NavbarBrand = (): ReactElement => {
  return (
    <Link href="/">
      <a>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <Logo mode={theme === 'dark' ? 'light' : 'dark'} />
          )}
        </ThemeContext.Consumer>
      </a>
    </Link>
  );
};

export default NavbarBrand;
