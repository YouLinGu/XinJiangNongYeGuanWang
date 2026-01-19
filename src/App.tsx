import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ProductDetail } from './pages/ProductDetail';
import { NewsDetail } from './pages/NewsDetail';
import { Solutions } from './pages/Solutions';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
