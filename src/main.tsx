import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import OffGridSolar from './pages/OffGridSolar.tsx'
import OnGridSolar from './pages/OnGridSolar.tsx'
import PrivacyPolicy from './pages/PrivacyPolicy.tsx'
import TermsAndConditions from './pages/TermsAndConditions.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/solutions/off-grid" element={<OffGridSolar />} />
        <Route path="/solutions/on-grid" element={<OnGridSolar />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </Router>
  </StrictMode>,
)
