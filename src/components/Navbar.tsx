import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false)
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src="/logo.png" alt="Optimum Solar Services" className="logo-image" />
        </Link>
        
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={isActive('/') ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li 
            className="dropdown" 
            onMouseEnter={() => setIsServiceDropdownOpen(true)} 
            onMouseLeave={() => setIsServiceDropdownOpen(false)}
          >
            <span className={location.pathname.includes('/services/') ? 'active' : ''}>
              Service ▾
            </span>
            <ul className={`dropdown-menu ${isServiceDropdownOpen ? 'show' : ''}`}>
              <li>
                <Link 
                  to="/services/commercial"
                  onClick={() => { setIsMenuOpen(false); setIsServiceDropdownOpen(false); }}
                >
                  Commercial
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/housing"
                  onClick={() => { setIsMenuOpen(false); setIsServiceDropdownOpen(false); }}
                >
                  Housing
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/maintenance"
                  onClick={() => { setIsMenuOpen(false); setIsServiceDropdownOpen(false); }}
                >
                  Maintenance
                </Link>
              </li>
            </ul>
          </li>
          <li 
            className="dropdown" 
            onMouseEnter={() => setIsSolutionsDropdownOpen(true)} 
            onMouseLeave={() => setIsSolutionsDropdownOpen(false)}
          >
            <span className={location.pathname.includes('/solutions/') ? 'active' : ''}>
              Solar Solutions ▾
            </span>
            <ul className={`dropdown-menu ${isSolutionsDropdownOpen ? 'show' : ''}`}>
              <li>
                <Link 
                  to="/solutions/off-grid"
                  onClick={() => { setIsMenuOpen(false); setIsSolutionsDropdownOpen(false); }}
                >
                  Off-Grid Solar
                </Link>
              </li>
              <li>
                <Link 
                  to="/solutions/on-grid"
                  onClick={() => { setIsMenuOpen(false); setIsSolutionsDropdownOpen(false); }}
                >
                  On-Grid Solar
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="/#testimonials">Blog</a>
          </li>
          <li>
            <a href="/#faq">Help</a>
          </li>
          <li>
            <a href="/#contact" className="cta-btn">Get Quote</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
