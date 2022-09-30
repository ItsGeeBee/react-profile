import React from 'react';
import {Parallax} from 'react-parallax';
import './components.css';

function About() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="about">
      <h1>Who is Grace?</h1>
        <strong>
          With a love of computers from a young age, and a background in customer service, 
          I have learnt how cruical a quaility website can be to a successful business.
          Please explore my current portfolio to see what kind of work I can help bring to a project. 
        </strong>
        <h2 className="mt-5">Skills</h2>
            <div className="content">
              <div>
                <strong>Languages</strong>
                  <li>JavaScript</li>
                    
              </div>
            </div>        
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage='https://images.unsplash.com/photo-1483232539664-d89822fb5d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2VhbWxlc3MlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
        strength={-200}
    >
        <div style={{ height: '500px' }} />
    </Parallax>
    </div>
  );
}

export default About;