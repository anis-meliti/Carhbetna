import React, { useEffect } from 'react';

import IndexNavbar from '../components/Headers/Navbars/IndexNavbar';
import IndexHeader from '../components/Headers/IndexHeader';
import Footer from '../components/Footers/Footer';
import SearchTraject from '../components/SearchTraject/SearchTraject';
import AddTraject from '../components/AddTraject/AddTraject';

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
      <AddTraject />
      <Footer />
    </>
  );
}

export default Index;
