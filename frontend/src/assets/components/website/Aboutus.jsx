import React from 'react';

function Aboutus() {
  return (
    <section className="about-us">
      {/* Heading OUTSIDE the Box */}
      <div className="heading-style-1 mb-4">
        <h2>About us</h2>
      </div>

      {/* Box Start */}
      <div className="container subabout">
        <div className="row">
          {/* Left Image */}
          <div className="col-lg-6 col-md-6 mb-4 mb-md-0 image-section">
            <img
              src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGV2ZW50fGVufDB8fHx8MTY5MzUwMzA3OA&ixlib=rb-4.0.3&q=80&w=800"
              alt="Event Management Team"
            />
          </div>

          {/* Right Text */}
          <div className="col-lg-6 col-md-6 text-section">
            <h6>About Event Management</h6>
            <p>
              At <strong>EventSphere</strong>, we specialize in transforming ordinary moments into extraordinary memories.
              With a passionate team of creative professionals, we deliver exceptional event planning and management services tailored to your unique needs.
              From elegant weddings and grand corporate events to vibrant concerts and private celebrations, we focus on every detail to create experiences that leave lasting impressions.
              Our commitment to excellence, innovation, and personalized service ensures that every event we manage is flawlessly executed and truly unforgettable.
              Join us at EventSphere — where your dreams meet our expertise to craft the perfect event!
            </p>

            <a href="#contact" className="btn allbutton">Contact now</a>
          </div>
        </div>
      </div>
      {/* Box End */}
    </section>
  );
}

export default Aboutus;
