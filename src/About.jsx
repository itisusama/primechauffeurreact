import React from 'react'
import Banner from './components/Banner'
import Counter from './components/Counter'
import Homebanner from './components/Homebanner'
import Faq from './components/Faq'

const About = () => {
  return (
    <>
      <Banner
      bannerClass="pc-about-banner"
      pageTitle="About Us"
      bannerText="Incididunt ut laboret dolore magna aliqua enim minim veniam nostrud ullamco laboris nisi aliquip ex loea."
      breadcrumb="About"
      showCarsBreadcrumb={false}
    />
    {/* <!-- START:: image and info --> */}
    <section className="container mt-4 mb-4">
        <div className="row">
            {/* <!-- map Image --> */}
            <div className="col-lg-6 d-flex justify-content-center" data-aos="fade-right" data-aos-delay="1000">
                <img src={'images/cars/company.png'} className="img-fluid" alt="map"/>
            </div>
            {/* <!-- information --> */}
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="1000">
                <h3>About Company</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi sit distinctio consequatur minima, nobis quibusdam perspiciatis maxime aspernatur blanditiis nam voluptate soluta quo possimus quas fugit laudantium, expedita facilis impedit. Harum aliquam at assumenda enim eveniet nisi iusto voluptas!</p>
                <div className="pc-newsletter-btn mt-4">
                   <button className="btn">Hire a Car</button>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- END:: image and info --> */}
    <Counter/>
    <Homebanner/>
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
    <Faq/>
    </>
  )
}

export default About
