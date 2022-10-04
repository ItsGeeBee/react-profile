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
    <nav className="navbar fixed-top">
        <div class="container-fluid">
         <ul className="nav">
            <li className="nav-item">
                <Link to="/About" className={currentPage.name === 'about' ? 'nav-active': 'nav-normal'} onClick={() => setCurrentPage(pages[0])}>About Me</Link>
            </li>
            <li>
                <Link to="/Portfolio" className={currentPage.name === 'portfolio' ? 'nav-active': 'nav-normal'} onClick={() => setCurrentPage(pages[1])}>Portfolio</Link>
            </li>
            <li>
                <Link to="/Resume" className={currentPage.name === 'resume' ? 'nav-active': 'nav-normal'} onClick={() => setCurrentPage(pages[2])}>Resume</Link>
            </li>
            <li>
                <Link to="/Contact" className={currentPage.name === 'contact' ? 'nav-active': 'nav-normal'} onClick={() => setCurrentPage(pages[3])}>Contact</Link>
            </li>
        </ul>
       </div> 
    </nav >
);
}; 
export default Nav;