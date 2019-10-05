import React, { useEffect } from 'react';

// reactstrap components

// core components
import IndexNavbar from '../components/Headers/Navbars/IndexNavbar';
import IndexHeader from '../components/Headers/IndexHeader';
import Footer from '../components/Footers/Footer';

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
      <Footer />
    </>
  );
}

export default Index;
