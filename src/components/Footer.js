import React from 'react';
import './components.css';

function Footer() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <footer>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gracelbrown/">
            <i class="fa fa-linkedin-in fa-2xl" aria-hidden="true" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/ItsGeeBee">
                <i class="fab fa-github fa-sm"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="mailto:gracelbrown@hotmail.com">
                <i class="fas fa-envelope fa-sm"></i>
            </a>
        <p>Copyright © ItsGeeBee</p>
        </footer>
  );
}
export default Footer;