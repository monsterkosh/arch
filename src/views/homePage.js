import Featured from '../components/featured/Featured';
import Hero from '../components/hero/Hero';
import Ideas from '../components/ideas/Ideas';
import Welcome from '../components/welcome/Welcome';

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
