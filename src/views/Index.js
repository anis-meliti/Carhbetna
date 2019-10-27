import React, { useEffect } from 'react';

import IndexNavbar from '../components/Headers/Navbars/IndexNavbar';
import IndexHeader from '../components/Headers/IndexHeader';
import Footer from '../components/Footers/Footer';
import SearchTraject from '../components/SearchTraject/SearchTraject';

function Index() {
  document.documentElement.classList.remove('nav-open');
  useEffect(() => {
    document.body.classList.add('index');
    return function cleanup() {
      document.body.classList.remove('index');
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <SearchTraject />
      <Footer />
    </>
  );
}

export default Index;
