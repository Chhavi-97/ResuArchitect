import React from "react";

import './SelectTemplate.css'

function SelectTemplate() {
//  const navStyle ={
//      color:'white'
//  };

  
    return (
      <div className="select-template-container">

          Your Responses have been saved.<br/>
          Select any one of the templates below to generate your resume.

          {/* <div className="layer_1">
            <div className="card_2"></div>
            <div className="card_2"></div>
            <div className="card_2"></div>
            <div className="card_2"></div>
          </div>
          <div className="layer_1">
            <div className="card_2"></div>
            <div className="card_2"></div>
            <div className="card_2"></div>
            <div className="card_2"></div>
          </div> */}
          <div className="helo">
          <div className="hi">
          <img src="https://www.indeed.com/career-advice/gatsby-assets/static/sample-resume-example-695x1024-90ebe69748f183880b6a824037d89274.png" width="100%" height="100%"></img>
          </div>
          <div className="hi">
          <img src="https://resumegenius.com/wp-content/uploads/2019/05/Clean-Resume-Template-Original-1-400x520.png" width="100%" height="100%"></img>
     
          </div>
          <div className="hi">
          <img src="https://www.indeed.com/career-advice/gatsby-assets/static/sample-resume-example-695x1024-90ebe69748f183880b6a824037d89274.png" width="100%" height="100%"></img>
     
          </div>
          </div>
         

      </div>
    );
  }


export default SelectTemplate;