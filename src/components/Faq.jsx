import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const Faq = () => {
    useEffect(() => {
        const handleAccordionClick = (event) => {
          // Toggle the 'fa-plus' and 'fa-minus' classes on the button's child icon
          const icon = event.currentTarget.querySelector('.fas');
          if (icon.classList.contains('fa-plus')) {
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
          } else {
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
          }
    
          // Toggle the collapse element associated with the button
          const targetId = event.currentTarget.getAttribute('data-target');
          const targetCollapse = document.querySelector(targetId);
          if (targetCollapse.classList.contains('show')) {
            targetCollapse.classList.remove('show');
          } else {
            targetCollapse.classList.add('show');
          }
        };
    
        // Get all buttons with the class 'btn-link'
        const accordionButtons = document.querySelectorAll('.btn-link');
    
        accordionButtons.forEach((button) => {
          button.addEventListener('click', handleAccordionClick);
        });
    
        // Clean up event listeners on component unmount
        return () => {
          accordionButtons.forEach((button) => {
            button.removeEventListener('click', handleAccordionClick);
          });
        };
      }, []); // Empty dependency array ensures that the effect runs once on mount
    
  return (
    <>
      <div className="container mb-5 mt-5 pc-faq-section">
      <div className="title pt-3 d-flex justify-content-center mb-3">
        <h2 className="position-relative ms-4">FAQ</h2>
      </div>
      <div className="container">
        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis atque animi quae vel doloribus magni adipisci explicabo, placeat quos quisquam a rerum alias totam suscipit ab consequatur possimus eius temporibus rem vero nisi tempore magnam voluptates? Dicta, earum.</p>
      </div>

      <div className="row">
        {/* Section 1 - Your Order */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header" id="livingRoomHeader">
              <h2 className="mb-0">
                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#livingRoomCollapse" aria-expanded="true" aria-controls="livingRoomCollapse">
                  Your Order
                </button>
              </h2>
            </div>
            <div id="livingRoomCollapse" className="collapse show" aria-labelledby="livingRoomHeader" data-parent="#faqAccordion">
              <div className="card-body">
                {/* FAQ Item 1 - Where is my order? */}
                <div className="faq-item d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">
                    <button className="btn btn-link plus-minus-btn" type="button" data-toggle="collapse" data-target="#faq1Collapse" aria-expanded="true" aria-controls="faq1Collapse">
                      Where is my order?
                    </button>
                  </h5>
                  <button className="btn btn-link plus-minus-btn" type="button" data-toggle="collapse" data-target="#faq1Collapse" aria-expanded="true" aria-controls="faq1Collapse">
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                <div id="faq1Collapse" className="collapse" aria-labelledby="faq1Header" data-parent="#livingRoomCollapse">
                  <p>Once your order has been shipped, you will receive an email with a tracking number. You can use this tracking number to monitor the status of your delivery.</p>
                </div>

                {/* FAQ Item 2 - How can I make a complaint? */}
                <div className="faq-item d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">
                    <button className="btn btn-link plus-minus-btn" type="button" data-toggle="collapse" data-target="#faq2Collapse" aria-expanded="true" aria-controls="faq2Collapse">
                      How can I make a complaint?
                    </button>
                  </h5>
                  <button className="btn btn-link plus-minus-btn" type="button" data-toggle="collapse" data-target="#faq2Collapse" aria-expanded="true" aria-controls="faq2Collapse">
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                <div id="faq2Collapse" className="collapse" aria-labelledby="faq2Header" data-parent="#livingRoomCollapse">
                  <p>If you have any issues or complaints about your order, please contact our customer service team through our <Link to='/contact'>contact page</Link> . We will be happy to assist you.</p>
                </div>

                {/* Add more FAQ items as needed */}
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 - Delivery */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header" id="deliveryHeader">
              <h2 className="mb-0">
                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#deliveryCollapse" aria-expanded="true" aria-controls="deliveryCollapse">
                  Delivery
                </button>
              </h2>
            </div>
            <div id="deliveryCollapse" className="collapse show" aria-labelledby="deliveryHeader" data-parent="#faqAccordion">
              <div className="card-body">
                {/* FAQ Item 1 - Delivery Options */}
                <div className="faq-item d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">
                    <button className="btn btn-link plus-minus-btn" type="button" data-toggle="collapse" data-target="#faqDelivery1Collapse" aria-expanded="true" aria-controls="faqDelivery1Collapse">
                      Delivery Options
                    </button>
                  </h5>
                  <button className="btn btn-link plus-minus-btn" type="button" data-toggle="collapse" data-target="#faqDelivery1Collapse" aria-expanded="true" aria-controls="faqDelivery1Collapse">
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                <div id="faqDelivery1Collapse" className="collapse" aria-labelledby="faqDelivery1Header" data-parent="#deliveryCollapse">
                  <p>We offer various delivery options, including standard and express delivery. Choose the one that suits you best.</p>
                </div>

                {/* FAQ Item 2 - Tracking Orders */}
                <div className="faq-item d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">
                    <button className="btn btn-link plus-minus-btn" type="button" data-toggle="collapse" data-target="#faqDelivery2Collapse" aria-expanded="true" aria-controls="faqDelivery2Collapse">
                      Tracking Orders
                    </button>
                  </h5>
                  <button className="btn btn-link plus-minus-btn" type="button" data-toggle="collapse" data-target="#faqDelivery2Collapse" aria-expanded="true" aria-controls="faqDelivery2Collapse">
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                <div id="faqDelivery2Collapse" className="collapse" aria-labelledby="faqDelivery2Header" data-parent="#deliveryCollapse">
                  <p>Once your order is shipped, you will receive a tracking number to monitor the delivery status. You can use this tracking number on our website to track your order.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Row for Payment and Refunds & Returns */}
      <div className="row mt-4">
        {/* Section 3 - Payment */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header" id="paymentHeader">
              <h2 className="mb-0">
                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#paymentCollapse" aria-expanded="true" aria-controls="paymentCollapse">
                  Payment
                </button>
              </h2>
            </div>
            <div id="paymentCollapse" className="collapse show" aria-labelledby="paymentHeader" data-parent="#faqAccordion">
              <div className="card-body">
                {/* FAQ Item 1 - Payment Methods */}
                <div className="faq-item d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">
                    <button className="btn btn-link plus-minus-btn" type="button" data-toggle="collapse" data-target="#faqPayment1Collapse" aria-expanded="true" aria-controls="faqPayment1Collapse">
                      Payment Methods
                    </button>
                  </h5>
                  <button className="btn btn-link plus-minus-btn" type="button" data-toggle="collapse" data-target="#faqPayment1Collapse" aria-expanded="true" aria-controls="faqPayment1Collapse">
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                <div id="faqPayment1Collapse" className="collapse" aria-labelledby="faqPayment1Header" data-parent="#paymentCollapse">
                  <p>We accept various payment methods, including credit cards, PayPal, and other online payment services.</p>
                </div>

                {/* FAQ Item 2 - Payment Security */}
                <div className="faq-item d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">
                    <button className="btn btn-link plus-minus-btn" type="button" data-toggle="collapse" data-target="#faqPayment2Collapse" aria-expanded="true" aria-controls="faqPayment2Collapse">
                      Payment Security
                    </button>
                  </h5>
                  <button className="btn btn-link plus-minus-btn" type="button" data-toggle="collapse" data-target="#faqPayment2Collapse" aria-expanded="true" aria-controls="faqPayment2Collapse">
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                <div id="faqPayment2Collapse" className="collapse" aria-labelledby="faqPayment2Header" data-parent="#paymentCollapse">
                  <p>Your payment information is secure. We use encryption technology to protect your personal and financial information.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4 - Refunds & Returns */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header" id="returnsHeader">
              <h2 className="mb-0">
                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#returnsCollapse" aria-expanded="true" aria-controls="returnsCollapse">
                  Refunds & Returns
                </button>
              </h2>
            </div>
            <div id="returnsCollapse" className="collapse show" aria-labelledby="returnsHeader" data-parent="#faqAccordion">
              <div className="card-body">
                {/* FAQ Item 1 - Return Policy */}
                <div className="faq-item d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">
                    <button className="btn btn-link plus-minus-btn" type="button" data-toggle="collapse" data-target="#faqReturns1Collapse" aria-expanded="true" aria-controls="faqReturns1Collapse">
                      Return Policy
                    </button>
                  </h5>
                  <button className="btn btn-link plus-minus-btn" type="button" data-toggle="collapse" data-target="#faqReturns1Collapse" aria-expanded="true" aria-controls="faqReturns1Collapse">
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                <div id="faqReturns1Collapse" className="collapse" aria-labelledby="faqReturns1Header" data-parent="#returnsCollapse">
                  <p>Our return policy allows you to return items within 30 days of purchase. Please review our return policy for more details.</p>
                </div>

                {/* FAQ Item 2 - Refund Process */}
                <div className="faq-item d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">
                    <button className="btn btn-link plus-minus-btn" type="button" data-toggle="collapse" data-target="#faqReturns2Collapse" aria-expanded="true" aria-controls="faqReturns2Collapse">
                      Refund Process
                    </button>
                  </h5>
                  <button className="btn btn-link plus-minus-btn" type="button" data-toggle="collapse" data-target="#faqReturns2Collapse" aria-expanded="true" aria-controls="faqReturns2Collapse">
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                <div id="faqReturns2Collapse" className="collapse" aria-labelledby="faqReturns2Header" data-parent="#returnsCollapse">
                  <p>Our refund process is designed to ensure a smooth and timely return of funds in case of a return. Refunds are typically processed within 5 business days.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Faq
