import React from 'react';
import Featured from '../components/Featured';
import Hero from '../components/Hero';
import Ideas from '../components/Ideas';
import Welcome from '../components/Welcome';

const homePage = () => {
  return (
    <>
      <Hero />
      <Welcome />
      <Ideas />
      <Featured />
    </>
  );
};

export default homePage;
