import { useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/ServicePage.css'

function MaintenanceService() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your Maintenance Service inquiry! We will contact you soon.')
    setFormData({ name: '', email: '', phone: '', serviceType: '', message: '' })
  }

  return (
    <div className="service-page">
      <Navbar />
      <section className="service-hero-section">
        <div className="service-hero-content">
          <h1>Solar Panel Maintenance</h1>
          <p className="service-tagline">Keep Your Investment Performing at Peak Efficiency</p>
          <p className="service-intro">
            Our comprehensive maintenance services ensure maximum energy production and extend the lifespan of your solar system. 
            Regular checkups, cleaning, monitoring, and quick repairs to keep your panels running optimally.
          </p>
        </div>
      </section>

      <section className="service-features-section">
        <div className="features-container">
          <h2>Our Maintenance Services</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h3>Regular Checkups</h3>
              <p>Scheduled maintenance visits to prevent issues and optimize performance.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🧹</div>
              <h3>Panel Cleaning</h3>
              <p>Professional cleaning services to maintain maximum energy efficiency.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>System Monitoring</h3>
              <p>Real-time monitoring and performance analysis to catch issues early.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚙️</div>
              <h3>Quick Repairs</h3>
              <p>Fast response times for any technical issues or emergency repairs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-form-section">
        <div className="form-container">
          <h2>Schedule Maintenance Service</h2>
          <form className="quote-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name <span className="required">*</span></label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Address <span className="required">*</span></label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Phone Number <span className="required">*</span></label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Service Type</label>
                <input
                  type="text"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  placeholder="e.g., Cleaning, Repair, Inspection"
                />
              </div>
            </div>
            <div className="form-group">
              <label>Describe Your Needs</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                placeholder="Describe your maintenance needs or issues..."
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Schedule Service</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default MaintenanceService
