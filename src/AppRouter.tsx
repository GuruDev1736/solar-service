import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './App'
import CommercialService from './pages/CommercialService'
import HousingService from './pages/HousingService'
import MaintenanceService from './pages/MaintenanceService'
import OffGridSolar from './pages/OffGridSolar'
import OnGridSolar from './pages/OnGridSolar'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/commercial" element={<CommercialService />} />
          <Route path="/services/housing" element={<HousingService />} />
          <Route path="/services/maintenance" element={<MaintenanceService />} />
          <Route path="/solutions/off-grid" element={<OffGridSolar />} />
          <Route path="/solutions/on-grid" element={<OnGridSolar />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
