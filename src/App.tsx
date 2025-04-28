import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import PlaceholderPage from './pages/PlaceholderPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<PlaceholderPage title="About Us" />} />
          <Route path="/services" element={<PlaceholderPage title="Services" />} />
          <Route path="/fleet" element={<PlaceholderPage title="Our Fleet" />} />
          <Route path="/qhse" element={<PlaceholderPage title="QHSE" />} />
          <Route path="/careers" element={<PlaceholderPage title="Careers" />} />
          <Route path="/media" element={<PlaceholderPage title="Media" />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;