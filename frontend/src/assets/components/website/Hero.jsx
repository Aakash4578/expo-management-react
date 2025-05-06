import React from 'react';
import  '../website/assetd/style.css'


function Hero() {
  return (
    // Hero Section
    <section className="hero-section d-flex align-items-center">
      {/* Background Slider */}
      <div className="background-slider"></div>

      {/* Shapes */}
      <div className="shapes">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
        <div className="shape shape4"></div>
      </div>

      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-md-6 text-center text-md-start textdiv">
            <span className="badge bg-pink mb-3">NEW</span>
            <h1>Book Your Dream Event With Us</h1>
            <p className="mt-3">
              The Creators Events is an event management company based in Karachi that caters to different events
              ranging from formal business meetings and adventurous domestic tours to lavish weddings. We are an
              all-rounder event planner in Karachi, tapping various verticals when it comes down to celebrating the
              grand way.
            </p>
            <a href="#" className="btn btn-pink mt-4">Make A Reservation Now</a>
          </div>

          {/* Right Image */}
          <div className="col-md-6 text-center">
            {/* <h1 className="hero-img">event management</h1> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
