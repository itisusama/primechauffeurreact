import React, { useEffect } from 'react';
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './assets/frontend/assets/bootstrap/css/bootstrap.min.css';
import './assets/frontend/assets/css/style.css';
import './assets/frontend/assets/css/owl.carousel.min.css';
import Navbar from './components/Navbar';
import Home from './Home';
import Footer from './components/Footer';
import About from './About';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Blog from './Blog';
import Contact from './Contact';
import Fleet from './Fleet';
import AirportService from './AirportService';
import Booking from './Booking';
import SingleBlog from './SingleBlog';
import Wedding from './Wedding';
import Events from './Events';
import Faq from './components/Faq';
import Business from './Business';
import Tour from './Tour';

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/fleet" element={<Fleet/>} />
        <Route path="/airport" element={<AirportService/>} />
        <Route path="/wedding" element={<Wedding/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/business" element={<Business/>} />
        <Route path="/tour" element={<Tour/>} />
        <Route path="/booking" element={<Booking/>} />
        <Route path="/single-blog" element={<SingleBlog/>} />
        <Route path="/faq" element={<Faq/>} />
      </Routes>
      <Footer/>
    </Router>

    <Helmet>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </Helmet>
    </>
  )
}

export default App
