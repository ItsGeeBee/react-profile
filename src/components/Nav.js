import React from 'react';
import './components.css';
import Header from'./Header.js';
import {Link} from 'react-router-dom'

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
                <Link to="/About" className={currentPage.name === 'about' ? 'nav-active': ''} onClick={() => setCurrentPage(pages[0])}>About Me</Link>
            </li>
            <li>
                <Link to="/Portfolio" className={currentPage.name === 'portfolio' ? 'nav-active': ''} onClick={() => setCurrentPage(pages[1])}>Portfolio</Link>
            </li>
            <li>
                <Link to="/Resume" className={currentPage.name === 'resume' ? 'nav-active': ''} onClick={() => setCurrentPage(pages[2])}>Resume</Link>
            </li>
            <li>
                <Link to="/Contact" className={currentPage.name === 'contact' ? 'nav-active': ''} onClick={() => setCurrentPage(pages[3])}>Contact</Link>
            </li>
        </ul>
    </nav >
);
}; 
export default Nav;