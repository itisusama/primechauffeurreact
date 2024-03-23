import Carousel from 'react-bootstrap/Carousel';

function CarouselSmallScreen({carCardsData}) {
  return (
    <>
    <section className="mt-4 pc-carCardsSlider-mobile">
    <div className="title pt-3 d-flex justify-content-center mb-3">
          <h2 className="position-relative ms-4">Our Cars</h2>
        </div>
        <div className="container">
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis atque animi quae vel doloribus magni adipisci explicabo, placeat quos quisquam a rerum alias totam suscipit ab consequatur possimus eius temporibus rem vero nisi tempore magnam voluptates? Dicta, earum.
          </p>
        </div>
    
    <Carousel>
      {carCardsData.map((car, index) => (
        <Carousel.Item key={index}>
          <CarCards
            image={car.image}
            rent={car.rent}
            carName={car.carName}
            passengers={car.passengers}
            bags={car.bags}
          />
        </Carousel.Item>
      ))}
    </Carousel>
    </section>
    </>
  );
}

export default CarouselSmallScreen;

const CarCards = ({index,image,rent,carName,pessengers,bags}) => {
  return (
    <>
      
        

        <div className="owl-carousel pc-owl-center container">
          {/* Car 1 */}
          
            <div className="item" key={index}>
              {/* Card */}
              <div className="card" data-aos="fade-up" data-aos-delay="1000">
                <img className="card-img-top" src={image} alt="Card image" style={{ width: '100%' }} />
                {/* Price */}
                <div className="pc-carPriceBadge px-3 py-2"><span>From £{rent}</span></div>
                {/* Price */}
                <div className="card-body">
                  <h5 className="card-title">{carName}</h5>
                  <hr className="w-25 text-danger" />
                  <p className="card-text">
                    <span className="d-block"><i className="fa-solid fa-check"></i> {pessengers} Passengers </span>
                    <span className="d-block"><i className="fa-solid fa-check"></i> {bags} Bags </span>
                  </p>
                  <div className="pc-newsletter-btn mt-4 mx-auto">
                    <button className="btn" onClick={() => redirectToFleet()}>Book Now</button>
                  </div>
                </div>
              </div>
              {/* Card */}
            </div>
        
        </div>
    
    </>
  );
}

// Function to handle redirection to the fleet page
const redirectToFleet = () => {
  window.location.href = '/fleet';
}