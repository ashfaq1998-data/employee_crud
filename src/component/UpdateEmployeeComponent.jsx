import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
  
  
    constructor(props) {
        super(props)
      
        this.state = {
          id : this.props.match.params.id,
          firstName : '',
          lastName : '',
          emailID : ''
        }
  
  
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeemailIDHandler = this.changeemailIDHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeebyId(this.state.id).then((res) =>{
            let employee = res.data;
            this.setState({firstName : employee.firstName, lastName : employee.lastName, emailID : employee.emailID});
        })
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName : event.target.value});
    }
  
    changeLastNameHandler = (event) => {
        this.setState({lastName : event.target.value});
    }
  
  
    changeemailIDHandler = (event) => {
        this.setState({emailID : event.target.value});
    }
  
    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName : this.state.firstName, lastName : this.state.lastName, emailID : this.state.emailID};
        EmployeeService.updateEmployee(employee, this.state.id).then((res) => {
          this.props.history.push('/employees');
        })
        
    }
  
    cancel(){
        this.props.history.push('/employees');
    }
  
  
    render() {
        return (
          <div>
              <div className='container'>
                <div className='row'>
                  <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h3 className='text-center'>Update Employee</h3>
                    <div className='card-body'>
                      <form>
                        <div className='form-group'>
                          <label>First Name :</label>
                          <input placeholder='firstname' name='firstName' className='form-control' value={this.state.firstName} onChange={this.changeFirstNameHandler}></input>
                        </div>
                        <div className='form-group'>
                          <label>Last Name :</label>
                          <input placeholder='lastname' name='lastName' className='form-control' value={this.state.lastName} onChange={this.changeLastNameHandler}></input>
                        </div>
                        <div className='form-group'>
                          <label>Email :</label>
                          <input placeholder='emailId' name='emailID' className='form-control' value={this.state.emailID} onChange={this.changeemailIDHandler}></input>
                        </div>
    
                        <button className='btn btn-success' onClick={this.updateEmployee}>Save</button>
                        <button className = 'btn btn-danger' style={{marginLeft : '10px'}} onClick={this.cancel}>Cancel</button>
                      </form>
                    </div>
    
                  </div>
                </div>
              </div>
          </div>
        )
    }
}

export default UpdateEmployeeComponent
