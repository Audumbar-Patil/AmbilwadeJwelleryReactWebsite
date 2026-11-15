import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import CategoryPage from './pages/CategoryPage';
import Education from './pages/Education';
import Contact from './pages/Contact';
import SearchModal from './components/SearchModal';
import WishlistDrawer from './components/WishlistDrawer';
import ProductQuickView from './components/ProductQuickView';
import { WishlistProvider } from './context/WishlistContext';
import './index.css';
import './App.css';

function App() {
  return (
    <WishlistProvider>
      <Router>
        <div className="app-container">
          <Header />
          <Routes>
            {/* 01. Homepage */}
            <Route path="/" element={<Home />} />

            {/* 02. Our Story */}
            <Route path="/story" element={<OurStory />} />
            <Route path="/about" element={<OurStory />} />

            {/* 03 to 10. Collections & Categories */}
            <Route path="/category/:categoryId" element={<CategoryPage />} />
            <Route path="/gold" element={<Navigate to="/category/gold" replace />} />
            <Route path="/diamond" element={<Navigate to="/category/diamond" replace />} />
            <Route path="/bridal" element={<Navigate to="/category/bridal" replace />} />
            <Route path="/women" element={<Navigate to="/category/women" replace />} />
            <Route path="/men" element={<Navigate to="/category/men" replace />} />
            <Route path="/children" element={<Navigate to="/category/children" replace />} />
            <Route path="/exquisite" element={<Navigate to="/category/exquisite" replace />} />
            <Route path="/gifting" element={<Navigate to="/category/gifting" replace />} />

            {/* 11. Jewellery Education */}
            <Route path="/education" element={<Education />} />

            {/* 12. Contact Us */}
            <Route path="/contact" element={<Contact />} />

            {/* Catch-all fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />

          {/* Global Interactive Overlays */}
          <SearchModal />
          <WishlistDrawer />
          <ProductQuickView />
        </div>
      </Router>
    </WishlistProvider>
  );
}

export default App;
