import React from 'react'
import Hero from './components/Hero';
import Homebanner from './components/Homebanner';
import Whyus from './components/Whyus';
import Newsletter from './components/Newsletter';
import CardSlider from './components/CardSlider';
import Testimonial from './components/Testimonial';
import ServiceCards from './components/ServiceCards';

const Home = () => {
  return (
    <>
      <Hero/>
      <CardSlider carCardsData = {[
          { image :'images/cars/car1.png' , rent: '200', carName: 'Mercedes', passengers: '5', bags: '4' },
          { image :'images/cars/car2.png' , rent: '200', carName: 'Civic Honda', passengers: '3', bags: '4' },
          { image :'images/cars/car1.png', rent: '200', carName: 'Parado', passengers: '6', bags: '6' },
        ]}/>
      <Homebanner/>
      <ServiceCards/>
      <Whyus/>
      <section className="pc-benaam bg-light p-4">
      {/* LOGO and Name */}
      <div className="pc-navbar-mobile-logo justify-content-center">
        <div className="pc-navbar-logo p-2"><i className="fa-solid fa-car"></i></div>
        <div className="pc-navbar-name"><h5>Prime Chauffeur</h5></div>
      </div>

      {/* 4 Info Boxes */}
      <div className="mt-4">
        <div className="row gap-3 d-flex justify-content-center">
          {/* 1 */}
          <div className="col-lg-2 bg-light shadow py-3" data-aos="zoom-in" data-aos-delay="800">
            <ul className="list-unstyled d-flex flex-column justify-content-center align-items-center">
              <li><i className="fa-solid fa-phone fa-2xl text-red"></i></li>
              <li className="mt-4">+44 7883 846758</li>
              <li className="text-red">Round-The-Clock</li>
            </ul>
          </div>
          {/* 2 */}
          <div className="col-lg-2 bg-light shadow py-3" data-aos="zoom-in" data-aos-delay="800">
            <ul className="list-unstyled d-flex flex-column justify-content-center align-items-center">
              <li><i className="fa-solid fa-location-dot fa-2xl text-red"></i></li>
              <li className="mt-4">702 Main St</li>
              <li>South Carolina, USA</li>
            </ul>
          </div>
          {/* 3 */}
          <div className="col-lg-2 bg-light shadow py-3" data-aos="zoom-in" data-aos-delay="800">
            <ul className="list-unstyled d-flex flex-column justify-content-center align-items-center">
              <li><i className="fa-solid fa-envelope fa-2xl text-red"></i></li>
              <li className="mt-4">tahir@mtech.com</li>
              <li>afnan@mtech.com</li>
            </ul>
          </div>
          {/* 4 */}
          <div className="col-lg-2 bg-light shadow py-3" data-aos="zoom-in" data-aos-delay="800">
            <ul className="list-unstyled d-flex flex-column justify-content-center align-items-center">
              <li><i className="fa-solid fa-clock fa-2xl text-red"></i></li>
              <li className="mt-4"><b className="text-red">Mon to Sat:</b> 9AM - 8PM</li>
              <li><b className="text-red">Sunday:</b> 10AM - 6PM</li>
            </ul>
          </div>
          {/* end */}
        </div>
      </div>
    </section>
    <Testimonial/>
    <Newsletter/>
    </>
  )
}

export default Home
