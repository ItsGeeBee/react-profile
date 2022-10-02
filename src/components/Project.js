import React from 'react';
import './components.css';
import Quiz from '../images/quiz.png';
import Password from '../images/password.png';

function Project() {
 
  return (
  <div class="d-flex flex-wrap justify-content-evenly">
      <div>
          <h4>Javascript - Quiz Countdown</h4> 
            <img src={Quiz} className="quiz-image" alt=""></img>
      </div>
      <div>
        <h4>Javascript - Password Generator</h4>
          <img src={Password} className="password-image" alt=""></img>
       </div>
  </div>
  );
}

export default Project;