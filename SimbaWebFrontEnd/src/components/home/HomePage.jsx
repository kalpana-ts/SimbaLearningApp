import React from "react";

import slide1 from '../../images/slide1.png';
import slide2 from '../../images/slide2.png';

import HomeAboutPage from './AboutPage';


function HomePage() {
    
  return (

        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="home-left">
                <span className="home-left-title">Remote Learning with SIMBA</span><br/><br/>
                <p>Meaningful learning can happen anywhere. We’re here to support students, teachers, and families with remote learning.</p>
              
                <button className="btn-home" onClick="http://localhost:3000">Sign Up</button>
              
              </div>
            </div>
    
            <div className="col-md-7">
              <div id="carouselExampleInterval"
                className="carousel slide"
                data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active" data-interval="400">
                    <img
                      src={slide1}
                      style={{height: '500px'}}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item" data-interval="2000">
                    <img
                      src={slide2}
                      style={{height: '500px'}}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleInterval"
                  role="button"
                  data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleInterval"
                  role="button"
                  data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
      

          {/* ==================== About us ======================  */}
          <br/><br/><br/><br/>

          <div id="about" htmlFor="about">
              <HomeAboutPage />
              <br/><br/><br/><br/>
          </div>
          
        </div>    
  )
}

export default HomePage;