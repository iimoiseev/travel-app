import React from 'react';
import { FC } from 'react';
import Footer from './footer/Footer';

const Layout: FC<{ isMaxWidth?: boolean; children: React.ReactNode }> = ({
  isMaxWidth = true,
  children,
}) => {
  return (
    <div>
      <div style={{ maxWidth: isMaxWidth && 480, margin: '0 auto' }}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
