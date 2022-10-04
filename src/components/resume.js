import React from 'react';
import './components.css';

function Resume() {


  return (
   <div> 
    <h3>Tricks Up My Sleeve</h3>

    {/* Resume link to google drive to view and download */}
    <div className="flex-row mb-3">
    <div className="p-5">
            <button className="learn-more">
            <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
            </span>
            <a href="https://docs.google.com/document/d/1es11ZmIRBTnWoeXDgfH9l8CfJVNcvV135jVvDPn2J6g/edit?usp=sharing"><span className="button-text">View Resume</span></a>
            </button>
    </div>        
    <div className="break"></div>
    <div className="p-2">
    <div className="wrapper justify-content-center">
          <div className="card">
          <h1>
          <span className="enclosed">Skill</span>Set
          </h1>
        </div>
        </div>
        <div>
            <h3>Languages:</h3>
            <p>JavaScript</p>
        </div>
        <div>
            <h3>Frameworks/Libraries</h3>
            <p>Node.js | Express.js | React.js | Bootstrap | Moment.js</p>
        </div>
        <div>
            <h3>Databases</h3>
            <p>MySQL | MongoDB</p>
        </div>
        <div>
            <h3>Tools</h3>
            <p>Git | GitHub | Webpack | DevTools</p>
        </div>

   </div>
   </div>
</div>
)
}
export default Resume;