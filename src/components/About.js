import React from 'react';
// import {Parallax} from 'react-parallax';
import './components.css';
import Bitmoji from '../images/bitmoji.png';

function About() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (

    // Avatar and About me Text
    <div className="pt-5 flex-wrap">
    <div className="wrapper justify-content-center">
          <div className="card">
          <h2>
          <span className="enclosed">Who's</span>Grace?
          </h2>
        </div>
    </div> 
      <div className="d-flex flex-wrap justify-content-center pt-5 align-items-center">
          <div className="col-6 col-sm-3">
            <img src={Bitmoji} alt="Itsa me!" className="img-fluid"></img>
          </div>  
          <div className="col-6 col-sm-3"> 
            <p className="border border-4 border-dark rounded-end text">With a love of computers from a young age, and a background in customer service, I have learnt how cruical a quaility website can be to a successful business.
              Please explore my current portfolio to see what kind of work I can help bring to a project.</p>
            </div>
      </div>
    </div>
  );
}

export default About;