import React from "react";
import { Link } from "react-router-dom";

const CarCards = ({carCardsData}) => {
  return (
    <>
      <section className="mt-4 pc-carCardsSlider-mobile">
        <div className="title pt-3 d-flex justify-content-center mb-3">
          <h2 className="position-relative ms-4">Our Cars</h2>
        </div>
        <div className="container">
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis atque animi quae vel doloribus magni adipisci
            explicabo, placeat quos quisquam a rerum alias totam suscipit ab
            consequatur possimus eius temporibus rem vero nisi tempore magnam
            voluptates? Dicta, earum.
          </p>
        </div>

        <div className="owl-carousel pc-owl-center container">
          {/* Car 1 */}
          {carCardsData.map((data, index) => (
            <div className="item" key={index}>
              {/* Card */}
              <div className="card" data-aos="fade-up" data-aos-delay="1000">
                <img
                  className="card-img-top"
                  src={data.image}
                  alt="Card image"
                  style={{ width: "100%" }}
                />
                {/* Price */}
                <div className="pc-carPriceBadge px-3 py-2">
                  <span>From £{data.rent}</span>
                </div>
                {/* Price */}
                <div className="card-body">
                  <h5 className="card-title">{data.carName}</h5>
                  <hr className="w-25 text-danger" />
                  <p className="card-text">
                    <span className="d-block">
                      <i className="fa-solid fa-check"></i> {data.pessengers}{" "}
                      Passengers{" "}
                    </span>
                    <span className="d-block">
                      <i className="fa-solid fa-check"></i> {data.bags} Bags{" "}
                    </span>
                  </p>
                  <div className="pc-newsletter-btn mt-4 mx-auto">
                     <Link to='/fleet' className='btn text-white'> Book Now</Link>
                  </div>
                </div>
              </div>
              {/* Card */}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CarCards;