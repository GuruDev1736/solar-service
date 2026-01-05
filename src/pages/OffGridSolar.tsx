import Navbar from '../components/Navbar'
import '../styles/ServicePage.css'

function OffGridSolar() {
  return (
    <div className="service-page">
      <Navbar />
      <section className="service-hero-section">
        <div className="service-hero-content">
          <h1>Off-Grid Solar Solutions</h1>
          <p className="service-tagline">Complete Energy Independence with Battery Storage</p>
          <p className="service-intro">
            Experience total energy freedom with our advanced off-grid solar systems. Perfect for remote locations, 
            areas with unreliable grid power, or those seeking complete energy independence.
          </p>
        </div>
      </section>

      <section className="service-info-section">
        <div className="info-container">
          <div className="info-content">
            <h2>What is Off-Grid Solar?</h2>
            <p>
              Off-grid solar systems operate independently from the utility grid, using battery banks to store 
              excess solar energy for use during nighttime or cloudy days. These systems provide complete energy 
              autonomy and are ideal for locations where grid connection is unavailable or unreliable.
            </p>
          </div>
          <div className="info-image">
            <img 
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80" 
              alt="Off-Grid Solar System"
            />
          </div>
        </div>
      </section>

      <section className="service-features-section">
        <div className="features-container">
          <h2>Key Components of Off-Grid Systems</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">☀️</div>
              <h3>Solar Panels</h3>
              <p>High-efficiency photovoltaic panels that convert sunlight into electricity throughout the day.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔋</div>
              <h3>Battery Storage</h3>
              <p>Deep-cycle batteries store excess energy for use during nights and cloudy periods.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚙️</div>
              <h3>Charge Controller</h3>
              <p>Regulates voltage and current from solar panels to batteries, preventing overcharging.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔌</div>
              <h3>Inverter</h3>
              <p>Converts DC power from batteries to AC power for running household appliances.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="benefits-container">
          <h2>Benefits of Off-Grid Solar</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div className="benefit-content">
                <h3>Complete Energy Independence</h3>
                <p>No reliance on utility grid - produce and store your own power 24/7</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div className="benefit-content">
                <h3>Perfect for Remote Locations</h3>
                <p>Ideal for areas without grid access or with unreliable power supply</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div className="benefit-content">
                <h3>Zero Electricity Bills</h3>
                <p>Completely eliminate monthly electricity bills and rate hikes</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div className="benefit-content">
                <h3>Backup Power Security</h3>
                <p>Never worry about grid failures or power outages again</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div className="benefit-content">
                <h3>Eco-Friendly Solution</h3>
                <p>100% clean, renewable energy with zero carbon emissions</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div className="benefit-content">
                <h3>Long-Term Investment</h3>
                <p>25+ years of reliable power with minimal maintenance costs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="detailed-info-section">
        <div className="detailed-info-container">
          <h2>How Off-Grid Solar Systems Work</h2>
          <div className="info-grid">
            <div className="info-card">
              <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80" alt="Solar Panels" />
              <h3>Step 1: Solar Energy Capture</h3>
              <p>High-efficiency solar panels capture sunlight and convert it into DC (Direct Current) electricity. Our premium panels ensure maximum energy production even in low-light conditions.</p>
            </div>
            <div className="info-card">
              <img src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=600&q=80" alt="Charge Controller" />
              <h3>Step 2: Battery Charging</h3>
              <p>The charge controller regulates the flow of electricity from the panels to the batteries, preventing overcharging and ensuring optimal battery life and performance.</p>
            </div>
            <div className="info-card">
              <img src="https://images.unsplash.com/photo-1593642532400-2682810df593?w=600&q=80" alt="Battery Storage" />
              <h3>Step 3: Energy Storage</h3>
              <p>Deep-cycle batteries store the solar energy for use during nighttime or cloudy days. Our advanced lithium-ion batteries offer superior capacity and longevity.</p>
            </div>
            <div className="info-card">
              <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80" alt="Power Usage" />
              <h3>Step 4: Power Conversion & Usage</h3>
              <p>The inverter converts stored DC electricity to AC (Alternating Current) for powering all your home appliances, lights, and electronic devices seamlessly.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="system-sizing-section">
        <div className="sizing-container">
          <h2>System Sizing Guide</h2>
          <p className="sizing-intro">Choose the right system size based on your daily power consumption</p>
          <div className="sizing-grid">
            <div className="size-card">
              <div className="size-header">Small Home</div>
              <div className="size-capacity">3-5 kW</div>
              <ul className="size-features">
                <li>✓ 4-6 Solar Panels</li>
                <li>✓ 200-300 Ah Battery Bank</li>
                <li>✓ Powers lights, fans, TV, phone charging</li>
                <li>✓ Perfect for 2-3 bedroom homes</li>
                <li>✓ Daily consumption: 10-15 units</li>
              </ul>
              <div className="size-price">Starting from ₹3,50,000</div>
            </div>
            <div className="size-card featured">
              <div className="popular-badge">Most Popular</div>
              <div className="size-header">Medium Home</div>
              <div className="size-capacity">5-10 kW</div>
              <ul className="size-features">
                <li>✓ 8-15 Solar Panels</li>
                <li>✓ 400-600 Ah Battery Bank</li>
                <li>✓ Powers AC, refrigerator, washing machine</li>
                <li>✓ Ideal for 3-4 bedroom homes</li>
                <li>✓ Daily consumption: 20-30 units</li>
              </ul>
              <div className="size-price">Starting from ₹6,50,000</div>
            </div>
            <div className="size-card">
              <div className="size-header">Large Home</div>
              <div className="size-capacity">10-15 kW</div>
              <ul className="size-features">
                <li>✓ 15-25 Solar Panels</li>
                <li>✓ 800-1200 Ah Battery Bank</li>
                <li>✓ Powers multiple ACs, water heater, pool</li>
                <li>✓ Perfect for large villas & farmhouses</li>
                <li>✓ Daily consumption: 40-50 units</li>
              </ul>
              <div className="size-price">Starting from ₹10,50,000</div>
            </div>
          </div>
        </div>
      </section>

      <section className="technical-specs-section">
        <div className="specs-container">
          <h2>Technical Specifications</h2>
          <div className="specs-content">
            <div className="spec-image">
              <img src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=700&q=80" alt="Solar System Components" />
            </div>
            <div className="spec-details">
              <div className="spec-item">
                <h3>🔆 Solar Panels</h3>
                <ul>
                  <li>Type: Monocrystalline/Polycrystalline</li>
                  <li>Efficiency: 18-22%</li>
                  <li>Warranty: 25 years performance</li>
                  <li>Power output: 330-550W per panel</li>
                </ul>
              </div>
              <div className="spec-item">
                <h3>🔋 Battery System</h3>
                <ul>
                  <li>Type: Lithium-ion / Lead-acid</li>
                  <li>Depth of Discharge: 80-90%</li>
                  <li>Cycle life: 3000-6000 cycles</li>
                  <li>Warranty: 5-10 years</li>
                </ul>
              </div>
              <div className="spec-item">
                <h3>⚡ Inverter</h3>
                <ul>
                  <li>Type: Pure Sine Wave</li>
                  <li>Efficiency: 95-98%</li>
                  <li>Protection: Overload, short circuit</li>
                  <li>Warranty: 5 years</li>
                </ul>
              </div>
              <div className="spec-item">
                <h3>🎛️ Charge Controller</h3>
                <ul>
                  <li>Type: MPPT (Maximum Power Point Tracking)</li>
                  <li>Efficiency: 97-99%</li>
                  <li>Voltage range: 12V/24V/48V</li>
                  <li>Temperature compensation: Yes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="image-gallery-section">
        <div className="gallery-container">
          <h2>Off-Grid Solar Installations</h2>
          <div className="image-grid">
            <div className="gallery-item">
              <img 
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80" 
                alt="Residential Off-Grid System"
              />
              <p>Residential Off-Grid Installation</p>
            </div>
            <div className="gallery-item">
              <img 
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80" 
                alt="Battery Storage System"
              />
              <p>Advanced Battery Storage</p>
            </div>
            <div className="gallery-item">
              <img 
                src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80" 
                alt="Remote Location Solar"
              />
              <p>Remote Location Setup</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OffGridSolar
