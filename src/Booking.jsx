import React from 'react';
import Banner from './components/Banner';
import CarBookingForm from './components/CarBookingForm';

const Booking = () => {
  return (
    <>
      <Banner
      pageTitle="Book Here"
      bannerText="Incididunt ut laboret dolore magna aliqua enim minim veniam nostrud ullamco laboris nisi aliquip ex loea."
      breadcrumb="Booking"
      showCarsBreadcrumb={false}
    /> 
    <CarBookingForm/>

    <section className="container mt-4 mb-4">
      <div className="row p-2">
        {/* Left Side */}
        <div className="col-md-6 p-3 mb-3">
          <div className="pc-payment-card bg-light py-3">
            {/* Image */}
            <div className="p-4 d-flex justify-content-center"><img src={'images/cars/car3.png'} className="img-fluid w-75" alt="car" /></div>
            {/* Name */}
            <div><h3 className="text-center">Car Name</h3></div>
            {/* Boxes */}
            <div className="row px-4">
              <div className="col-md-6 border p-2 text-white">Price: <span className="text-red"><b>£200</b> /Hour</span></div>
              <div className="col-md-6 border p-2 text-white">Price: <span className="text-red"><b>£200</b> /Day</span></div>
            </div>
            {/* Hire Button */}
            <div className="pc-newsletter-btn mt-4 mx-auto">
            <Link to='/booking' className='linkStyle btn px-5'> Book Now</Link>
            </div>
            {/* End */}
          </div>
        </div>
        {/* Right Side */}
        <div className="col-md-6 p-3">
          <div className="bg-light p-3">
            {/* Check Payment */}
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
              <label className="form-check-label" htmlFor="flexCheckDefault1">
                Check Payment
              </label>
            </div>
            {/* Direct Payment */}
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
              <label className="form-check-label" htmlFor="flexCheckDefault2">
                Direct Bank Transfer
              </label>
            </div>
            {/* Para */}
            <div className="container mt-3">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem vel eligendi quisquam quo nobis, cum magnam doloremque id officiis laboriosam. Debitis voluptatem, dolore ea ex veritatis cum aliquam est exercitationem id impedit ab, vitae quam adipisci? Nihil possimus optio vel ducimus nesciunt! Id eius amet consequatur labore adipisci totam, obcaecati ab a recusandae deleniti architecto voluptate nihil laboriosam quo sed sapiente autem! Quidem nam dolorem ut quaerat qui voluptatibus!</p>
            </div>
            {/* Direct Payment */}
            {/* Direct Payment */}
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
              <label className="form-check-label" htmlFor="flexCheckDefault3">
                Direct Bank Transfer
              </label>
            </div>
            <div className='mt-4'><img src={'images/cars/payment.png'} alt="Payment" /></div>
            {/* Hire Button */}
            <div className="pc-newsletter-btn mt-4">
            <Link to='/booking' className='linkStyle btn'> Pay Now</Link>
            </div>
            {/* END */}
          </div>
        </div>
        {/* end */}
      </div>
    </section>
    </>
  )
}

export default Booking
