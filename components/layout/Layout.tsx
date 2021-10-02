import { ReactElement } from 'react';
import Head from 'next/head';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';

interface LayoutProps {
  children: ReactElement;
  className?: string;
}

const Layout = ({ children, className }: LayoutProps): ReactElement => (
  <div className={className}>
    <Header />
    <main className="overflow-x-hidden">{children}</main>
    <Footer />
  </div>
);

export default Layout;
