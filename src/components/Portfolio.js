import React from 'react';
import Project from './Project';
import './components.css';

function Portfolio() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div>
      < Project/>
    </div>
  );
}
export default Portfolio;