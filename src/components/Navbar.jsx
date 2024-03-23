import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileNavActive, setMobileNavActive] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavActive(!mobileNavActive);
  };

  const closeMobileNav = () => {
    setMobileNavActive(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <section className="pc-navbar container-fluid px-0">
        <nav className="pc-desktop-navbar bg-body-tertiary px-5 py-2 d-flex justify-content-between">
          {/* LOGO and Name */}
          <div className="pc-navbar-mobile-logo">
            <div className="pc-navbar-logo p-2">
              <Link to="/">
                <i className="fa-solid fa-car"></i>
              </Link>
            </div>
            <div className="pc-navbar-name">
              <Link to="/">
                <h5>Prime Chauffeur</h5>
              </Link>
            </div>
          </div>
          {/* Items */}
          <div className="pc-navbar-list">
            <ul className="list-unstyled d-flex gap-1 align-items-center">
              <li><b><Link to="/">Home</Link></b></li>
              <li><Link to="/fleet" style={{ margin: '0 10px' }}>Our Fleet</Link></li>
              <li>
                <div className="dropdown">
                  <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services
                  </button>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/airport">Airport Transfers</Link></li>
                    <li><Link className="dropdown-item" to="/wedding">Wedding</Link></li>
                    <li><Link className="dropdown-item" to="/events">Events</Link></li>
                    <li><Link className="dropdown-item" to="/business">Business</Link></li>
                    <li><Link className="dropdown-item" to="/tours">Tours</Link></li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="dropdown">
                  <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Blog
                  </button>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/singleblog">Single Blog</Link></li>
                    <li><Link className="dropdown-item" to="/blog">All Blogs</Link></li>
                  </ul>
                </div>
              </li>
              <li><Link to="/contact" style={{ marginRight: '10px' }}>Contact</Link></li>
              <li><Link to="/about" style={{ marginRight: '10px' }}>About</Link></li>
              <li><Link to='/fleet' className='linkStyle btn pc-navbar-booknow px-3'> Book Now</Link></li>
            </ul>
          </div>
        </nav>
        <div className="pc-navbar-mobile-toggle">
          <a href="#" id="pc-navbar-mobile-toggle" onClick={toggleMobileNav}>
            <i className="fa-solid fa-bars fa-2xl"></i>
          </a>
        </div>
      </section>

      {/* Mobile Navbar */}
      <section className={`pc-mobile-navbar bg-light ${mobileNavActive ? 'navbar-active' : ''}`} id="pc-mobile-navbar">
        {/* close */}
        <div className="pc-mobile-navbar-close" id="pc-mobile-navbar-close" onClick={closeMobileNav}>
          <i className="fa-solid fa-x"></i>
        </div>

        <div className="container pc-mobile-list">
          <ul className="list-unstyled">
            <li><b><Link className="btn" to="/home">Home</Link></b></li>
            <li>
              <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Cars
                </button>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/cars.html">Our Cars</Link></li>
                </ul>
              </div>
            </li>
            <li>
              <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </button>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/airport">Airport Transfers</Link></li>
                  <li><Link className="dropdown-item" to="/wedding">Wedding</Link></li>
                  <li><Link className="dropdown-item" to="/events">Events</Link></li>
                  <li><Link className="dropdown-item" to="/business">Business</Link></li>
                  <li><Link className="dropdown-item" to="/tours">Tours</Link></li>
                </ul>
              </div>
            </li>
            <li>
              <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Blog
                </button>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/blog">All Blogs</Link></li>
                  <li><Link className="dropdown-item" to="/singleblog">Single Blog</Link></li>
                </ul>
              </div>
            </li>
            <li><Link className="btn" to="/contact" style={{ marginRight: '10px' }}>Contact</Link></li>
            <li><Link className="btn" to="/home" style={{ marginRight: '10px' }}>About</Link></li>
            <li><Link to='/fleet' className='linkStyle btn pc-navbar-booknow px-3'> Book Now</Link></li>
          </ul>
        </div>
      </section>
      {/* END:: Navbar */}
    </>
  )
}

export default Navbar;
