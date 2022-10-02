import React from 'react';
import Project from './Project';
import './components.css';

const projects = [
  {
      name: 'Check-A-Tradie', 
      description: 'Check-A-Tradie allows a tradesperson looking for work to display their services, skills and certification so that a consumer can browse a list of options for a service they need completing. A business owner can sign up and register their business, edit their dashboard and profile to showcase what they offer. Our application also allows consumers to be able to browse the selection of businesses and select one based on the job they require to be completed.', 
      technologies: ['Node.js', 'Express.js', 'MySQL', 'Sequelize', 'Javascript', 'Handlebars.js', 'Bootstrap', 'npm', 'Heroku'], 
      sourceCode: 'https://github.com/ItsGeeBee/check-a-tradie', 
      livePreview: 'https://pacific-waters-66801.herokuapp.com/',
      image: '/assets/projectImages/check_a_tradie.png'
  }
];


function Portfolio() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div>
       <h3>Projects</h3>
      < Project projects={projects}/>
    </div>
  );
}
export default Portfolio;