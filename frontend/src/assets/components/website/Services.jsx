import React from 'react';

function Services() {
  return (
    <section>
      <div className="container-fluid services-sectiondiv">
        <div className="heading-style-1 text-center">
          <h2>Our Service</h2>
        </div>
        <div className="services-section">
          {/* Service 1 */}
          <div className="service-card">
            <i className="fas fa-cogs"></i>
            <h4>What We Do?</h4>
            <p>As the amount of B2B and B2C events are growing rapidly, we provide the best services for our clients to pull off any event as per their wish.</p>
          </div>

          {/* Service 2 */}
          <div className="service-card">
            <i className="fas fa-users"></i>
            <h4>What Value Do We Offer?</h4>
            <p>As the amount of B2B and B2C events are growing rapidly, we provide the best services for our clients to pull off any event as per their wish.</p>
          </div>

          {/* Service 3 */}
          <div className="service-card">
            <i className="fas fa-cloud"></i>
            <h4>How Are We Differentiated?</h4>
            <p>As the amount of B2B and B2C events are growing rapidly, we provide the best services for our clients to pull off any event as per their wish.</p>
          </div>

          {/* Service 4 */}
          <div className="service-card">
            <i className="fas fa-lock"></i>
            <h4>What We Do?</h4>
            <p>As the amount of B2B and B2C events are growing rapidly, we provide the best services for our clients to pull off any event as per their wish.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
