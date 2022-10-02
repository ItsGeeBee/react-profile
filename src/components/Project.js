import React from 'react';
import './components.css';
// import '../images';

function Project(props) {
 
  return (
  <div>
    {props.projects.map((project, i) => (
      <div>
      <p key={project.id}>{project.title}</p>
      <p>{project.description}</p>
      <p>{project.technologies}</p>
      <a href={props.repo}>GitHub</a>
      <a href={project.live}>Live Preview</a>
      <img src={project.image} alt=''></img>
    </div>
    ))}
  </div>
  );
}

export default Project;