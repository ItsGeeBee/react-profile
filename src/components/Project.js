import React from 'react';
import './components.css';
import Quiz from '../images/quiz.png';
import Password from '../images/password.png';

function Project() {
 
  return (
  <div className="container">
    <h3>Projects</h3>
        <div class="d-flex flex-row col-12">
          <div class="col-4">
            <h4>Javascript - Quiz Countdown</h4> 
            <div>
            {Quiz}
            </div>
          </div>
        <div class="col-4">
        <h4>Javascript - Password Generator</h4>
          <div>
          {Password}
          </div>
        </div>
      </div>
  </div>
  );
}

export default Project;