import React  from 'react';
import './components.css';


function Nav() {

  return (
    <nav id="nav" class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="tab" aria-current="page" href='/About'>About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="tab" aria-current="page" href='/Portfolio'>Portfolio</a>
          </li>
          <li class="nav-item">
          <a class="nav-link active" data-bs-toggle="tab" aria-current="page" href="/Resume">Resume</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="tab" aria-current="page" href='/Contact'> Contact </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>



  );
}
export default Nav;