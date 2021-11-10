import React from 'react';
import Featured from '../components/Featured';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Ideas from '../components/Ideas';
import Navbar from '../components/Navbar';
import Welcome from '../components/Welcome';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Welcome />
      <Ideas />
      <Featured />
      <Footer />
    </>
  );
};

export default Home;
