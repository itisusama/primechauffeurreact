import React, { useEffect, useRef } from 'react';

const Counter = () => {
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          count();
          observer.unobserve(entry.target);
        }
      });
    });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    // Cleanup
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  function formatter(value, options) {
    return value.toFixed(options.decimals);
  }

  function count() {
    const elements = document.querySelectorAll('.timer');

    elements.forEach((element) => {
      const countToOptions = {
        from: parseInt(element.dataset.from, 10) || 0,
        to: parseInt(element.dataset.to, 10) || 0,
        speed: parseInt(element.dataset.speed, 10) || 1000,
        refreshInterval: parseInt(element.dataset.refreshInterval, 10) || 100,
        decimals: parseInt(element.dataset.decimals, 10) || 0,
        formatter: formatter,
      };

      element.innerText = countToOptions.from;

      const loops = Math.ceil(countToOptions.speed / countToOptions.refreshInterval);
      const increment = (countToOptions.to - countToOptions.from) / loops;

      let value = countToOptions.from;
      let loopCount = 0;

      function updateTimer() {
        value += increment;
        loopCount++;

        element.innerText = formatter(value, countToOptions);

        if (loopCount >= loops) {
          clearInterval(interval);
          element.innerText = formatter(countToOptions.to, countToOptions);
        }
      }

      const interval = setInterval(updateTimer, countToOptions.refreshInterval);

      // Cleanup on component unmount
      return () => clearInterval(interval);
    });
  }

  return (
    <>
      {/* Counter */}
      <section className="pc-counter" ref={counterRef}>
        <div className="container mt-4 mb-4">
          <div className="col text-center mb-4">
            <h3 className="text-white">Counter Heading</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>

          <div className="row text-center">
            <div className="col-md-3" data-aos="zoom-in" data-aos-delay="800">
              <div className="counter shadow">
                <i className="fa fa-code fa-2xl"></i>
                <h3 className="timer count-title count-number" data-to="100" data-speed="1500"></h3>
                <p className="count-text ">Our Customer</p>
              </div>
            </div>
            <div className="col-md-3" data-aos="zoom-in" data-aos-delay="800">
              <div className="counter shadow">
                <i className="fa fa-coffee fa-2xl"></i>
                <h2 className="timer count-title count-number" data-to="1700" data-speed="1500"></h2>
                <p className="count-text ">Happy Clients</p>
              </div>
            </div>
            <div className="col-md-3" data-aos="zoom-in" data-aos-delay="800">
              <div className="counter shadow">
                <i className="fa fa-lightbulb fa-2xl"></i>
                <h3 className="timer count-title count-number" data-to="11900" data-speed="1500"></h3>
                <p className="count-text ">Project Complete</p>
              </div>
            </div>
            <div className="col-md-3" data-aos="zoom-in" data-aos-delay="800">
              <div className="counter shadow">
                <i className="fa fa-bug fa-2xl"></i>
                <h3 className="timer count-title count-number" data-to="157" data-speed="1500"></h3>
                <p className="count-text ">Coffee With Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Counter */}
    </>
  );
};

export default Counter;