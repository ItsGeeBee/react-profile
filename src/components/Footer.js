import React from 'react';
import './components.css';

function Footer() {
  
  return (
    <footer>
      <div className="break"></div>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gracelbrown/">
            <i className ="fa fa-linkedin-in fa-2xl" aria-hidden="true" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/ItsGeeBee">
                <i className ="fab fa-github fa-sm"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="mailto:gracelbrown@hotmail.com">
                <i className ="fas fa-envelope fa-sm"></i>
            </a>
        <div>Copyright © ItsGeeBee</div>
        </footer>
  );
}
export default Footer;