import React, { useState } from 'react';
import './components.css';


function Nav() {

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
   
    setIsActive(current => !current);
  };

return (
    <nav>
        <ul>
            <li>
                <a href="/" className={isActive ? 'nav-active': ''} onClick={handleClick}>About Me</a>
            </li>
            <li>
                <a href="/Portfolio" className={isActive ? 'nav-active': ''} onClick={handleClick}>Portfolio</a>
            </li>
            <li>
                <a href="/Resume" className={isActive ? 'nav-active': ''} onClick={handleClick}>Resume</a>
            </li>
            <li>
                <a href="/Contact" className={isActive ? 'nav-active': ''} onClick={handleClick}>Contact</a>
            </li>
        </ul>
    </nav >
);
}; 
export default Nav;