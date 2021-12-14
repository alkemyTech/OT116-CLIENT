import React from 'react';
import Header from './Header/Header';
import Footer from '../Footer/Footer';

const Layout = function ({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
