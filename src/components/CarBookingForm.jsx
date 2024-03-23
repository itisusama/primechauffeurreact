import React, { useState } from 'react';

const CarBookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    pickupDate: '',
    dropOffDate: '',
    pickupTime: '',
    passengers: '',
    location: '',
    destination: '',
    createAccount: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <section className="container mt-4">
      <h2>Book a Car</h2>
      <hr className="w-75 text-red" />
      <form action="#" method="post">
        {/* @csrf - CSRF token */}
        {/* Row */}
        <div className="row">
          {/* left */}
          <div className="col-lg-6">
            {/* First Name */}
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Your First Name" required onChange={handleChange} />
            </div>
            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" name="email" placeholder="Your Email Address" required onChange={handleChange} />
            </div>
            {/* Pickup Date */}
            <div className="mb-3">
              <label htmlFor="pickupDate" className="form-label">Pickup Date</label>
              <input type="date" className="form-control" id="pickupDate" name="pickupDate" onChange={handleChange} />
            </div>
            {/* Timings */}
            <div className="mb-3">
              <label htmlFor="pickupTime" className="form-label">Select Timings</label>
              <input type="time" className="form-control" id="pickupTime" name="pickupTime" placeholder="Select The Timings" onChange={handleChange} />
            </div>
            {/* Location */}
            <div className="mb-3">
              <label htmlFor="location" className="form-label">Pick a Location</label>
              <select className="form-select" aria-label="Default select example" id="location" name="location" onChange={handleChange}>
                <option selected disabled>Location</option>
                <option value="1">Location 1</option>
                <option value="2">Location 2</option>
                <option value="3">Location 3</option>
                <option value="4">Location 4</option>
              </select>
            </div>
            {/* Create Account */}
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="createAccount" name="createAccount" onChange={handleChange} />
              <label className="form-check-label" htmlFor="createAccount">
                Create Account
              </label>
            </div>
          </div>
          {/* Right */}
          <div className="col-lg-6">
            {/* Last Name */}
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Your Last Name" required onChange={handleChange} />
            </div>
            {/* Phone Number */}
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="text" className="form-control" id="phone" name="phone" placeholder="Your Phone Number" required onChange={handleChange} />
            </div>
            {/* Drop off Date */}
            <div className="mb-3">
              <label htmlFor="dropOffDate" className="form-label">Drop off Date</label>
              <input type="date" className="form-control" id="dropOffDate" name="dropOffDate" onChange={handleChange} />
            </div>
            {/* Passengers */}
            <div className="mb-3">
              <label htmlFor="passengers" className="form-label">Number of Passengers</label>
              <select className="form-select" aria-label="Default select example" id="passengers" name="passengers" onChange={handleChange}>
                <option selected disabled>Passengers</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            {/* Destination */}
            <div className="mb-3">
              <label htmlFor="destination" className="form-label">Destinations</label>
              <select className="form-select" aria-label="Default select example" id="destination" name="destination" onChange={handleChange}>
                <option selected disabled>Destination</option>
                <option value="1">Location 1</option>
                <option value="2">Location 2</option>
                <option value="3">Location 3</option>
                <option value="4">Location 4</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CarBookingForm;
