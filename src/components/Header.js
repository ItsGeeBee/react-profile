import React from 'react';
import Nav from './Nav';
import './components.css';


function Header(props) {

  
  return (
    <div className='header'>
      <Nav
      pages={props.pages}
      setCurrentPage={props.setCurrentPage}
      currentPage={props.currentPage}
      />
      <h1>Grace Brown - A Work in Progress</h1>
       <h4>Web Development Portfolio</h4>
    </div>
  );
}
export default Header;