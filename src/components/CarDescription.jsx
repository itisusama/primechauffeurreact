import React from 'react'

export default function CarDescription({orderText, ...otherProps}) {
  const { 
    headingCard,
    paraCard,
    imageCard
 } = otherProps;
  return (
    <div className='container mt-5'>
        <div className="row">
            <div className={orderText==1 ? 'col-md-6 order-md-1' : 'col-md-6 order-md-2'} data-aos={orderText==1 ? 'fade-right':'fade-left'} data-aos-delay="400" data-aos-duration ="700">
                <h3>{headingCard}</h3>
                <p>{paraCard}</p>
            </div>
            <div className={orderText==2 ? 'col-md-6 order-md-1' : 'col-md-6 order-md-2'} data-aos={orderText==2 ? 'fade-right':'fade-left'} data-aos-delay="400" data-aos-duration ="700" >
            <img src={imageCard} alt="" />
            </div>
        </div>
      
    </div>
  )
}