import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Project from './components/Project';
import Resume from './components/Resume';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const pages = [
    { name: "about" },
    { name: "portfolio" },
    { name: "resume" },
    { name: "contact" },
  ];

  const [currentPage, setCurrentPage] = useState(pages[0]);


  return (
    <div className="App">
      < BrowserRouter>
      < Header />
      < Routes>
      < Route path='/About' element={< About setCurrentPage={setCurrentPage} currentPage={currentPage} pages={pages} />}/>
      < Route path='/Portfolio' element={< Portfolio/>} />
      < Route path='/Contact' element={< Contact/>} />
      < Route path='/Resume' element={< Resume/>} />
      < Route path='/' element={< About />} />
      </Routes>
      < Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
