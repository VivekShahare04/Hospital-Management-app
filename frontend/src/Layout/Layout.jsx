import React from 'react';
import Footer from '../components/footer/footer';

import Header from '../components/Header/Header';

import Routers from '../routes/Routers';

const layout = () => {
  return (
  <>
  <Header/>
  <main>
    <Routers/>
  </main>
  <Footer/>
  </>
  );
};

export default layout;