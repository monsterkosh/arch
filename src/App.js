import HomePage from './views/homePage';
import PortfolioPage from './views/portfolioPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/globalStyles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/portfolio' element={<PortfolioPage />} />
          <Route path='/about' element={<PortfolioPage />} />
          <Route path='/contact' element={<PortfolioPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
