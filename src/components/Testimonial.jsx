import React, { useEffect, useState } from 'react'
import $ from 'jquery';

const Testimonial = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleNextClick = () => {
      const carouselWidth = $(".carousel-inner")[0].scrollWidth;
      const cardWidth = $(".carousel-item").width();

      if (scrollPosition < carouselWidth - cardWidth * 4) {
        setScrollPosition(scrollPosition + cardWidth);
        $(".carousel-inner").animate({ scrollLeft: scrollPosition + cardWidth }, 600);
      }
    };

    const handlePrevClick = () => {
      const cardWidth = $(".carousel-item").width();

      if (scrollPosition > 0) {
        setScrollPosition(scrollPosition - cardWidth);
        $(".carousel-inner").animate({ scrollLeft: scrollPosition - cardWidth }, 600);
      }
    };

    $(".carousel-control-next").on("click", handleNextClick);
    $(".carousel-control-prev").on("click", handlePrevClick);

    return () => {
      // Cleanup event listeners
      $(".carousel-control-next").off("click", handleNextClick);
      $(".carousel-control-prev").off("click", handlePrevClick);
    };
  }, [scrollPosition]);
  return (
    <>
      {/* START:: Testimonials */}
<section className="pc-testimonial">
  <div className="testimonial-slider">
    <div id="carouselExampleControls" className="carousel carousel-dark">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className="testimonial-title">
              <h2 className="fw-bold display-6">What our customers say?</h2>
            </div>
            <div>
              <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, eaque? Doloremque provident labore accusantium nostrum architecto? Dolore, sed. Explicabo ipsum et accusantium odio quis hic vero ea obcaecati ullam laboriosam?</p>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="col-md-8">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card w-75 mx-auto ">
                  <div className="img-wrapper"><img src={'images/person/jasmine.jpg'} className="d-block w-100" alt="..."/></div>
                  <div className="card-body">
                    <h5 className="card-title">Mubeen Akbar</h5>
                    <i className="fa fa-star text-warning pe-1"></i>
                    <i className="fa fa-star text-warning pe-1"></i>
                    <i className="fa fa-star text-warning pe-1"></i>
                    <i className="fa fa-star text-warning pe-1"></i>
                    <i className="fa fa-star text-warning pe-1"></i>
                    <p className="card-text">Some quick example text to build on the card title and make up
                      the bulk of the
                      card's content.</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card w-75 mx-auto">
                  <div className="img-wrapper"><img src={'images/person/momina.jpg'} className="d-block w-100" alt="..."/></div>
                  <div className="card-body">
                    <h5 className="card-title">Mehwish Mushtaq</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up
                      the bulk of the
                      card's content.</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card w-75 mx-auto">
                  <div className="img-wrapper"><img src={'images/person/nisma.jpg'} className="d-block w-100" alt="..."/></div>
                  <div className="card-body">
                    <h5 className="card-title">Saima Asad</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up
                      the bulk of the
                      card's content.</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card w-75 mx-auto">
                  <div className="img-wrapper"><img src={'images/person/mewhish.jpg'} className="d-block w-100" alt="..."/></div>
                  <div className="card-body">
                    <h5 className="card-title">Momina Hassan</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up
                      the bulk of the
                      card's content.</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card w-75 mx-auto">
                  <div className="img-wrapper"><img src={'images/person/tahir.jpg'} className="d-block w-100" alt="..."/></div>
                  <div className="card-body">
                    <h5 className="card-title">Tahir Khadim</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up
                      the bulk of the
                      card's content.</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card w-75 mx-auto">
                  <div className="img-wrapper"><img src={'images/person/afnan.jpg'} className="d-block w-100" alt="..."/></div>
                  <div className="card-body">
                    <h5 className="card-title">Afnan Safder</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up
                      the bulk of the
                      card's content.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* END:: Testimonials */}

    </>
  )
}

export default Testimonial
