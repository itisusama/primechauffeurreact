import React from 'react'

const Newsletter = () => {
  return (
    <>
      <div className="p-5 bg-light">
      <h3 className="text-center">Subscribe to Newsletter</h3>
      <form action="#" method="post">
        {/* @csrf */}
        <div className="mb-3 mt-4">
          <div className="pc-newsletter">
            <div>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email" />
            </div>
            <div className="pc-newsletter-btn">
              <button className="btn">Subscribe</button>
            </div>
          </div>
        </div>
      </form>
    </div>
    </>
  )
}

export default Newsletter
