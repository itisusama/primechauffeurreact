import React from 'react';
import { Link } from 'react-router-dom';

const Banner = ({ pageTitle, bannerText, breadcrumb, showCarsBreadcrumb, contactNumber, callUsButtonText }) => {
  return (
    <section className="pc-contact-banner py-3">
      <div className="container mt-3" data-aos="fade-right" data-aos-delay="1000">
        <h1 className="text-red">{pageTitle}</h1>
        <div className="text-white w-50">
          <p>{bannerText}</p>
        </div>
        {/* Bread Crumb */}
        <div className="pc-banner-breadcrumb">
          <p className="text-white">
            <Link to='/' className='linkStyle'>Home</Link>
            {showCarsBreadcrumb && <span> &gt; <Link to='/fleet' className='linkStyle'>Fleet</Link></span>}
            &gt; {breadcrumb}
          </p>
        </div>
        {/* Bread Crumb */}
        {/* Call Us Button */}
        {contactNumber && callUsButtonText && (
          <div className="pc-contactus-btn px-4">
            <Link to={`tel:${contactNumber}`} className="btn text-white">{callUsButtonText}</Link>
          </div>
        )}
        {/* Call Us Button */}
      </div>
    </section>
  );
};

export default Banner;
