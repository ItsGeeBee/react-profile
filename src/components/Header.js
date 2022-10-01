import React from 'react';
import Nav from './Nav';
import './components.css';

function Header() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className='header'>
      <Nav />
      <h1>Grace Brown - A Work in Progress</h1>
       <h4>Web Development Portfolio</h4>
    </div>
  );
}
export default Header;