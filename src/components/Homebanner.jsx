import React from 'react'

const Homebanner = () => {
  return (
    <>
      <section className="pc-home-banner p-3 mt-3">
      <div className="container mx-auto py-3">
        <div className="row">
          {/* 1 */}
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="1000">
            <h2 className="text-white"><b>Now we have <span className="text-red">2000</span> Locations</b></h2>
            <div>
              <p className="text-white">Labore dolore magna aliqua ipsum veniam quis nostrud exercitation voluptate eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod.</p>
            </div>
            {/* Banner Icons Box */}
            <div className="pc-bi-box">
              {/* Icons */}
              <div className="pc-home-banner-icon d-flex gap-2 align-items-center">
                <div><i className="fa-solid fa-phone fa-2xl"></i></div>
                <div>
                  <span className="d-block text-white">For Booking Rides</span>
                  <h5 className="text-red">+44 7883 846758</h5>
                  <span className="d-block text-white">We are present 24/7</span>
                </div>
              </div>
              {/* Icons */}
              {/* Icons */}
              <div className="pc-home-banner-icon d-flex gap-2 align-items-center">
                <div><i className="fa-solid fa-phone fa-2xl"></i></div>
                <div>
                  <span className="d-block text-white">For Booking Rides</span>
                  <h5 className="text-red">+44 7883 846758</h5>
                  <span className="d-block text-white">We are present 24/7</span>
                </div>
              </div>
              {/* Icons */}
            </div>
            {/* Banner Icons Box */}
          </div>
          {/* 2 */}
          <div className="col-lg-6 mt-3" data-aos="fade-left" data-aos-delay="1000">
            <div>
              <img src={'images/cars/locations-map.png'} alt="map" className="img-fluid" />
              {/* Numbers */}
              <div className="pc-bannerNumbers">
                {/* 1 */}
                <div>
                  <h2 className="text-red">
                    1,000
                  </h2>
                  <span className="d-block text-white">Heading 1</span>
                </div>
                {/* 2 */}
                <div>
                  <h2 className="text-red">
                    1,000
                  </h2>
                  <span className="d-block text-white">Heading 2</span>
                </div>
                {/* 3 */}
                <div>
                  <h2 className="text-red">
                    1,000
                  </h2>
                  <span className="d-block text-white">Heading 3</span>
                </div>
                {/* END */}
              </div>
              {/* Numbers */}
            </div>
          </div>
          {/* End */}
        </div>
      </div>
    </section>
    </>
  )
}

export default Homebanner
