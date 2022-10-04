import React from 'react';
import './components.css';
import Header from'./Header.js';

function Nav(props) {

  const {
    pages = [],
    setCurrentPage,
    currentPage
} = props;

console.log(props);
return (
    <nav>
        <ul>
            <li>
                <a href="/About" className={currentPage.name === 'about' ? 'nav-active': ''} onClick={() => setCurrentPage(pages[0])}>About Me</a>
            </li>
            <li>
                <a href="/Portfolio" className={currentPage.name === 'portfolio' ? 'nav-active': ''} onClick={() => setCurrentPage(pages[1])}>Portfolio</a>
            </li>
            <li>
                <a href="/Resume" className={currentPage.name === 'resume' ? 'nav-active': ''} onClick={() => setCurrentPage(pages[2])}>Resume</a>
            </li>
            <li>
                <a href="/Contact" className={currentPage.name === 'contact' ? 'nav-active': ''} onClick={() => setCurrentPage(pages[3])}>Contact</a>
            </li>
        </ul>
    </nav >
);
}; 
export default Nav;