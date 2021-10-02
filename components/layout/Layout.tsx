import { ReactElement } from 'react';
import Head from 'next/head';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import Classable from 'types/classable';

interface LayoutProps extends Classable {
  children: ReactElement;
}

const Layout = ({ children, className }: LayoutProps): ReactElement => (
  <div className={className}>
    <Header />
    <main className="overflow-x-hidden">{children}</main>
    <Footer />
  </div>
);

export default Layout;
