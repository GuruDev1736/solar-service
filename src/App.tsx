import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false)
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80',
      title: 'Clean Energy Solutions',
      description: 'Sustainable solar power for a greener future'
    },
    {
      url: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1600&q=80',
      title: 'Professional Installation',
      description: 'Expert technicians ensuring quality service'
    },
    {
      url: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1600&q=80',
      title: 'Reliable Performance',
      description: 'High-efficiency solar systems built to last'
    },
    {
      url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80',
      title: 'Powering Tomorrow',
      description: 'Innovative solar technology for modern living'
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'commercial', 'housing', 'maintenance', 'solutions', 'why-us', 'testimonials', 'faq', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your interest! We will contact you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  // Removed unused handlers - forms are on individual service pages

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo" onClick={() => scrollToSection('home')}>
            <img src="/logo.png" alt="Optimum Solar Services" className="logo-image" />
          </div>
          
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
            <li className="dropdown" onMouseEnter={() => setIsServiceDropdownOpen(true)} onMouseLeave={() => setIsServiceDropdownOpen(false)}>
              <a className={['commercial', 'housing', 'maintenance'].includes(activeSection) ? 'active' : ''}>Service ▾</a>
              <ul className={`dropdown-menu ${isServiceDropdownOpen ? 'show' : ''}`}>
                <li><Link to="/services/commercial" onClick={() => setIsMenuOpen(false)}>Commercial</Link></li>
                <li><Link to="/services/housing" onClick={() => setIsMenuOpen(false)}>Housing</Link></li>
                <li><Link to="/services/maintenance" onClick={() => setIsMenuOpen(false)}>Maintenance</Link></li>
              </ul>
            </li>
            <li className="dropdown" onMouseEnter={() => setIsSolutionsDropdownOpen(true)} onMouseLeave={() => setIsSolutionsDropdownOpen(false)}>
              <a onClick={() => scrollToSection('solutions')} className={activeSection === 'solutions' ? 'active' : ''}>Solar Solutions ▾</a>
              <ul className={`dropdown-menu ${isSolutionsDropdownOpen ? 'show' : ''}`}>
                <li><Link to="/solutions/off-grid" onClick={() => setIsMenuOpen(false)}>Off-Grid Solar</Link></li>
                <li><Link to="/solutions/on-grid" onClick={() => setIsMenuOpen(false)}>On-Grid Solar</Link></li>
              </ul>
            </li>
            <li><a onClick={() => scrollToSection('testimonials')} className={activeSection === 'testimonials' ? 'active' : ''}>Blog</a></li>
            <li><a onClick={() => scrollToSection('faq')} className={activeSection === 'faq' ? 'active' : ''}>Help</a></li>
            <li><a onClick={() => scrollToSection('contact')} className="cta-btn">Get Quote</a></li>
          </ul>
        </div>
      </nav>

      {/* Image Slider */}
      <div className="slider-container">
        <div className="slider">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.url})` }}
            >
              <div className="slide-content">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
          
          <button className="slider-btn prev" onClick={prevSlide}>
            ❮
          </button>
          <button className="slider-btn next" onClick={nextSlide}>
            ❯
          </button>
          
          <div className="slider-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Still Paying High Electricity Bills?</h1>
          <p className="hero-subtitle">Switch to solar and let the sun pay your bills</p>
          <p className="hero-description">Join thousands of satisfied customers who've reduced their electricity costs by up to 90%</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>Get Free Quote</button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('solutions')}>Explore Solutions</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <h3>6000+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat">
              <h3>50 MW+</h3>
              <p>Installed Capacity</p>
            </div>
            <div className="stat">
              <h3>25+ Years</h3>
              <p>Warranty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive solar solutions tailored to your needs</p>
          
          <div className="services-cards">
            <div className="service-card">
              <div className="service-icon">🏢</div>
              <h3>Commercial Solar</h3>
              <p>Industrial-grade solar solutions for businesses, offices, and factories. Maximize savings and reduce operating costs.</p>
              <Link to="/services/commercial" className="service-btn">
                Learn More →
              </Link>
            </div>

            <div className="service-card">
              <div className="service-icon">🏠</div>
              <h3>Housing Solar</h3>
              <p>Residential solar systems for homes and housing societies. Power your home with clean, renewable energy.</p>
              <Link to="/services/housing" className="service-btn">
                Learn More →
              </Link>
            </div>

            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Maintenance Service</h3>
              <p>Professional maintenance and support for your solar systems. Keep your panels running at peak efficiency.</p>
              <Link to="/services/maintenance" className="service-btn">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="solutions">
        <div className="container">
          <h2 className="section-title">Our Solar Solutions</h2>
          <p className="section-subtitle">Choose the perfect solar system for your needs</p>
          
          <div className="solutions-grid">
            <div className="solution-card featured">
              <div className="badge">Most Popular</div>
              <div className="solution-icon">🔌</div>
              <h3>On-Grid Solar</h3>
              <p>Grid-connected solar systems with net metering benefits. Reduce electricity bills by up to 90% while staying connected to the utility grid.</p>
              <ul>
                <li>✓ Lower initial investment</li>
                <li>✓ Net metering benefits</li>
                <li>✓ Government subsidies available</li>
                <li>✓ Quick ROI in 3-5 years</li>
                <li>✓ Minimal maintenance required</li>
              </ul>
              <Link to="/solutions/on-grid" className="solution-btn">Learn More →</Link>
            </div>

            <div className="solution-card">
              <div className="solution-icon">🔋</div>
              <h3>Off-Grid Solar</h3>
              <p>Complete energy independence with battery storage. Perfect for remote locations or those seeking total energy autonomy.</p>
              <ul>
                <li>✓ Complete energy independence</li>
                <li>✓ Zero electricity bills</li>
                <li>✓ Ideal for remote locations</li>
                <li>✓ Backup power security</li>
                <li>✓ 25+ years system life</li>
              </ul>
              <Link to="/solutions/off-grid" className="solution-btn">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="why-us">
        <div className="container">
          <h2 className="section-title">Why Choose Optimum Solar Services?</h2>
          <p className="section-subtitle">We don't just sell solar — we give you peace of mind</p>
          
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">
                <img src="/Premium-Quality.png" alt="Quality" />
              </div>
              <h3>Premium Quality</h3>
              <p>Top-tier solar panels from trusted manufacturers with 25+ years performance warranty</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <img src="/best-price.png" alt="Pricing" />
              </div>
              <h3>Best Pricing</h3>
              <p>Transparent pricing with no hidden costs. Get the best value for your investment</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <img src="/installation.png" alt="Installation" />
              </div>
              <h3>Quick Installation</h3>
              <p>Professional installation completed in just 2-3 days with minimal disruption</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <img src="/maintanance.png" alt="Maintenance" />
              </div>
              <h3>Free Maintenance</h3>
              <p>Regular cleaning and maintenance included. We ensure optimal performance year-round</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <img src="/subsicdy.png" alt="Subsidy" />
              </div>
              <h3>Subsidy Assistance</h3>
              <p>Complete support with government subsidy applications and documentation</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <img src="/support.png" alt="Support" />
              </div>
              <h3>24/7 Support</h3>
              <p>Dedicated customer support team available round the clock for all your queries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">90% of customers recommend us!</p>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="rating">★★★★★</div>
              <p className="testimonial-text">
                "I am a working person, but the Optimum Solar Services team did everything perfectly even though I wasn't present on the site. My bills have gone down from ₹4300 to ₹500-700 a month. The team also comes home and regularly cleans my panels."
              </p>
              <div className="testimonial-author">
                <strong>Rajesh Kumar</strong>
                <span>Mumbai, Maharashtra</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="rating">★★★★★</div>
              <p className="testimonial-text">
                "Being an engineer myself, I am extremely satisfied with the team of Optimum Solar Services. They have done an amazing job. The team is very efficient and knowledgeable. They installed my system in just two days. I highly recommend Optimum Solar Services to everyone."
              </p>
              <div className="testimonial-author">
                <strong>Priya Sharma</strong>
                <span>Bangalore, Karnataka</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="rating">★★★★★</div>
              <p className="testimonial-text">
                "Excellent service from start to finish. The subsidy process was handled smoothly, and the installation was completed on time. Our electricity bills have reduced by 85%. Best investment we've made for our home!"
              </p>
              <div className="testimonial-author">
                <strong>Amit Patel</strong>
                <span>Ahmedabad, Gujarat</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What is the life of a rooftop solar system?</h3>
              <p>Solar panels typically last 25-30 years with minimal degradation. Most manufacturers provide a 25-year performance warranty, ensuring at least 80% efficiency after 25 years.</p>
            </div>

            <div className="faq-item">
              <h3>Do Solar Rooftop projects have a high maintenance cost?</h3>
              <p>No, solar systems require very low maintenance. Regular cleaning (2-3 times a year) and occasional inspections are sufficient. We provide free maintenance for the first year and affordable annual maintenance packages thereafter.</p>
            </div>

            <div className="faq-item">
              <h3>Can Solar projects damage my roof?</h3>
              <p>No, when installed correctly by professionals, solar panels actually protect your roof from weather elements. We use advanced mounting systems that don't compromise your roof's integrity.</p>
            </div>

            <div className="faq-item">
              <h3>Do I need to clean my Solar plant?</h3>
              <p>Yes, regular cleaning ensures optimal performance. Dust and debris can reduce efficiency by 15-20%. We recommend professional cleaning every 3-4 months, which is included in our maintenance package.</p>
            </div>

            <div className="faq-item">
              <h3>What is the payback period for solar investment?</h3>
              <p>Typically 3-5 years depending on your electricity consumption and system size. With government subsidies, the payback period can be even shorter.</p>
            </div>

            <div className="faq-item">
              <h3>Will solar panels work during cloudy days?</h3>
              <p>Yes, solar panels generate electricity even on cloudy days, though at reduced capacity (10-25% of peak output). Our systems are designed to optimize energy production in all weather conditions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Get Your Free Solar Quote</h2>
              <p>Join thousands of satisfied customers who've made the switch to solar energy. Let us help you save on electricity bills!</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div>
                    <h4>Call Us</h4>
                    <p>+91 98300 03000</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div>
                    <h4>Email Us</h4>
                    <p>info@optimumsolarservices.in</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <h4>Visit Us</h4>
                    <p>Pan India Service</p>
                  </div>
                </div>
              </div>

              <div className="benefits-list">
                <h3>What you get:</h3>
                <ul>
                  <li>✓ Free site inspection</li>
                  <li>✓ Customized solar design</li>
                  <li>✓ Detailed cost analysis</li>
                  <li>✓ Subsidy assistance</li>
                  <li>✓ No obligation quote</li>
                </ul>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Tell us about your solar requirements"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">Get Free Quote</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <img src="/logo.png" alt="Optimum Solar Services" className="footer-logo-image" />
              </div>
              <p>Rooftop solar made simple. We don't just sell solar — we give you peace of mind.</p>
            </div>

            <div className="footer-section">
              <h4>Our Solutions</h4>
              <ul>
                <li><a href="#solutions">Residential Solar</a></li>
                <li><a href="#solutions">Commercial Solar</a></li>
                <li><a href="#solutions">Housing Societies</a></li>
                <li><a href="#solutions">Industrial Solar</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a onClick={() => scrollToSection('home')}>Home</a></li>
                <li><a onClick={() => scrollToSection('why-us')}>About Us</a></li>
                <li><a onClick={() => scrollToSection('faq')}>FAQ</a></li>
                <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contact Info</h4>
              <ul>
                <li>📞 +91 9697986644</li>
                <li>✉️ info@optimumsolarservices.in</li>
                <li>📍 Pan India Service</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 Optimum Solar Services. All rights reserved. | Proudly made in India ❤️</p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
