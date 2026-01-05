import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './App'
import OffGridSolar from './pages/OffGridSolar'
import OnGridSolar from './pages/OnGridSolar'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions/off-grid" element={<OffGridSolar />} />
          <Route path="/solutions/on-grid" element={<OnGridSolar />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
