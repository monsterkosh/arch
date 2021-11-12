import HomePage from './views/homePage';
import PortfolioPage from './views/portfolioPage';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import './styles/globalStyles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from './views/aboutPage';
import ContactPage from './views/contactPage';

function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/portfolio' element={<PortfolioPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
