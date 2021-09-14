import { ReactElement } from 'react';
import Head from 'next/head';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';

interface LayoutProps {
  children: ReactElement;
}

const Layout = ({ children }: LayoutProps): ReactElement => (
  <>
    <Header />
    <main className="overflow-x-hidden">{children}</main>
    <Footer />
  </>
);

export default Layout;
