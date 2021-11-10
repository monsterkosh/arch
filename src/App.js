import Featured from './components/Featured';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Ideas from './components/Ideas';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import './styles/globalStyles.css';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Hero />
      <Welcome />
      <Ideas />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
