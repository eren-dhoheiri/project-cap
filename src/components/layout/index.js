import React, { useEffect } from 'react';

import Header from './header';
import Footer from './footer';

const Index = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='App'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Index;
