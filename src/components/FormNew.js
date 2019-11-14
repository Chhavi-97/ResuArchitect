import React,{Component} from 'react'
// import { eventNames } from 'cluster'
import './FormNew.css'

import {Link} from 'react-router-dom';
class FormNew extends Component{

  constructor(props){
    super(props)
    this.state={
      first_name: null,
      last_name:null,
      email:null,
      phone_number:null,
      company:null,
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
                        
                    <div className="form-heading">Hello EveryOne!</div>
                        <div className="form-row">
                            <div className="form-group">
                              <div className="name-group">
                                <div className="form-input">
                                    <label forName="first_name" className="required" >First name</label>
                                    <input type="text" name="first_name" id="first_name" onChange={this.handleInputChange} required/>
                                </div>
                                <div className="form-input">
                                    <label forName="middle/*  */_name" className="required" >Middle name</label>
                                    <input type="text" name="middle_name" id="middle_name" onChange={this.handleInputChange} required/>
                                </div>
                                <div className="form-input">
                                    <label for="last_name" className="required">Last name</label>
                                    <input type="text" name="last_name" id="last_name" onChange={this.handleInputChange} required/>
                                </div>
                              </div>
                                <div className="form-input">
                                    <label for="company" className="required">Company</label>
                                    <input type="text" name="company" id="company" onChange={this.handleInputChange} required/>
                                </div>
                                <div className="details">
                                <div className="form-input">
                                    <label for="email" className="required">Email</label>
                                    <input type="email" name="email" id="email" onChange={this.handleInputChange} required/>
                                </div>
                                <div className="form-input">
                                    <label for="phone_number" className="required">Phone number</label>
                                    <input type="text" name="phone_number" id="phone_number" onChange={this.handleInputChange} required/>
                                </div>
                                </div>


                                
                                <div className="form-input">
                                    <label for="address" className="required">Address For Correspondence</label>
                                    <input type="text" name="address" id="address" onChange={this.handleInputChange} required/>
                                </div>
                                <div className="form-input">
                                    <label for="objective" className="required">Objective</label>
                                    <input type="text" name="objective" id="objective" onChange={this.handleInputChange} required/>
                                </div>
                                <div className="form-input">
                                    <label for="College" className="required">College/University</label>
                                    <input type="text" name="college" id="college" onChange={this.handleInputChange} required/>
                                </div>

                                <b>SSC DETAILS</b><br/>
                                <div className="form-input">
                                    <label for="tenth" className="required">School</label>
                                    <input type="text" name="tenth" id="tenth" onChange={this.handleInputChange} required/>
                                </div>
                                <div className="name-group">
                                <div className="form-input">
                                    <label for="tenboard" className="required">Board</label>
                                    <input type="text" name="tenboard" id="tenboard" onChange={this.handleInputChange} required/>
                                </div>
                                <div className="form-input">
                                    <label for="tengrade" className="required">Grade Point</label>
                                    <input type="text" name="tengrade" id="tengrade" onChange={this.handleInputChange} required/>
                                </div>
                                <div className="form-input">
                                    <label for="tenyear" className="required">YEAR/duration</label>
                                    <input type="text" name="tenyear" id="tenyear" onChange={this.handleInputChange} required/>
                                </div>
                                </div>
                                
                                <b>HSC DETAILS</b><br/>
                                <div className="form-input">
                                    <label for="twelfth" className="required">School</label>
                                    <input type="text" name="twelfth" id="twelfth" onChange={this.handleInputChange} required/>
                                </div>
                                <div className="name-group">

                                <div className="form-input">
                                    <label for="twelboard" className="required">Board</label>
                                    <input type="text" name="twelboard" id="twelboard" onChange={this.handleInputChange} required/>
                                </div>
                                <div className="form-input">
                                    <label for="twelper" className="required">Percentage</label>
                                    <input type="text" name="twelper" id="twelper" onChange={this.handleInputChange} required/>
                                </div>
                                <div className="form-input">
                                    <label for="twelyear" className="required">YEAR/duration</label>
                                    <input type="text" name="twelyear" id="twelyear" onChange={this.handleInputChange} required/>
                                </div>
                                </div>


                                
                                <b>WORK EXPERIENCE</b><br/>
                                <b>1</b><br/>
                                <div className="form-input">
                                    <label for="compname1" className="required">Company Name</label>
                                    <input type="text" name="compname1" id="compname1" onChange={this.handleInputChange} required/>
                                </div>
                                <div className="form-input">
                                    <label for="compdur1" className="required">Duration</label>
                                    <input type="text" name="compdur1" id="compdur1" onChange={this.handleInputChange} required/>
                                </div>
                                <div className="form-input">
                                    <label for="comprole1" className="required">Your Role</label>
                                    <input type="text" name="comprole1" id="comprole1" onChange={this.handleInputChange} required/>
                                </div>
                                <div className="form-input">
                                    <label for="compproject1" className="required">Project</label>
                                    <input type="text" name="compproject1" id="compproject1" onChange={this.handleInputChange} required/>
                                </div>

                                <b>2</b><br/>
                                <div className="form-input">
                                    <label for="compname2" className="">Company Name</label>
                                    <input type="text" name="compname2" id="compname2" onChange={this.handleInputChange} required/>
                                </div>
                                <div className="form-input">
                                    <label for="compdur2" className="">Duration</label>
                                    <input type="text" name="compdur2" id="compdur2" onChange={this.handleInputChange} required/>
                                </div>
                                <div className="form-input">
                                    <label for="comprole2" className="">Your Role</label>
                                    <input type="text" name="comprole2" id="comprole2" onChange={this.handleInputChange} required/>
                                </div>
                                <div className="form-input">
                                    <label for="compproject2" className="">Project</label>
                                    <input type="text" name="compproject2" id="compproject2" onChange={this.handleInputChange} required/>
                                </div>





                                <div className="form-input">
                                    <label for="tskills" className="required">Technical Skills</label>
                                    <input type="text" name="tskills" id="tskills" onChange={this.handleInputChange} required/>
                                </div>
                                <b>ACADEMIC PROJECTS</b>
                                <div className="form-input">
                                    <label for="proj1" className="required">1</label>
                                    <input type="text" name="proj1" id="proj1" onChange={this.handleInputChange} required/>
                                </div>
                                <div className="form-input">
                                    <label for="proj2" className="">2</label>
                                    <input type="text" name="proj2" id="proj2" onChange={this.handleInputChange}/>
                                </div>

                                <b>ACHIEVEMENTS</b><br/>

                                <div className="form-input">
                                    <label for="aone" className="required">1</label>
                                    <input type="text" name="aone" id="aone" onChange={this.handleInputChange} required/>
                                </div>
                                <div className="form-input">
                                    <label for="atwo" className="">2</label>
                                    <input type="text" name="atwo" id="atwo" onChange={this.handleInputChange}/>
                                </div>

                                                            </div>
                                   
                                    
                       <div>
                                
                            </div>
                        </div>
                       
                        <div className="form-submit">
                          <input type="submit" value="Submit" className="submit" id="submit" name="submit" /> 
                            <input type="submit" value="Reset" className="submit" id="reset" name="reset" onClick={this.handleReset} />
                        </div>
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