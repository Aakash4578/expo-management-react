import React from 'react';

function Contactus() {
  return (
    <div className="container-fluid contact-backgroundmain">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="contact-container">
            {/* Floating Background */}
            <div className="contact-background"></div>

            {/* Optional floating circles */}
            <div className="circle circle1"></div>
            <div className="circle circle2"></div>

            <div className="contact-content">
              <div className="heading-style-1">
                <h2 style={{ color: '#fff' }}>Contact Us</h2>
              </div>
              <form className="contact-form mt-4">
                <div className="mb-3">
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" id="message" rows="4" placeholder="Write your message here"></textarea>
                </div>
                <button type="submit" className="allbutton border border-light bg-light text-black">
                  Send Message
                </button>
              </form>

              <div className="social-icons text-center mt-4">
                <a href="#" className="text-white"><i className="fab fa-facebook"></i></a>
                <a href="#" className="text-white"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-white"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
