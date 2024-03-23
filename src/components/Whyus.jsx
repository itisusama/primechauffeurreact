import React, { useEffect, useState } from 'react'

const Whyus = () => {
  const [counters, setCounters] = useState([
    { start: 0, end: 232, duration: 1 },
    { start: 0, end: 421, duration: 1 },
    { start: 0, end: 1364, duration: 1 },
    { start: 0, end: 42, duration: 1 }
  ]);

  useEffect(() => {
    const updateCounters = () => {
      const elements = document.querySelectorAll('.purecounter');

      elements.forEach((element, index) => {
        const { start, end, duration } = counters[index];
        const counter = new PureCounter(element, start, end, duration);
        counter.run();
      });
    };

    updateCounters();
  }, [counters]);

  // PureCounter class for counter animation
  class PureCounter {
    constructor(element, start, end, duration) {
      this.element = element;
      this.start = start;
      this.end = end;
      this.duration = duration * 1000; // Convert seconds to milliseconds
      this.startTime = null;
      this.elapsedTime = null;
    }

    run() {
      this.startTime = Date.now();
      this.update();
    }

    update() {
      this.elapsedTime = Date.now() - this.startTime;
      if (this.elapsedTime >= this.duration) {
        this.element.textContent = this.end;
      } else {
        const value = this.start + (this.end - this.start) * (this.elapsedTime / this.duration);
        this.element.textContent = Math.floor(value);
        requestAnimationFrame(this.update.bind(this));
      }
    }
  }
  return (
    <>
      <section id="why-us">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h3>Why choose us?</h3>
          <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>
        </header>

        <div className="row row-eq-height justify-content-center">

          <div className="col-lg-4 mb-4">
            <div className="card" data-aos="zoom-in" data-aos-delay="100">
              <i className="bi bi-calendar4-week"></i>
              <div className="card-body">
                <h5 className="card-title">Numan Shareef</h5>
                <p className="card-text">Deleniti optio et nisi dolorem debitis. Aliquam nobis est temporibus sunt ab inventore officiis aut voluptatibus.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="card" data-aos="zoom-in" data-aos-delay="200">
              <i className="bi bi-camera-reels"></i>
              <div className="card-body">
                <h5 className="card-title">Tahir Khadim</h5>
                <p className="card-text">Voluptates nihil et quis omnis et eaque omnis sint aut. Ducimus dolorum aspernatur.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="card" data-aos="zoom-in" data-aos-delay="300">
              <i className="bi bi-chat-square-text"></i>
              <div className="card-body">
                <h5 className="card-title">Afnan Safder</h5>
                <p className="card-text">Autem quod nesciunt eos ea aut amet laboriosam ab. Eos quis porro in non nemo ex. </p>
              </div>
            </div>
          </div>

        </div>

        <div className="row counters" data-aos="fade-up" data-aos-delay="100">

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
            <p>Clients</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="421" data-purecounter-duration="1" className="purecounter"></span>
            <p>Projects</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="1364" data-purecounter-duration="1" className="purecounter"></span>
            <p>Hours Of Support</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="42" data-purecounter-duration="1" className="purecounter"></span>
            <p>Hard Workers</p>
          </div>

        </div>

      </div>
    </section>
    </>
  )
}

export default Whyus
