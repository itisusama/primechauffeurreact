import React from 'react'
import Banner from './components/Banner'
import Homebanner from './components/Homebanner'
import Newsletter from './components/Newsletter'
import Right from './components/Right'

const Fleet = () => {
  return (
    <>
      <Banner
      pageTitle="Our Cars"
      bannerText="Incididunt ut laboret dolore magna aliqua enim minim veniam nostrud ullamco laboris nisi aliquip ex loea."
      breadcrumb="Cars"
      showCarsBreadcrumb={false}
    /> 
    {/* <!-- START:: Left-right --> */}
<section className="pc-cars mt-4 container-xl">
  <div className="row">
    {/* Left */}
    <div className="col-md-9">
      {/* Two Cars */}
      <div className="row">
        {/* 1 */}
        <div className="col-lg-6 mb-3" data-aos="zoom-in" data-aos-delay="800">
          {/* Image */}
          <div className="p-4"><img src={'images/cars/car1.png'} className="img-fluid w-100 shadow" alt="car" /></div>
          {/* Name */}
          <div><h3 className="text-center">Mercedes S-Class</h3></div>
          {/* Boxes */}
          <div className="row px-4">
            <div className="col-md-6 border p-2">Price: <span className="text-red"><b>£200</b> /Hour</span></div>
            <div className="col-md-6 border p-2">Price: <span className="text-red"><b>£200</b> /Day</span></div>
          </div>
          {/* Hire Button */}
          <div className="pc-newsletter-btn my-4 mx-auto">
          <Link to='/booking' className='linkStyle btn px-5'> Book Now</Link>
          </div>
          {/* End */}
        </div>
        {/* 2 */}
        <div className="col-lg-6 mb-3" data-aos="zoom-in" data-aos-delay="800">
          {/* Image */}
          <div className="p-4"><img src={'images/cars/car2.png'} className="img-fluid w-100 shadow" alt="car" /></div>
          {/* Name */}
          <div><h3 className="text-center">Mercedes V-Class</h3></div>
          {/* Boxes */}
          <div className="row px-4">
            <div className="col-md-6 border p-2">Price: <span className="text-red"><b>£200</b> /Hour</span></div>
            <div className="col-md-6 border p-2">Price: <span className="text-red"><b>£200</b> /Day</span></div>
          </div>
          {/* Hire Button */}
          <div className="pc-newsletter-btn my-4 mx-auto">
          <Link to='/booking' className='linkStyle btn px-5'> Book Now</Link>
          </div>
          {/* End */}
        </div>
        {/* end */}
      </div>
      {/* Two Cars */}
      {/* Two Cars */}
      <div className="row">
        {/* 1 */}
        <div className="col-lg-6 mb-3" data-aos="zoom-in" data-aos-delay="800">
          {/* Image */}
          <div className="p-4"><img src={'images/cars/car3.png'} className="img-fluid w-100 shadow" alt="car" /></div>
          {/* Name */}
          <div><h3 className="text-center">Mercedes E-Class</h3></div>
          {/* Boxes */}
          <div className="row px-4">
            <div className="col-md-6 border p-2">Price: <span className="text-red"><b>£200</b> /Hour</span></div>
            <div className="col-md-6 border p-2">Price: <span className="text-red"><b>£200</b> /Day</span></div>
          </div>
          {/* Hire Button */}
          <div className="pc-newsletter-btn my-4 mx-auto">
          <Link to='/booking' className='linkStyle btn px-5'> Book Now</Link>
          </div>
          {/* End */}
        </div>
        {/* end */}
      </div>
      {/* Two Cars */}
    </div>
    {/* Right */}
    <div className="col-lg-3 mt-4">
        <Right/>
    </div>
    {/* END */}
  </div>
</section>
{/* <!-- END:: Left-right --> */}
    
    <Homebanner/>
    <Newsletter/>
    </>
  )
}

export default Fleet
