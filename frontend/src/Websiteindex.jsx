import React from 'react';
import Navbar from './assets/components/website/Navbar';
import Brands from './assets/components/website/Brands';
import Services from './assets/components/website/Services';
import Portfolio from './assets/components/website/Portfolio';
import Gallery from './assets/components/website/Gallery';
import Testimonial from './assets/components/website/Testimonial';
import Pricing from './assets/components/website/Pricing';
import Contactus from './assets/components/website/Contactus';
import Footor from './assets/components/website/Footor';
import Hero from './assets/components/website/Hero'; // Make sure this exists
import Aboutus from './assets/components/website/Aboutus'; // Make sure this exists
import  './assets/components/website/assetd/style.css'

function Websiteindex() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <Services />
      <Aboutus />
      <Portfolio />
      <Gallery />
      <Testimonial />
      <Pricing />
      <Contactus />
      <Footor />
    </>
  );
}

export default Websiteindex;
