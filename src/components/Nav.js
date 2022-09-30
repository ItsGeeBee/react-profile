import React from 'react';
import './components.css';

function Nav() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/Header">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href='/About'>About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href='/Portfolio'>Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href='/Contact'> Contact </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  );
}
export default Nav;