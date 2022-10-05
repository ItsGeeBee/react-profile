import React from 'react';
import './components.css';
// import '../images';

function Project(props) {
 
  return (
  <div className="wrap">
    {props.projects.map((project, i) => (
    <div className="a-box">
        <div className="img-container">
        <div className="img-inner">
        <div className="inner-skew">
        <img src={project.image} alt=''></img>
        </div>
      </div>
    </div>
    <div className="text-container">
        <h4 key={project.id}>{project.title}</h4>
        <div>
          <p>{project.description}</p>
          <p>{project.technologies}</p>
          <a href={project.repo}>GitHub</a>
          <br/>
          <a href={project.live}>Live Preview</a>
        </div>
    </div>
    </div>
  ))}
</div>
  )};


export default Project;