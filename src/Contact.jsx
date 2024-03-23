import React from 'react'
import Banner from './components/Banner'
import Icons from './components/Icons'

const Contact = () => {
  return (
    <>
      <Banner
      pageTitle="Contact Us"
      bannerText="Incididunt ut laboret dolore magna aliqua enim minim veniam nostrud ullamco laboris nisi aliquip ex loea."
      breadcrumb="Contact"
      showCarsBreadcrumb={false}
      contactNumber="+447883846758"
      callUsButtonText='Contact Us'
    />
    
    {/* <!-- START:: Image with contact Info --> */}
    <section className="container mt-4">
        <div className="row">
            <div className="col-md-6" data-aos="fade-right" data-aos-delay="1000">
            <div className="d-flex justify-content-center shadow">
                <img src={'images/900x600/27.jpg'} className="img-fluid w-100" style={{ height: '45vh' }} alt="contact"/>
            </div>
            </div>
            <div className="col-md-6 bg-light" data-aos="fade-left" data-aos-delay="1000">
            <div className="p-4">
                <h3>Have a Question or Need more information?</h3>
                <p>Give us a call and our experienced and friendly staff would be happy to assist you.</p>
                {/* <!-- icons --> */}
                <div className="contact-icons mt-4">
                <span className="d-block"><i className="fa-solid fa-phone fa-2xl text-red"></i> +44 7883 846758</span>
                <span className="d-block mt-4"><i className="fa-solid fa-envelope fa-2xl text-red"></i> example@email.com</span>
                </div>
                {/* <!-- icons --> */}
            </div>
            </div>
        </div>
    </section>
    {/* <!-- END:: Image with contact Info --> */}
    {/* <!-- START:: 3 info boxes --> */}
<section className="pc-contact-infoBoxes container mt-4">
  <div className="row">
    {/* <!-- 1 --> */}
    <div className="col-lg-4 p-2" data-aos="zoom-in" data-aos-delay="800">
      <div className="bg-light shadow p-4">
        <h3 className="text-red">Coorporate Office</h3>
        <ul className="list-unstyled">
          <li>702 Main St, West Columbia</li>
          <li>South Carolina, 29170</li>
          <li>United States</li>
        </ul>
      </div>
    </div>
    {/* <!-- 2 --> */}
    <div className="col-lg-4 p-2" data-aos="zoom-in" data-aos-delay="800">
      <div className="bg-light shadow p-4">
        <h3 className="text-red">Get In Touch</h3>
        <ul className="list-unstyled">
          <li><b>+44 7883 846758</b></li>
          <li>tahir@mtech.com</li>
          <li>afnan@mtech.com</li>
        </ul>
      </div>
    </div>
    {/* <!-- 3 --> */}
    <div className="col-lg-4 p-2" data-aos="zoom-in" data-aos-delay="800">
      <div className="bg-light shadow p-4">
        <h3 className="text-red">Customer Support</h3>
        <ul className="list-unstyled">
          <li><b>Mon to Sat:</b> 09:00am - 08:00pm</li>
          <li><b>Sunday:</b> 10:00am - 06:00pm</li>
          <li>&nbsp;</li>
        </ul>
      </div>
    </div>
    {/* <!-- END --> */}
  </div>
</section>
{/* <!-- END:: 3 info boxes --> */}

<section id='about'>
  <div className="container" data-aos="fade-up">
    <Icons/>
  </div>
</section>

{/* <!-- START:: Map and Form --> */}
<section className="pc-mapandform mt-4">
  <div className="row">
    <div className="col-lg-6 d-flex justify-content-center" data-aos="fade-right" data-aos-delay="800">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus" style={{ border: 0, width: '100%', height: 'auto' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div className="col-lg-6 bg-light p-5" data-aos="fade-left" data-aos-delay="800">
      <h2>Send Message</h2>
      <p>Have a query? Submit Us Here.</p>
      <form action="#" method="post">
        {/* @csrf */}
        {/* <!-- 1 --> */}
        <div className="row">
          <div className="col-6">
            {/* <!-- First Name --> */}
            <div className="mb-3">
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="First Name" />
            </div>
            {/* <!-- First Name --> */}
          </div>
          <div className="col-6">
            {/* <!-- Last Name --> */}
            <div className="mb-3">
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Last Name" />
            </div>
            {/* <!-- Last Name --> */}
          </div>
        </div>
        {/* <!-- 2 --> */}
        <div className="row">
          <div className="col-6">
            {/* <!-- Email --> */}
            <div className="mb-3">
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
            </div>
            {/* <!-- Email --> */}
          </div>
          <div className="col-6">
            {/* <!-- Phone --> */}
            <div className="mb-3">
              <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Phone" />
            </div>
            {/* <!-- Phone --> */}
          </div>
        </div>
        {/* <!-- 3 --> */}
        <div className="mb-3">
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Subject" />
        </div>
        {/* <!-- 4 --> */}
        <div className="mb-3">
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Question or Request"></textarea>
        </div>
        {/* <!-- end --> */}
        <input className="pc-contact-submit" type="submit" value="Send Message" />
      </form>
    </div>
  </div>
</section>
{/* <!-- END:: Map and Form --> */}

    </>
  )
}

export default Contact
