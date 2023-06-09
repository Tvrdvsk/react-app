import { ReactNode } from 'react';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="page">
      <Header />
      <main>{children}</main>
      <div className="top">
        <div className="arrow" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}></div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
