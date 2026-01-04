import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import MobileActionBar from './MobileActionBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>{children}</main>
      <Footer />
      <MobileActionBar />
    </div>
  );
};

export default Layout;
