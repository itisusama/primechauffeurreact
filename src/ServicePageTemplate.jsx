import React from 'react'
import CarDescription from './components/CarDescription';
import Banner from './components/Banner';
import Whyus from './components/Whyus';
import Icons from './components/Icons';
import { Link } from 'react-router-dom';

const ServicePageTemplate = ({pageName, breadCrumb, ...otherProps}) => {
  const { 
    paraOne,
    imageOne,
    headingOne,
    paraTwo,
    cardHeading,
    cardPara,
    cardImage
 } = otherProps;
  return (
    <>
      {/* Banner */}
      {/* You need to implement the Banner component separately */}
      <Banner
      pageTitle={pageName}
      bannerText={paraOne}
      breadcrumb={breadCrumb}
      showCarsBreadcrumb={false}
      />
      {/* Service Top component */}
      <div className="jumbotron jumbotron-fluid feature" id="feature-first">
        <div className="container my-5">
            <div className="row justify-content-between text-center text-md-left">
            <div data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" className="col-md-6">
                <h2 className="font-weight-bold">{headingOne}</h2>
                <p className="my-4">{paraTwo}</p>
                <Link to="/fleet" className="btn my-4 font-weight-bold atlas-cta cta-blue">Learn More</Link>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" data-aos-once="true" className="col-md-6 align-self-center">
                <img src={imageOne} alt="Take a look inside" className="mx-auto d-block" />
            </div>
            </div>
        </div>
        </div>

              
      {/* Main content */}
      <main id="main">
        {/* About Section */}
        <section id="about">
          <div className="container" data-aos="fade-up">
            
            <Icons/>
            {/* Additional Content */}
            {/* You need to implement the additional content separately */}
            <CarDescription 
            orderText={2}
            headingCard={cardHeading}
            paraCard= {cardPara}
            imageCard={cardImage}
            />
            <CarDescription 
            orderText={1}
            headingCard={cardHeading}
            paraCard= {cardPara}
            imageCard={cardImage}
            />
          </div>
        </section>
        {/* End About Section */}

        {/* Why Us Component */}
        {/* You need to implement the WhyUs component separately */}
        <Whyus/>
      </main>
      {/* End #main */}
    </>
  )
}

export default ServicePageTemplate
