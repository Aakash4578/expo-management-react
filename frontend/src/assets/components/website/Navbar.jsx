import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand text-white" href="#">EventSphere</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link text-white" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">Our Service</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">About us</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">Portfolio</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">Gallery</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">Testimonials</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">Pricing</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">Contact us</a></li>

            {/* ✅ Correct Login Button */}
            <li className="nav-item">
              <Link className="btn btn-outline-light ms-3" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
