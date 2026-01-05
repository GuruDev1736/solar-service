import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import '../styles/ServicePage.css'

function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <div className="service-page">
        {/* Hero Section */}
        <section className="service-hero" style={{
          background: 'linear-gradient(rgba(113, 181, 48, 0.85), rgba(40, 162, 198, 0.85)), url(/terms-and-conditions%20.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          paddingTop: '120px'
        }}>
          <div className="container">
            <h1>Terms and Conditions</h1>
            <p>Last Updated: January 5, 2026</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="policy-content" style={{ padding: '60px 0' }}>
          <div className="container" style={{ maxWidth: '900px' }}>
            <div style={{ lineHeight: '1.8', color: '#333' }}>
              
              <h2 style={{ marginTop: '30px', color: '#71B530' }}>1. Agreement to Terms</h2>
              <p>
                By accessing or using the services of Optimum Solar Services, you agree to be bound by these Terms and Conditions. 
                If you disagree with any part of these terms, you may not access our services.
              </p>

              <h2 style={{ marginTop: '30px', color: '#71B530' }}>2. Services Provided</h2>
              <p>Optimum Solar Services provides the following services:</p>
              <ul style={{ marginLeft: '20px' }}>
                <li>Commercial solar installation and maintenance</li>
                <li>Residential solar systems (Housing societies and individual homes)</li>
                <li>On-Grid and Off-Grid solar solutions</li>
                <li>Solar panel maintenance and cleaning services</li>
                <li>Subsidy application assistance</li>
                <li>Consultation and site assessment</li>
              </ul>

              <h2 style={{ marginTop: '30px', color: '#71B530' }}>3. Service Agreement</h2>
              <p>
                All services are subject to a formal service agreement that will be provided before commencement of work. 
                The service agreement will include:
              </p>
              <ul style={{ marginLeft: '20px' }}>
                <li>Detailed scope of work</li>
                <li>Project timeline and milestones</li>
                <li>Pricing and payment terms</li>
                <li>Warranty information</li>
                <li>Maintenance terms</li>
              </ul>

              <h2 style={{ marginTop: '30px', color: '#71B530' }}>4. Pricing and Payment</h2>
              <ul style={{ marginLeft: '20px' }}>
                <li>All prices quoted are subject to change until a formal agreement is signed</li>
                <li>Payment terms will be specified in the service agreement</li>
                <li>Typically, we require an advance payment before starting installation</li>
                <li>Final payment is due upon successful completion and commissioning of the system</li>
                <li>Prices are inclusive of GST unless otherwise stated</li>
                <li>Any additional work requested during the project will be charged separately</li>
              </ul>

              <h2 style={{ marginTop: '30px', color: '#71B530' }}>5. Installation and Timeline</h2>
              <p>
                We strive to complete installations within the timeline specified in the agreement. However, delays may occur due to:
              </p>
              <ul style={{ marginLeft: '20px' }}>
                <li>Weather conditions</li>
                <li>Government approvals and permits</li>
                <li>Site-specific challenges</li>
                <li>Supply chain issues</li>
                <li>Force majeure events</li>
              </ul>
              <p>We will keep you informed of any delays and work to minimize their impact.</p>

              <h2 style={{ marginTop: '30px', color: '#71B530' }}>6. Warranties</h2>
              <ul style={{ marginLeft: '20px' }}>
                <li><strong>Solar Panels:</strong> 25+ years performance warranty from manufacturer</li>
                <li><strong>Inverters:</strong> 5-10 years warranty depending on brand</li>
                <li><strong>Installation:</strong> 5 years workmanship warranty</li>
                <li><strong>Batteries (Off-Grid):</strong> As per manufacturer specifications</li>
              </ul>
              <p>Detailed warranty terms will be provided in the service agreement.</p>

              <h2 style={{ marginTop: '30px', color: '#71B530' }}>7. Maintenance Services</h2>
              <p>
                Free maintenance includes regular cleaning and system health checks as specified in your service agreement. 
                This does not cover:
              </p>
              <ul style={{ marginLeft: '20px' }}>
                <li>Damage due to natural disasters</li>
                <li>Intentional damage or misuse</li>
                <li>Modifications by unauthorized personnel</li>
                <li>Component replacement (unless under warranty)</li>
              </ul>

              <h2 style={{ marginTop: '30px', color: '#71B530' }}>8. Subsidy Assistance</h2>
              <p>
                We provide assistance with government subsidy applications. However:
              </p>
              <ul style={{ marginLeft: '20px' }}>
                <li>Approval of subsidy is at the discretion of government authorities</li>
                <li>We cannot guarantee subsidy approval</li>
                <li>Project pricing is independent of subsidy approval</li>
                <li>Subsidy amount and eligibility may change based on government policies</li>
              </ul>

              <h2 style={{ marginTop: '30px', color: '#71B530' }}>9. Customer Responsibilities</h2>
              <ul style={{ marginLeft: '20px' }}>
                <li>Provide accurate information about electricity consumption and site details</li>
                <li>Ensure site accessibility for our team during installation</li>
                <li>Obtain necessary building permissions if required</li>
                <li>Provide a safe working environment for our installation team</li>
                <li>Inform us of any structural concerns or limitations</li>
              </ul>

              <h2 style={{ marginTop: '30px', color: '#71B530' }}>10. Limitation of Liability</h2>
              <p>
                Optimum Solar Services shall not be liable for:
              </p>
              <ul style={{ marginLeft: '20px' }}>
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of profits or revenue</li>
                <li>Damage caused by natural disasters or force majeure</li>
                <li>Performance issues due to factors beyond our control (e.g., grid stability, weather)</li>
              </ul>

              <h2 style={{ marginTop: '30px', color: '#71B530' }}>11. Cancellation and Refund Policy</h2>
              <ul style={{ marginLeft: '20px' }}>
                <li>Cancellations made before installation starts: Full refund minus 10% administrative charges</li>
                <li>Cancellations after installation starts: Charges for work completed plus materials ordered</li>
                <li>Cancellations after installation completion: No refund</li>
                <li>Refund processing time: 15-30 business days</li>
              </ul>

              <h2 style={{ marginTop: '30px', color: '#71B530' }}>12. Intellectual Property</h2>
              <p>
                All content on our website, including text, graphics, logos, and images, is the property of Optimum Solar Services 
                and is protected by copyright laws. Unauthorized use is prohibited.
              </p>

              <h2 style={{ marginTop: '30px', color: '#71B530' }}>13. Governing Law</h2>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of India. 
                Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in India.
              </p>

              <h2 style={{ marginTop: '30px', color: '#71B530' }}>14. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated 
                revision date. Continued use of our services after changes constitutes acceptance of the modified terms.
              </p>

              <h2 style={{ marginTop: '30px', color: '#71B530' }}>15. Contact Information</h2>
              <p>
                For any questions regarding these Terms and Conditions, please contact us:
              </p>
              <ul style={{ marginLeft: '20px', listStyle: 'none' }}>
                <li>📞 Phone: +91 9697986644</li>
                <li>✉️ Email: info@optimumsolarservices.in</li>
                <li>📍 Address: Pan India Service</li>
              </ul>

              <div style={{ marginTop: '40px', padding: '20px', background: '#f0f9ff', borderLeft: '4px solid #71B530' }}>
                <p style={{ margin: 0 }}>
                  <strong>Note:</strong> By submitting an inquiry or entering into a service agreement with Optimum Solar Services, 
                  you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                </p>
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

export default TermsAndConditions
