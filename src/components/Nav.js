import React from 'react';
import './components.css';
import Header from'./Header.js';

function Nav(props) {

  const {
    pages = [],
    setCurrentPage,
    currentPage
} = props;

return (
    <nav>
        <ul>
            <li>
                <a href="#about" className={currentPage.name === '/About' ? 'nav-active': ''} onClick={() => setCurrentPage(pages[0])}>About Me</a>
            </li>
            <li>
                <a href="#portfolio" className={currentPage.name === '/Portfolio' ? 'nav-active': ''} onClick={() => setCurrentPage(pages[1])}>Portfolio</a>
            </li>
            <li>
                <a href="#resume" className={currentPage.name === '/Resume' ? 'nav-active': ''} onClick={() => setCurrentPage(pages[2])}>Resume</a>
            </li>
            <li>
                <a href="#contact" className={currentPage.name === '/Contact' ? 'nav-active': ''} onClick={() => setCurrentPage(pages[3])}>Contact</a>
            </li>
        </ul>
    </nav >
);
}; 
export default Nav;