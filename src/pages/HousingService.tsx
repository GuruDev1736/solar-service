import { useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/ServicePage.css'

function HousingService() {
  const [formData, setFormData] = useState({
    societyName: '',
    email: '',
    phone: '',
    units: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your Housing Society inquiry! We will contact you soon.')
    setFormData({ societyName: '', email: '', phone: '', units: '', message: '' })
  }

  return (
    <div className="service-page">
      <Navbar />
      <section className="service-hero-section">
        <div className="service-hero-content">
          <h1>Housing Society Solar Solutions</h1>
          <p className="service-tagline">Empower Your Community with Clean Energy</p>
          <p className="service-intro">
            Bring solar power to your entire community with shared benefits, lower electricity bills for all residents, 
            and increased property values. Our housing society solutions make going solar easy and affordable.
          </p>
        </div>
      </section>

      <section className="service-features-section">
        <div className="features-container">
          <h2>Benefits for Your Housing Society</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏘️</div>
              <h3>Community Benefits</h3>
              <p>Shared solar infrastructure for common areas and individual resident units.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Cost Sharing</h3>
              <p>Distributed investment reduces individual costs significantly for all members.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>Green Community</h3>
              <p>Enhance your society's reputation with eco-friendly initiatives.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Property Value</h3>
              <p>Increase property values with sustainable amenities and lower utility costs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-form-section">
        <div className="form-container">
          <h2>Request Housing Society Quote</h2>
          <form className="quote-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Society Name <span className="required">*</span></label>
                <input
                  type="text"
                  name="societyName"
                  value={formData.societyName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Contact Email <span className="required">*</span></label>
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
                <label>Contact Number <span className="required">*</span></label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Number of Units</label>
                <input
                  type="text"
                  name="units"
                  value={formData.units}
                  onChange={handleInputChange}
                  placeholder="e.g., 100 units"
                />
              </div>
            </div>
            <div className="form-group">
              <label>Additional Details</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                placeholder="Tell us about your society (common areas, parking, specific requirements)..."
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit Inquiry</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default HousingService
