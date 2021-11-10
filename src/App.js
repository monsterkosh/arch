import HomePage from './views/homePage';
import './styles/globalStyles.css';
import PortfolioPage from './views/portfolioPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className='container'>
      <Navbar />
      {/* <HomePage /> */}
      <PortfolioPage />
      <Footer />
    </div>
  );
}

export default App;
