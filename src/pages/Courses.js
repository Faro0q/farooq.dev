import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import '../App.css'; 
import {tableData} from '../data/TableData'
import ReactTooltip from "react-tooltip";

class Courses extends React.Component {
    constructor(props) {
       super(props)
       this.state = { students: [
        {
            "id": "CS 494",
            "name": "Principles of Concurrent Programming",
            "description": "This course examines the theory and practice of writing correct concurrent programs. Subjects covered include multiprocessor architecture, mutual exclusion, wait‐free and lock‐free synchronization, memory models, language support for concurrent programming (spin locks, monitors, thread pools, event loops), concurrency models (shared memory, message passing, actors, fork‐join), and transactional synchronization."
        },
        {
            "id": "CS 494",
            "name": "Principles of Concurrent Programming",
            "description": "This course examines the theory and practice of writing correct concurrent programs. Subjects covered include multiprocessor architecture, mutual exclusion, wait‐free and lock‐free synchronization, memory models, language support for concurrent programming (spin locks, monitors, thread pools, event loops), concurrency models (shared memory, message passing, actors, fork‐join), and transactional synchronization."
        }
      ]}
    }
 
    renderTableHeader() {
       let header = Object.keys(this.state.students[0])
       return header.map((key, index) => {
          return <th key={index}>{key.toUpperCase()}</th>
       })
    }
 
    renderTableData() {
       return this.state.students.map((student, index) => {
          const { id, name, description } = student //destructuring
          return (
             <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{description}</td>
             </tr>
          )
       })
    }
 
    render() {
       return (
          <div>
             <h3 id='title'>All the course work</h3>
             <ReactTooltip place="left" type="success" effect="solid" />
             {/* <ReactTooltip /> */}
             <table id='students'>
                <tbody>
                   <tr>{this.renderTableHeader()}</tr>
                   {this.renderTableData()}
                   {/* <span data-tip="hello">{this.renderTableData()}</span> */}
                </tbody>
             </table>
             <br></br>
          </div>
       )
    }
 }
 
 ReactDOM.render(<Courses />, document.getElementById('root'));
 export default Courses