import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import '../styles/ServicePage.css'

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <div className="service-page">
        {/* Hero Section */}
        <section className="service-hero" style={{
          background: 'linear-gradient(rgba(113, 181, 48, 0.85), rgba(40, 162, 198, 0.85)), url(/privacy-policy.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          paddingTop: '120px'
        }}>
          <div className="container">
            <h1>Privacy Policy</h1>
            <p>Last Updated: January 5, 2026</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="policy-content" style={{ padding: '60px 0' }}>
          <div className="container" style={{ maxWidth: '900px' }}>
            <div style={{ lineHeight: '1.8', color: '#333' }}>
              
              <h2 style={{ marginTop: '30px', color: '#71B530' }}>1. Introduction</h2>
              <p>
                Welcome to Optimum Solar Services. We respect your privacy and are committed to protecting your personal data. 
                This privacy policy will inform you about how we look after your personal data when you visit our website 
                and tell you about your privacy rights and how the law protects you.
              </p>

              <h2 style={{ marginTop: '30px', color: '#71B530' }}>2. Information We Collect</h2>
              <p>We may collect, use, store and transfer different kinds of personal data about you:</p>
              <ul style={{ marginLeft: '20px' }}>
                <li><strong>Identity Data:</strong> Name, company name</li>
                <li><strong>Contact Data:</strong> Email address, phone number, WhatsApp number, address, city, pincode</li>
                <li><strong>Technical Data:</strong> IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform</li>
                <li><strong>Usage Data:</strong> Information about how you use our website and services</li>
                <li><strong>Project Data:</strong> Monthly electricity bill, system size requirements, location details, service preferences</li>
              </ul>

              <h2 style={{ marginTop: '30px', color: '#71B530' }}>3. How We Use Your Information</h2>
              <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul style={{ marginLeft: '20px' }}>
                <li>To provide solar installation and maintenance services</li>
                <li>To respond to your inquiries and requests for quotes</li>
                <li>To process subsidy applications on your behalf</li>
                <li>To send you service updates and important notifications</li>
                <li>To improve our website and customer service</li>
                <li>To comply with legal obligations</li>
              </ul>

              <h2 style={{ marginTop: '30px', color: '#71B530' }}>4. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
                used or accessed in an unauthorized way, altered or disclosed. We limit access to your personal data to those 
                employees, agents, contractors and other third parties who have a business need to know.
              </p>

              <h2 style={{ marginTop: '30px', color: '#71B530' }}>5. Data Retention</h2>
              <p>
                We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, 
                including for the purposes of satisfying any legal, accounting, or reporting requirements. For service inquiries, 
                we typically retain data for 5 years after the completion of service or last contact.
              </p>

              <h2 style={{ marginTop: '30px', color: '#71B530' }}>6. Your Legal Rights</h2>
              <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data:</p>
              <ul style={{ marginLeft: '20px' }}>
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Right to withdraw consent</li>
              </ul>

              <h2 style={{ marginTop: '30px', color: '#71B530' }}>7. Third-Party Links</h2>
              <p>
                Our website may include links to third-party websites, plug-ins and applications. Clicking on those links or 
                enabling those connections may allow third parties to collect or share data about you. We do not control these 
                third-party websites and are not responsible for their privacy statements.
              </p>

              <h2 style={{ marginTop: '30px', color: '#71B530' }}>8. Cookies</h2>
              <p>
                Our website uses cookies to distinguish you from other users. This helps us to provide you with a good experience 
                when you browse our website and also allows us to improve our site. You can set your browser to refuse all or 
                some browser cookies, or to alert you when websites set or access cookies.
              </p>

              <h2 style={{ marginTop: '30px', color: '#71B530' }}>9. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us:
              </p>
              <ul style={{ marginLeft: '20px', listStyle: 'none' }}>
                <li>📞 Phone: +91 9697986644</li>
                <li>✉️ Email: info@optimumsolarservices.in</li>
                <li>📍 Address: Pan India Service</li>
              </ul>

              <h2 style={{ marginTop: '30px', color: '#71B530' }}>10. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new 
                privacy policy on this page and updating the "Last Updated" date at the top of this policy.
              </p>

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
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default PrivacyPolicy
