import React, { Component } from 'react'
import '../App.css'; 
import tableData from '../data/TableJson.json'
import ReactTooltip from "react-tooltip";

class Courses extends Component {

    render() {
       return (
            <div>
                <h3 id='title'> This is a list of some of the courses I've taken at the <a class="text-link" href="https://cs.uic.edu/" target="_blank" rel="noreferrer" >
                University of Illinois at Chicago</a></h3>
                <table id='students'>
                    <tr>
                        <th>Course Id</th>
                        <th>Course Name</th>
                    </tr>
                    {tableData.map((detail, index) => {
                        return <tr>
                            <td data-tip={detail.attributes.description}>{detail.id}</td>
                            <td data-tip={detail.attributes.description}>{detail.attributes.name}</td>
                        </tr>
                        
                    })}
                    <ReactTooltip className="tooltip" multiline={true} effect="solid"/>
                </table>
                <br></br>
            </div>
       )
    }
 }
 
 export default Courses

 