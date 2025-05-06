import React from 'react';

function Pricing() {
  return (
    <div id="mainContainer">
      <div className="margin-body">
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <div className="wpb_text_column wpb_content_element">
              <div className="wpb_wrapper">
                <div className="heading-style-1 mb-4" style={{ textAlign: 'center' }}>
                  <h2>Pricing</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {[
            { title: "Basic", price: "$10" },
            { title: "Standard", price: "$45" },
            { title: "Premium", price: "$99" },
            { title: "Enterprise Event", price: "$145" },
          ].map((plan, index) => (
            <div className="col-sm-3 col-md-3 pricing-column-wrapper" key={index}>
              <div className="pricing-column">
                <div className="pricing-price-row">
                  <div className="pricing-price-wrapper">
                    <div className="pricing-price">
                      <div className="pricing-cost">{plan.price}</div>
                      <div className="time">Per Event</div>
                    </div>
                  </div>
                </div>
                <div className="pricing-row-title">
                  <div className="pricing_row_title">{plan.title}</div>
                </div>
                <figure className="pricing-row">Unlimited Venues</figure>
                <figure className="pricing-row">Dedicated Event Manager</figure>
                <figure className="pricing-row">VIP Guest Management</figure>
                <figure className="pricing-row">Advanced Analytics</figure>
                <figure className="pricing-row">24/7 Support</figure>
                <div className="pricing-footer">
                  <div className="gem-button-container gem-button-position-center">
                    <a href="#" className="gem-button">Choose Plan</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
