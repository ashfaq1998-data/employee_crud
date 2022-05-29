import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ListEmployeeComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         employees : []
      }

      this.addEmployee = this.addEmployee.bind(this);
      this.editEmployee = this.editEmployee.bind(this);
      this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    editEmployee(id){
        this.props.history.push(`/update-employee/${id}`);
    }

    deleteEmployee(id){
        EmployeeService.getEmployees().then((res) =>{
            this.setState({ employees : this.state.employees.filter(employee => employee.id !== id)});
        });
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) =>{
            this.setState({ employees : res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee');
    }

  render() {
    return (
      <div>
          <h2 className='text-center'>Employees</h2>
          
              <button className='btn btn-primary' onClick={this.addEmployee}>Add Employee</button>
          


          <div className='row'>
              <table className='table table-striped table-bordered'>
                  <thead>
                      <tr>
                          <th>Employee FirstName</th>
                          <th>Employee LastName</th>
                          <th>Employee EmailID</th>
                          <th>Actions</th>
                      </tr>
                  </thead>

                  <tbody>
                      {
                          this.state.employees.map(
                              employee => 
                              <tr key={employee.id}>
                                  <td>{employee.firstName}</td>
                                  <td>{employee.lastName}</td>
                                  <td>{employee.emailID}</td>
                                  <td>
                                      <button className='btn btn-info' onClick={() => {this.editEmployee(employee.id)}}>Update</button>
                                      <button className='btn btn-danger' onClick={() => {this.deleteEmployee(employee.id)}} style={{marginLeft: '10px'}}>Delete</button>
                                  </td>

                              </tr>
                          )
                      }
                  </tbody>

              </table>

          </div>
      </div>
    )
  }
}

export default ListEmployeeComponent;
