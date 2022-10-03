import React from 'react';
import Project from './Project';
import './components.css';
import Tradie from '../images/tradie.png';
import Password from '../images/password.png';
import Quiz from '../images/quiz.png';
import Planner from '../images/planner.png'

const projects = [
  {   
      id:0,
      title: 'Check-A-Tradie', 
      description: 'Check-A-Tradie allows a tradesperson looking for work to display their services, skills and certification so that a consumer can browse a list of options for a service they need completing. A business owner can sign up and register their business, edit their dashboard and profile to showcase what they offer. Our application also allows consumers to be able to browse the selection of businesses and select one based on the job they require to be completed.', 
      technologies: 'Node.js, Express.js, MySQL, Sequelize, Javascript, Handlebars.js, Bootstrap, npm, Heroku', 
      repo: 'https://github.com/ItsGeeBee/check-a-tradie', 
      live: 'https://pacific-waters-66801.herokuapp.com/',
      image: Tradie
  },
  {   
      id:1,
      title: 'Password Generator', 
      description: 'An application that an employee can use to generate a random password based on criteria they have selected', 
      technologies: 'HTML, CSS, Javascript', 
      repo: 'https://github.com/ItsGeeBee/password-generator-resbumisson', 
      live: 'https://itsgeebee.github.io/password-generator-resbumisson/',
      image: Password
  },
  {   
    id:2,
    title: 'Quiz Countdown', 
    description: 'A timed coding quiz with multiple-choice questions', 
    technologies: 'HTML, CSS, Javascript', 
    repo: 'https://github.com/ItsGeeBee/js-countdown-quiz', 
    live: 'https://itsgeebee.github.io/js-countdown-quiz/',
    image: Planner
  },
  {
    id:3,
    title: 'Work Day Planner', 
    description: 'A simple calendar application that allows a user to save events for each hour of the day', 
    technologies: 'HTML, CSS, Javascript, Moment.js', 
    repo: 'https://github.com/ItsGeeBee/work-day-scheduler', 
    live: 'https://itsgeebee.github.io/work-day-scheduler/',
    image: Quiz
  }
];


function Portfolio() {
  return (
    <div>
       <h3>Projects</h3>
      < Project projects={projects}/>
    </div>
  );
}
export default Portfolio;