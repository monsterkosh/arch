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
    </div>
  );
}

export default App;
