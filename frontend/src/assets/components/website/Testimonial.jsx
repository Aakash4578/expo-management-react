import React, { useState, useEffect } from 'react';

function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Updated testimonials array with images for each user
  const testimonials = [
    {
      text: "“The service provided was excellent. I couldn't have asked for a better experience.”",
      image: "assets/tes/1.webp" // Replace with actual image URLs
    },
    {
      text: "“Amazing support and top-notch features!”",
      image: "assets/tes/1.webp" // Replace with actual image URLs
    },
    {
      text: "“Really helped us manage events seamlessly.”",
      image: "assets/tes/1.webp" // Replace with actual image URLs
    },
    {
      text: "“User-friendly and powerful platform!”",
      image: "assets/tes/1.webp" // Replace with actual image URLs
    },
    {
      text: "“Exceptional customer service and functionality.”",
      image: "assets/tes/1.webp" // Replace with actual image URLs
    }
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section>
      <div className="container testimonial-container my-4">
        <div className="testimonial-background"></div>
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="testimonial-content">
          <div className="heading-style-1 mb-4">
            <p>What People Say</p>
          </div>

          {/* Profile Images */}
          <div className="d-flex justify-content-center gap-4 flex-wrap mb-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`profile-container ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleClick(index)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={testimonial.image}
                  className="profile-pic"
                  alt={`Profile ${index}`}
                />
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div id="reviews">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-text ${activeIndex === index ? 'active' : 'd-none'}`}
              >
                <div className="testimonial-author">– User {index + 1}</div>
                {testimonial.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
