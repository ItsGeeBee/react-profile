import React from 'react';
// import {Parallax} from 'react-parallax';
import './components.css';
import Bitmoji from '../images/bitmoji.png';

function About() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (

    // Avatar and About me Text
    <div className="about">
      <h3>Who is Grace?</h3> 
        <div className="flex-container-outer">
          <img src={Bitmoji} alt="Itsa me!" className="bitmoji"></img>
            <div id="about-me" className="flex-container-about-me"> With a love of computers from a young age, and a background in customer service, I have learnt how cruical a quaility website can be to a successful business.
            Please explore my current portfolio to see what kind of work I can help bring to a project.  
            </div>
        </div>


  <div className='parallax'>
  <img src="https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages_1200x.png?v=1619126283" alt=""></img>
  <article>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </article>
  </div> 

      {/* <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage='https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages_1200x.png?v=1619126283'
        strength={-100}
    >
        <div style={{ height: '500px' }} />
    </Parallax> */}
    
  </div>
  );
}

export default About;