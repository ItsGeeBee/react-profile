import React from 'react';
import {Parallax} from 'react-parallax';
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
        <div className="wrapper justify-content-center">
          <div className="card">
          <h1>
          <span className="enclosed">Skill</span>Set
          </h1>
        </div>
        </div>
        <div>
            <h3>Languages:</h3>
            <p>JavaScript</p>
        </div>
        <div>
            <h3>Frameworks/Libraries</h3>
            <p>Node.js</p>
            <p>Express.js</p>
            <p>React.js</p>
            <p>Bootstrap</p>
        </div>
        <div>
            <h3>Databases</h3>
            <p>MySQL</p>
            <p>MongoDB</p>
        </div>
        <div>
            <h3>Tools</h3>
            <p>Git</p>
            <p>GitHub</p>
            <p>Webpack</p>
            <p>DevTools</p>
        </div>
      {/* <div>       
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage='https://images.unsplash.com/photo-1483232539664-d89822fb5d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2VhbWxlc3MlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
        strength={-200}
    >
        <div style={{ height: '500px' }} />
    </Parallax>
    </div> */}
  </div>
  );
}

export default About;