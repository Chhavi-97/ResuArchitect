import React,{Component} from 'react'
// import { eventNames } from 'cluster'
import './Form.css'
class Form extends Component{

  constructor(props){
    super(props)
    this.state={
      fullName: null
    }
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

  render(){
    const{fullName}=this.state

    return(
      <div>
       
        
        <div className="form-container">
        <form onSubmit={this.handleSubmit}>
        <div>FILL IN YOUR DETAILS</div>
          <p>FirstName:<input type='text' placeholder='FirstName' name='fname' onChange={this.handleInputChange}/></p>
          <p>LastName:<input type='text' placeholder='LasttName' name='lname' onChange={this.handleInputChange}/></p>
          <p>E-Mail:<input type='email' placeholder='Email' name='email' onChange={this.handleInputChange}/></p>
          <p><button>Send My Info</button></p>       
        </form>
        </div>
      </div>
    )
  }
}

export default Form;