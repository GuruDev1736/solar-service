import { useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/ServicePage.css'

function CommercialService() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    whatsapp: '',
    city: '',
    pincode: '',
    monthlyBill: '',
    agreeToTerms: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.agreeToTerms) {
      alert('Please agree to the terms of service and privacy policy')
      return
    }
    alert('Thank you for your Commercial Solar inquiry! We will contact you soon.')
    setFormData({ 
      name: '', 
      companyName: '', 
      whatsapp: '', 
      city: '', 
      pincode: '', 
      monthlyBill: '', 
      agreeToTerms: false 
    })
  }

  return (
    <div className="service-page">
      <Navbar />
      <section className="service-hero-section">
        <div className="service-hero-content">
          <h1>Commercial Solar Solutions</h1>
          <p className="service-tagline">Power Your Business with Sustainable Energy</p>
          <p className="service-intro">
            Reduce operational costs by up to 70% while demonstrating your commitment to environmental responsibility. 
            Our commercial solar solutions are tailored for offices, warehouses, and industrial facilities.
          </p>
        </div>
      </section>

      <section className="service-features-section">
        <div className="features-container">
          <h2>Why Choose Our Commercial Solar?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Significant Cost Savings</h3>
              <p>Reduce energy costs by up to 70% with our high-efficiency commercial solar installations.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏢</div>
              <h3>Custom Design</h3>
              <p>Tailored solutions designed specifically for your business needs and building structure.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Fast ROI</h3>
              <p>Quick payback period with attractive financing options and government incentives.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>25-Year Warranty</h3>
              <p>Comprehensive warranty and ongoing maintenance support for peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-form-section">
        <div className="form-container">
          <h2>Get Your Free Commercial Solar Quote</h2>
          <form className="quote-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Name <span className="required">*</span></label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Company Name <span className="required">*</span></label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>WhatsApp Number <span className="required">*</span></label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>City <span className="required">*</span></label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Company Pin Code</label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Average Monthly Bill <span className="required">*</span></label>
                <input
                  type="text"
                  name="monthlyBill"
                  value={formData.monthlyBill}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-checkbox">
              <input
                type="checkbox"
                name="agreeToTerms"
                id="terms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="terms">
                I agree to Optimum Solar's <a href="#" className="form-link">terms of service</a> & <a href="#" className="form-link">privacy policy</a>
              </label>
            </div>
            <button type="submit" className="btn btn-primary">Submit Inquiry</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default CommercialService
