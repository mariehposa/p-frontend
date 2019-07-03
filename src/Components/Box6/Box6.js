import React from 'react';
import { Slide } from 'react-slideshow-image';
import savory from './img/savory.jpg';
import construction from './img/construction.jpg';
import restaurant from './img/restaurant.jpg';
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: false
}
 
const Slideshow = () => {
    return (
      <div>
        <div className="bg-white br1">  
          <section className="cf w-100-l w-90-m w-100 pa5-l mb4 ml3-m pa3 pa0-m">
            <p className="f3 black-100 helvetica lh-title">Upcoming Projects</p>
            <Slide {...properties}>
              <div className="each-slide">
                <div>
                  <img src={savory} alt="" />
                  <div className="f4 b mt3 mb2 helvetica">Savory</div>
                  <div>2019</div>
                </div>
              </div>
              <div className="each-slide">
                <div>
                  <img src={construction} alt="" />
                  <div className="f4 b mt3 mb2 helvetica">Construction Site</div>
                  <div>2019</div>
                </div>
              </div>
              <div className="each-slide">
                <div>
                  <img src={restaurant} alt="" />
                  <div className="f4 b mt3 mb2 helvetica">Chen Restaurant</div>
                  <div>2019</div>
                </div>
              </div>
            </Slide>
          </section>
       </div> 
      </div>    
    )
}

export default Slideshow