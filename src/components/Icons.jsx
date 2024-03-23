import React from 'react'
import { Link } from 'react-router-dom'

const Icons = () => {
  return (
    <>
      <header className="section-header">
              <h3>Heading</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </header>
            {/* About container */}
            <div className="row about-container">
                <div className="col-lg-6 content order-lg-1 order-2">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <div className="icon-box" data-aos="fade-up" data-aos-delay="800">
                    <div className="icon"><img src={'images/svg/card-checklist.svg'} alt="icon" /></div>
                    <h4 className="title"><Link to='/about'>Eiusmod Tempor</Link></h4>
                    <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                    </div>

                    <div className="icon-box" data-aos="fade-up" data-aos-delay="800">
                    <div className="icon"><img src={'images/svg/brightness-high-fill.svg'} alt="icon" /></div>
                    <h4 className="title"><Link to='/about'>Magni Dolores</Link></h4>
                    <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>

                    <div className="icon-box" data-aos="fade-up" data-aos-delay="800">
                    <div className="icon"><img src={'images/svg/calendar4-week.svg'} alt="icon" /></div>
                    <h4 className="title"><Link to='/about'>Dolor Sitema</Link></h4>
                    <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                    </div>
                </div>
                <div class="col-lg-6 background order-lg-2" data-aos="zoom-in">
            <img src={'images/cars/car3.png'} class="img-fluid" alt=""/>
          </div>
                </div>
                {/* About Container */}
    </>
  )
}

export default Icons
