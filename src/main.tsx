import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import CommercialService from './pages/CommercialService.tsx'
import HousingService from './pages/HousingService.tsx'
import MaintenanceService from './pages/MaintenanceService.tsx'
import OffGridSolar from './pages/OffGridSolar.tsx'
import OnGridSolar from './pages/OnGridSolar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services/commercial" element={<CommercialService />} />
        <Route path="/services/housing" element={<HousingService />} />
        <Route path="/services/maintenance" element={<MaintenanceService />} />
        <Route path="/solutions/off-grid" element={<OffGridSolar />} />
        <Route path="/solutions/on-grid" element={<OnGridSolar />} />
      </Routes>
    </Router>
  </StrictMode>,
)
