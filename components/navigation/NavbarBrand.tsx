import React, { ReactElement } from 'react';
import Link from 'next/link';
import Logo from 'components/icons/Logo';

const NavbarBrand = (): ReactElement => {
  return (
    <Link href="/">
      <a><Logo /></a>
    </Link>
  );
};

export default NavbarBrand;
