import React, { Component } from "react";

import './HomePage.css'

class HomePage extends Component {
 

  render() {
    return (
      <div className="HomePage">
       
          <div className="main-container">
            <div>
            <div className="main-heading">
              Your Resume,<br/>
              Made Easy!
            </div>
     
            <div className="main-content">
              ResuArchitect takes the hassle out of resume writing.<br/>
              Choose from several templates and follow easy prompts to <br/>
              create the perfect job-ready resume effortlessly.
            </div>
            </div>
            
          
          <div className="main-image">
            <img src="https://www.freeiconspng.com/uploads/resume-icon-png-4.png" alt="Perfect Resume Exists"width="66%" height="360"/>
          </div>
       </div>

       <div className="main-container2">

       <div className="main-image">
            <img src="https://www.myperfectresume.com/wp-content/uploads/2019/07/monitor_cnt1_skin.svg" alt="Perfect Resume Exists"width="66%" height="360"/>
          </div>
            <div>
            <div className="main-heading">
             Your search finishes here.
            </div>
     
            <div className="main-content">
            Start impressing employers. <br/>
            Download your awesome resume and land the job you are looking for, effortlessly.
            </div>
            </div>
            
          
          
       </div>
      </div>
    );
  }
}

export default HomePage;