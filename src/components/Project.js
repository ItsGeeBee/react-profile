import React from 'react';
import './components.css';

function Project() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div>
      <h1>Projects</h1>
      <div class="d-flex">
        <div className="quiz-image">
          <h4>Javascript - Quiz Countdown</h4>
        </div>
      </div>
    </div>
  );
}

export default Project;