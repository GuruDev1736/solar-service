import Navbar from '../components/Navbar'
import '../styles/ServicePage.css'

function OnGridSolar() {
  return (
    <div className="service-page">
      <Navbar />
      <section className="service-hero-section">
        <div className="service-hero-content">
          <h1>On-Grid Solar Solutions</h1>
          <p className="service-tagline">Grid-Connected Solar with Net Metering Benefits</p>
          <p className="service-intro">
            Maximize your savings with grid-tied solar systems. Reduce electricity bills by up to 90% while 
            staying connected to the utility grid for seamless power supply and net metering advantages.
          </p>
        </div>
      </section>

      <section className="service-info-section">
        <div className="info-container">
          <div className="info-content">
            <h2>What is On-Grid Solar?</h2>
            <p>
              On-grid (grid-tied) solar systems are connected to the utility power grid. During the day, your 
              solar panels generate electricity for your home or business. Excess power is fed back to the grid, 
              earning you credits through net metering. At night or during low production, you draw power from 
              the grid using these credits, resulting in significantly reduced or zero electricity bills.
            </p>
          </div>
          <div className="info-image">
            <img 
              src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&q=80" 
              alt="On-Grid Solar System"
            />
          </div>
        </div>
      </section>

      <section className="service-features-section">
        <div className="features-container">
          <h2>How On-Grid Solar Works</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">☀️</div>
              <h3>Solar Generation</h3>
              <p>Solar panels convert sunlight into DC electricity throughout the day.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Inverter Conversion</h3>
              <p>Grid-tied inverter converts DC to AC power for home use and grid connection.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Power Your Home</h3>
              <p>Solar electricity powers your appliances and lights during daylight hours.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Net Metering</h3>
              <p>Excess energy is exported to grid, earning credits on your electricity bill.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="benefits-container">
          <h2>Benefits of On-Grid Solar</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div className="benefit-content">
                <h3>Massive Bill Savings</h3>
                <p>Reduce electricity bills by up to 90% with net metering benefits</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div className="benefit-content">
                <h3>Lower Initial Investment</h3>
                <p>No battery costs - more affordable than off-grid systems</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div className="benefit-content">
                <h3>Government Subsidies</h3>
                <p>Eligible for central and state government subsidy programs</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div className="benefit-content">
                <h3>Grid Backup Available</h3>
                <p>Always have power available from the grid when needed</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div className="benefit-content">
                <h3>Quick ROI</h3>
                <p>Payback period of 3-5 years with subsidies and net metering</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div className="benefit-content">
                <h3>Low Maintenance</h3>
                <p>Simple system with fewer components means minimal upkeep</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="comparison-section">
        <div className="comparison-container">
          <h2>Net Metering Advantage</h2>
          <div className="comparison-content">
            <div className="comparison-item">
              <h3>🌞 During Daytime</h3>
              <p>Your solar panels generate electricity. Excess power is exported to the grid, and you earn credits on your electricity meter.</p>
            </div>
            <div className="comparison-item">
              <h3>🌙 During Nighttime</h3>
              <p>You draw power from the grid as needed. The credits earned during the day offset this consumption, reducing your bill to minimal amounts.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="detailed-info-section">
        <div className="detailed-info-container">
          <h2>Complete On-Grid Solar Process</h2>
          <div className="info-grid">
            <div className="info-card">
              <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80" alt="Solar Installation" />
              <h3>Installation & Setup</h3>
              <p>Our certified technicians install premium solar panels on your rooftop with optimal positioning for maximum sunlight exposure. Installation typically completed in 2-3 days.</p>
            </div>
            <div className="info-card">
              <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80" alt="Grid Connection" />
              <h3>Grid Synchronization</h3>
              <p>The grid-tied inverter synchronizes with utility power, ensuring seamless integration. Net meter installation enables bi-directional energy flow tracking.</p>
            </div>
            <div className="info-card">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" alt="Monitoring System" />
              <h3>Real-Time Monitoring</h3>
              <p>Advanced monitoring systems track energy production, consumption, and grid exports in real-time through mobile apps and web portals.</p>
            </div>
            <div className="info-card">
              <img src="https://images.unsplash.com/photo-1554224311-beee2f770c4f?w=600&q=80" alt="Savings" />
              <h3>Enjoy Savings</h3>
              <p>Watch your electricity bills drop dramatically as solar energy powers your home. Surplus energy credits further reduce your costs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="system-sizing-section">
        <div className="sizing-container">
          <h2>System Size Calculator</h2>
          <p className="sizing-intro">Select the ideal on-grid system based on your monthly electricity bill</p>
          <div className="sizing-grid">
            <div className="size-card">
              <div className="size-header">Basic Plan</div>
              <div className="size-capacity">3 kW System</div>
              <ul className="size-features">
                <li>✓ Monthly Bill: ₹2,000-4,000</li>
                <li>✓ 9-10 Solar Panels (330W each)</li>
                <li>✓ Annual Generation: 4,500 units</li>
                <li>✓ Savings: Up to ₹35,000/year</li>
                <li>✓ ROI Period: 4-5 years</li>
                <li>✓ Government Subsidy: Up to ₹54,000</li>
              </ul>
              <div className="size-price">₹1,80,000 <span>(After subsidy: ₹1,26,000)</span></div>
            </div>
            <div className="size-card featured">
              <div className="popular-badge">Best Value</div>
              <div className="size-header">Standard Plan</div>
              <div className="size-capacity">5 kW System</div>
              <ul className="size-features">
                <li>✓ Monthly Bill: ₹4,000-7,000</li>
                <li>✓ 15-16 Solar Panels (330W each)</li>
                <li>✓ Annual Generation: 7,500 units</li>
                <li>✓ Savings: Up to ₹60,000/year</li>
                <li>✓ ROI Period: 3-4 years</li>
                <li>✓ Government Subsidy: Up to ₹78,000</li>
              </ul>
              <div className="size-price">₹2,75,000 <span>(After subsidy: ₹1,97,000)</span></div>
            </div>
            <div className="size-card">
              <div className="size-header">Premium Plan</div>
              <div className="size-capacity">10 kW System</div>
              <ul className="size-features">
                <li>✓ Monthly Bill: ₹8,000-15,000</li>
                <li>✓ 30-32 Solar Panels (330W each)</li>
                <li>✓ Annual Generation: 15,000 units</li>
                <li>✓ Savings: Up to ₹1,20,000/year</li>
                <li>✓ ROI Period: 3-4 years</li>
                <li>✓ Commercial Subsidy Available</li>
              </ul>
              <div className="size-price">₹5,00,000 <span>(Subsidy varies)</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="technical-specs-section">
        <div className="specs-container">
          <h2>System Components & Specifications</h2>
          <div className="specs-content">
            <div className="spec-image">
              <img src="https://images.unsplash.com/photo-1603053492650-f137e534d0b6?w=700&q=80" alt="On-Grid Components" />
            </div>
            <div className="spec-details">
              <div className="spec-item">
                <h3>☀️ Solar Panels</h3>
                <ul>
                  <li>Type: Monocrystalline PERC technology</li>
                  <li>Efficiency: 19-22%</li>
                  <li>Power output: 330-550W per panel</li>
                  <li>Performance warranty: 25 years (&gt;80% output)</li>
                  <li>Product warranty: 12 years</li>
                </ul>
              </div>
              <div className="spec-item">
                <h3>🔄 Grid-Tied Inverter</h3>
                <ul>
                  <li>Type: String inverter with MPPT</li>
                  <li>Efficiency: 97-98.5%</li>
                  <li>Grid sync: Automatic with anti-islanding</li>
                  <li>Monitoring: WiFi/Ethernet enabled</li>
                  <li>Warranty: 5-10 years</li>
                </ul>
              </div>
              <div className="spec-item">
                <h3>📊 Net Meter</h3>
                <ul>
                  <li>Type: Bi-directional digital meter</li>
                  <li>Accuracy: Class 1.0</li>
                  <li>Display: Import/Export energy</li>
                  <li>Installation: By utility company</li>
                  <li>Cost: Usually borne by installer</li>
                </ul>
              </div>
              <div className="spec-item">
                <h3>🏗️ Mounting Structure</h3>
                <ul>
                  <li>Material: Aluminum/Galvanized steel</li>
                  <li>Tilt angle: Optimized for location</li>
                  <li>Wind load: Tested up to 150 km/h</li>
                  <li>Corrosion resistance: 25 years</li>
                  <li>Roof compatibility: All types</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="subsidy-info-section">
        <div className="subsidy-container">
          <h2>Government Subsidies & Incentives</h2>
          <div className="subsidy-content">
            <div className="subsidy-card">
              <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80" alt="Government Subsidy" />
              <h3>Central Government Subsidy</h3>
              <ul>
                <li>• 1-3 kW: ₹18,000 per kW</li>
                <li>• Above 3 kW: ₹9,000 per kW (for additional capacity)</li>
                <li>• Maximum subsidy: Up to ₹78,000 for residential</li>
                <li>• Direct benefit transfer to consumer account</li>
              </ul>
            </div>
            <div className="subsidy-card">
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80" alt="Tax Benefits" />
              <h3>Tax Benefits & Incentives</h3>
              <ul>
                <li>• Accelerated depreciation for commercial installations</li>
                <li>• State-specific subsidies and rebates</li>
                <li>• Net metering facility at zero cost in most states</li>
                <li>• Property tax exemptions in some regions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="image-gallery-section">
        <div className="gallery-container">
          <h2>On-Grid Solar Installations</h2>
          <div className="image-grid">
            <div className="gallery-item">
              <img 
                src="https://images.unsplash.com/photo-1603053492650-f137e534d0b6?w=600&q=80" 
                alt="Residential On-Grid System"
              />
              <p>Residential Grid-Tied System</p>
            </div>
            <div className="gallery-item">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" 
                alt="Commercial Installation"
              />
              <p>Commercial On-Grid Setup</p>
            </div>
            <div className="gallery-item">
              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80" 
                alt="Solar Panel Array"
              />
              <p>High-Efficiency Panel Array</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OnGridSolar
