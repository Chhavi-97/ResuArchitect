import React,{Component} from 'react'
import './FormNew.css'
import {Link} from 'react-router-dom';

class FormNew extends Component{

  constructor(props){
    super(props)
    this.state={
      name: null,
      contact:null,
      mailid:null,
      linkedin:null,
      github:null,
      address:null,
      aboutme:null,
      yearcollege:null,
      degreecollege:null,
      uniname:null,
      collegename:null,
      collegecgpa:null,
      yearXII:null,
      boardXII:null,
      schoolXII:null,
      schoolXIIpercent:null,
      yearX:null,
      boardX:null,
      schoolX:null,
      schoolXpercent:null,
      i2startdate:null,
      i2enddate:null,
      i2organization:null,
      i2projectname:null,
      i2technologies:null,
      i2mentor:null,
      i2description:null,
      i1startdate:null,
      i1enddate:null,
      i1organization:null,
      i1projectname:null,
      i1technologies:null,
      i1mentor:null,
      i1description:null,
      mj1startdate:null,
      mj1enddate:null,
      mj1institution:null,
      mj1technologies:null,
      mj1mentor:null,
      mj1description:null,
      mn2startdate:null,
      mn2enddate:null,
      mn2institution:null,
      mn2technologies:null,
      mn2mentor:null,
      mn2description:null,
      mn1startdate:null,
      mn1enddate:null,
      mn1institution:null,
      mn1technologies:null,
      mn1mentor:null,
      mn1description:null,
      t1startdate:null,
      t1enddate:null,
      t1institution:null,
      t1technologies:null,
      t1mentor:null,
      t1description:null,
      certification1:null,
      certification2:null,
      aa1:null,
      aa2:null,
      aa3:null,
      ea1:null,
      ea2:null,
      ea3:null,
      technicalskills:null,
      softskills:null,

    
    }
    this.baseState=this.state
  }

  handleSubmit=(event)=>{
    event.preventDefault()
    console.log(this.state)
  }
  handleInputChange=(event)=>{
    event.preventDefault()
    console.log(event)
    console.log(event.target.name)
    console.log(event.target.value)
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  handleReset=()=>{
    this.setState(this.baseState)
      
  }

  render(){
    

    return(
        
        <div className="main">

        <div className="container">
            <div className="signup-content">
               
                <div className="signup-form">
                    <form onSubmit={this.handleSubmit} method="POST" className="register-form" id="register-form">
                        
                    <div className="form-heading">FILL IN YOUR DETAILS TO GET STARTED</div> <br/>
                        <div className="form-row">
                            <div className="form-group">
                                <div className="name-group">
                                <div className="form-input">
                                    <label htmlFor="name" className="required" >Name</label>
                                    <input type="text" name="name" id="name" onChange={this.handleInputChange} required/>
                                </div>  

                                <div className="form-input">
                                    <label htmlFor="contact" className="required">Contact</label>
                                    <input type="text" name="contact" id="contact" onChange={this.handleInputChange} required/>
                                </div>

                                <div className="form-input">
                                    <label htmlFor="mailid" className="required">Email</label>
                                    <input type="email" name="mailid" id="mailid" onChange={this.handleInputChange} required/>
                                </div>
                                </div>

                                <div className="name-group">
                                <div className="form-input">
                                    <label htmlFor="linkedin" className="required">LinkedIn</label>
                                    <input type="text" name="linkedin" id="linkedin" onChange={this.handleInputChange} required/>
                                </div>

                                <div className="form-input">
                                    <label htmlFor="github" className="required">GitHub</label>
                                    <input type="text" name="github" id="github" onChange={this.handleInputChange} required/>
                                </div>
                            
                                
                               
                                                               
                                <div className="form-input">
                                    <label htmlFor="address" className="required">Address</label>
                                    <input type="text" name="address" id="address" onChange={this.handleInputChange} required/>
                                </div>

                                </div>
                                <div className="form-input">
                                    <label htmlFor="aboutme" className="required">About Me</label>
                                    <input type="text" name="aboutme" id="aboutme" onChange={this.handleInputChange} required/>
                                </div>
                                <b>ACADEMIC BACKGROUND</b><br/>
                                <b>BACHELORS</b><br/>
                                <div className="name-group">
                                <div className="form-input">
                                    <label htmlFor="yearcollege" className="required">Year </label>
                                    <input type="text" name="yearcollege" id="yearcollege" onChange={this.handleInputChange} required/>
                                </div>

                                <div className="form-input">
                                    <label htmlFor="degreecollege" className="required">Qualification </label>
                                    <input type="text" name="degreecollege" id="degreecollege" onChange={this.handleInputChange} required/>
                                </div>

                                <div className="form-input">
                                    <label htmlFor="uniname" className="required">University</label>
                                    <input type="text" name="uniname" id="uniname" onChange={this.handleInputChange} required/>
                                </div>

                                <div className="form-input">
                                    <label htmlFor="collegename" className="required">College</label>
                                    <input type="text" name="collegename" id="collegename" onChange={this.handleInputChange} required/>
                                </div>
                                <div className="form-input">
                                    <label htmlFor="collegecgpa" className="required">CGPA</label>
                                    <input type="text" name="collegecgpa" id="collegecgpa" onChange={this.handleInputChange} required/>
                                </div>
                                </div>
                                <b>SSC DETAILS</b><br/>
                                <div className="name-group">
                                <div className="form-input">
                                    <label htmlFor="yearXII" className="required">Year </label>
                                    <input type="text" name="yearXII" id="yearXII" onChange={this.handleInputChange} required/>
                                </div>

                                <div className="form-input">
                                    <label htmlFor="boardXII" className="required">Board</label>
                                    <input type="text" name="boardXII" id="boardXII" onChange={this.handleInputChange} required/>
                                </div>

                                <div className="form-input">
                                    <label htmlFor="schoolXII" className="required">School</label>
                                    <input type="text" name="schoolXII" id="schoolXII" onChange={this.handleInputChange} required/>
                                </div>
                                <div className="form-input">
                                    <label htmlFor="schoolXIIpercent" className="required">Percentage</label>
                                    <input type="text" name="schoolXIIpercent" id="schoolXIIpercent" onChange={this.handleInputChange} required/>
                                </div>
                                </div>
                                
                                <b>HSC DETAILS</b><br/>
                                <div className="name-group">
                                <div className="form-input">
                                    <label htmlFor="yearX" className="required">Year</label>
                                    <input type="text" name="yearX" id="yearX" onChange={this.handleInputChange} required/>
                                </div>

                                <div className="form-input">
                                    <label htmlFor="boardX" className="required">Board</label>
                                    <input type="text" name="boardX" id="boardX" onChange={this.handleInputChange} required/>
                                </div>

                                <div className="form-input">
                                    <label htmlFor="schoolX" className="required">School</label>
                                    <input type="text" name="schoolX" id="schoolX" onChange={this.handleInputChange} required/>
                                </div>
                                <div className="form-input">
                                    <label htmlFor="schoolXpercent" className="required">Percentage</label>
                                    <input type="text" name="schoolXpercent" id="schoolXpercent" onChange={this.handleInputChange} required/>
                                </div>
                                </div>


                                
                                <b>WORK EXPERIENCE</b><br/>
                                <b>INTERNSHIP 1</b><br/>
                                <div className="name-group">
                                <div className="form-input">
                                    <label htmlFor="i2startdate" className="required">Start Date</label>
                                    <input type="date" name="i2startdate" id="i2startdate" onChange={this.handleInputChange} required/>
                                </div>
                               
                                <div className="form-input">
                                    <label htmlFor="i2enddate" className="required">End Date</label>
                                    <input type="date" name="i2enddate" id="i2enddate" onChange={this.handleInputChange} required/>
                                </div>
                                <div className="form-input">
                                    <label htmlFor="i2organization" className="required">Organization</label>
                                    <input type="text" name="i2organization" id="i2organization" onChange={this.handleInputChange} required/>
                                </div>
                                </div>
                                <div className="name-group">
                                <div className="form-input">
                                    <label htmlFor="i2projectname" className="required">Project Name</label>
                                    <input type="text" name="i2projectname" id="i2projectname" onChange={this.handleInputChange} required/>
                                </div>

                               
                                <div className="form-input">
                                    <label htmlFor="i2technologies" className="required">Technologies</label>
                                    <input type="text" name="i2technologies" id="i2technologies" onChange={this.handleInputChange} required/>
                                </div>
                                
                                <div className="form-input">
                                    <label htmlFor="i2mentor" className="required">Mentor</label>
                                    <input type="text" name="i2mentor" id="i2mentor" onChange={this.handleInputChange} required/>
                                </div>
                                </div>
                                <div className="form-input">
                                    <label htmlFor="i2description" className="required">Description</label>
                                    <input type="text" name="i2description" id="i2description" onChange={this.handleInputChange} required/>
                                </div>
                               
                                <b>INTERNSHIP 2</b><br/>
                                <div className="name-group">
                                <div className="form-input">
                                    <label htmlFor="i1startdate" className="required">Start Date</label>
                                    <input type="date" name="i1startdate" id="i1startdate" onChange={this.handleInputChange} required/>
                                </div>
                               
                                <div className="form-input">
                                    <label htmlFor="i1enddate" className="required">End Date</label>
                                    <input type="date" name="i1enddate" id="i1enddate" onChange={this.handleInputChange} required/>
                                </div>
                                <div className="form-input">
                                    <label htmlFor="i1organization" className="required">Organization</label>
                                    <input type="text" name="i1organization" id="i1organization" onChange={this.handleInputChange} required/>
                                </div>
                                </div>
                                <div className="name-group">
                                <div className="form-input">
                                    <label htmlFor="i1projectname" className="required">Project Name</label>
                                    <input type="text" name="i1projectname" id="i1projectname" onChange={this.handleInputChange} required/>
                                </div>

                               
                                <div className="form-input">
                                    <label htmlFor="i1technologies" className="required">Technologies</label>
                                    <input type="text" name="i1technologies" id="i1technologies" onChange={this.handleInputChange} required/>
                                </div>
                                
                                <div className="form-input">
                                    <label htmlFor="i1mentor" className="required">Mentor</label>
                                    <input type="text" name="i1mentor" id="i1mentor" onChange={this.handleInputChange} required/>
                                </div>
                                </div>
                                <div className="form-input">
                                    <label htmlFor="i1description" className="required">Description</label>
                                    <input type="text" name="i1description" id="i1description" onChange={this.handleInputChange} required/>
                                </div>
                               
                                <b>PROJECTS</b><br/>
                                <b>MAJOR 1</b><br/>
                                <div className="name-group">
                                <div className="form-input">
                                    <label htmlFor="mj1startdate" className="required">Start Date</label>
                                    <input type="date" name="mj1startdate" id="mj1startdate" onChange={this.handleInputChange} required />
                                </div>
                                <div className="form-input">
                                    <label htmlFor="mj1enddate" className="required">End Date</label>
                                    <input type="date" name="mj1enddate" id="mj1enddate" onChange={this.handleInputChange} required/>
                                </div>
                               
                                </div>
                                <div className="name-group">
                               
                                <div className="form-input">
                                    <label htmlFor="mj1institution" className="required">Institution</label>
                                    <input type="text" name="mj1institution" id="mj1institution" onChange={this.handleInputChange} required/>
                                </div>
                                <div className="form-input">
                                    <label htmlFor="mj1technologies" className="required">Technologies</label>
                                    <input type="text" name="mj1technologies" id="mj1technologies" onChange={this.handleInputChange} required/>
                                </div>
                                <div className="form-input">
                                    <label htmlFor="mj1mentor" className="required">Mentor</label>
                                    <input type="text" name="mj1mentor" id="mj1mentor" onChange={this.handleInputChange} required />
                                </div>
                                </div>
                               
                                <div className="form-input">
                                    <label htmlFor="mj1description" className="required">Description</label>
                                    <input type="text" name="mj1description" id="mj1description" onChange={this.handleInputChange} required />
                                </div>

                                <b>MINOR 2</b><br/>
                                <div className="name-group">
                                <div className="form-input">
                                    <label htmlFor="mn2startdate" className="required">Start Date</label>
                                    <input type="date" name="mn2startdate" id="mn2startdate" onChange={this.handleInputChange} required/>
                                </div>
                                <div className="form-input">
                                    <label htmlFor="mn2enddate" className="required">End Date</label>
                                    <input type="date" name="mn2enddate" id="mn2enddate" onChange={this.handleInputChange} required/>
                                </div>
                               
                                </div>
                                <div className="name-group">
                               
                                <div className="form-input">
                                    <label htmlFor="mn2institution" className="required">Institution</label>
                                    <input type="text" name="mn2institution" id="mn2institution" onChange={this.handleInputChange} required />
                                </div>
                                <div className="form-input">
                                    <label htmlFor="mn2technologies" className="required">Technologies</label>
                                    <input type="text" name="mn2technologies" id="mn2technologies" onChange={this.handleInputChange} required />
                                </div>
                                <div className="form-input">
                                    <label htmlFor="mn2mentor" className="required">Mentor</label>
                                    <input type="text" name="mn2mentor" id="mn2mentor" onChange={this.handleInputChange} required/>
                                </div>
                                </div>
                               
                                <div className="form-input">
                                    <label htmlFor="mn2description" className="required">Description</label>
                                    <input type="text" name="mn2description" id="mn2description" onChange={this.handleInputChange} required/>
                                </div>

                                <b>MINOR 1</b><br/>
                                <div className="name-group">
                                <div className="form-input">
                                    <label htmlFor="mn1startdate" className="required">Start Date</label>
                                    <input type="date" name="mn1startdate" id="mn1startdate" onChange={this.handleInputChange} required/>
                                </div>
                                <div className="form-input">
                                    <label htmlFor="mn1enddate" className="required">End Date</label>
                                    <input type="date" name="mn1enddate" id="mn1enddate" onChange={this.handleInputChange} required />
                                </div>
                               
                                </div>
                                <div className="name-group">
                               
                                <div className="form-input">
                                    <label htmlFor="mn1institution" className="required">Institution</label>
                                    <input type="text" name="mn1institution" id="mn1institution" onChange={this.handleInputChange} required/>
                                </div>
                                <div className="form-input">
                                    <label htmlFor="mn1technologies" className="required">Technologies</label>
                                    <input type="text" name="mn1technologies" id="mn1technologies" onChange={this.handleInputChange} required/>
                                </div>
                                <div className="form-input">
                                    <label htmlFor="mn1mentor" className="required">Mentor</label>
                                    <input type="text" name="mn1mentor" id="mn1mentor" onChange={this.handleInputChange} required/>
                                </div>
                                </div>
                               
                                <div className="form-input">
                                    <label htmlFor="mn1description" className="required">Description</label>
                                    <input type="text" name="mn1description" id="mn1description" onChange={this.handleInputChange} required/>
                                </div>


                                <b>TRAININGS UNDERTAKEN</b><br/>

                                <div className="name-group">
                                <div className="form-input">
                                    <label htmlFor="t1startdate" className="required">Start Date</label>
                                    <input type="date" name="t1startdate" id="t1startdate" onChange={this.handleInputChange} required />
                                </div>
                                <div className="form-input">
                                    <label htmlFor="t1enddate" className="required">End Date</label>
                                    <input type="date" name="t1enddate" id="t1enddate" onChange={this.handleInputChange} required/>
                                </div>
                               
                                </div>
                                <div className="name-group">
                               
                                <div className="form-input">
                                    <label htmlFor="t1institution" className="required">Institution</label>
                                    <input type="text" name="t1institution" id="t1institution" onChange={this.handleInputChange} required/>
                                </div>
                                <div className="form-input">
                                    <label htmlFor="t1technologies" className="required">Technologies</label>
                                    <input type="text" name="t1technologies" id="t1technologies" onChange={this.handleInputChange} required/>
                                </div>
                                <div className="form-input">
                                    <label htmlFor="t1mentor" className="required">Mentor</label>
                                    <input type="text" name="t1mentor" id="t1mentor" onChange={this.handleInputChange} required/>
                                </div>
                                </div>
                               
                                <div className="form-input">
                                    <label htmlFor="t1description" className="required">Description</label>
                                    <input type="text" name="t1description" id="t1description" onChange={this.handleInputChange} required />
                                </div>

                                <b>CERTIFICATION</b><br/>
                                <div className="form-input">
                                    <label htmlFor="certification1" className="required"> 1.</label>
                                    <input type="text" name="certification1" id="certification1" onChange={this.handleInputChange} required/>
                                </div>
                                <div className="form-input">
                                    <label htmlFor="certification2" className="required"> 2.</label>
                                    <input type="text" name="certification2" id="certification2" onChange={this.handleInputChange} required/>
                                </div>


                                <b> ACADEMIC ACHIEVEMENTS(TOP 3)</b><br/>

                                <div className="form-input">
                                    <label htmlFor="aa1" className="required">1</label>
                                    <input type="text" name="aa1" id="aa1" onChange={this.handleInputChange} required/>
                                </div>
                                <div className="form-input">
                                    <label htmlFor="aa2" className="required">2</label>
                                    <input type="text" name="aa2" id="aa2" onChange={this.handleInputChange} required/>
                                </div>
                                <div className="form-input">
                                    <label htmlFor="aa3" className="required">3</label>
                                    <input type="text" name="aa3" id="aa3" onChange={this.handleInputChange}required/>
                                </div>

                                 <b> EXTRA ACHIEVEMENTS(TOP 3)</b><br/>

                                <div className="form-input">
                                    <label htmlFor="ea1" className="required">1</label>
                                    <input type="text" name="ea1" id="ea1" onChange={this.handleInputChange} required/>
                                </div>
                                <div className="form-input">
                                    <label htmlFor="ea2" className="required">2</label>
                                    <input type="text" name="ea2" id="ea2" onChange={this.handleInputChange} required/>
                                </div>
                                <div className="form-input">
                                    <label htmlFor="ea3" className="required">3</label>
                                    <input type="text" name="ea3" id="ea3" onChange={this.handleInputChange} required/>
                                </div>

                                <b> SKILLS</b><br/>
                                <div className="form-input">
                                    <label htmlFor="technicalskills" className="required">Technical Skills</label>
                                    <input type="text" name="technicalskills" id="technicalskills" onChange={this.handleInputChange} required/>
                                </div>
                                <div className="form-input">
                                    <label htmlFor="softskills" className="required">Soft Skills</label>
                                    <input type="text" name="softskills" id="softskills" onChange={this.handleInputChange} required/>
                                </div>


                        </div>
                                   
                                    
                       <div>
                                
                            </div>
                        </div>
                       
                        <div className="form-submit">
                          <input type="submit" value="Submit" className="submit" id="submit" name="submit" /> 
                            <input type="submit" value="Reset" className="submit" id="reset" name="reset" onClick={this.handleReset} required/>
                        </div>
                         

                         <h3>CHECK THE ENTRIES MADE BY YOU AND CLICK NEXT TO CONTINUE</h3>


                         NAME : {this.state.name}
                         CONTACT: {this.state.contact}

                        
                        <div> <Link to="/selectTemplate"><button>Next >></button></Link></div>
                    </form>
                </div>
            </div>
        </div>

    </div>
      
       
        
      
    )
  }
}

export default FormNew;