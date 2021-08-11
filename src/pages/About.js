import React from 'react'
import { Helmet } from 'react-helmet';
import '../App.css'; 

const styleObj = {
    fontSize: 24,
    color: "black",
    textAlign: "center",
    fontWeight: 550,
    fontFamily: 'Montserrat',
    textDecoration: "none",
}

const About = () => {
    return (
        <div>
            <Helmet>
            <title>About | Farooq Syed</title>
            </Helmet>
            <p style={styleObj}>
                Hi! I'm Farooq, a Software Engineer from Chicago, Illinois.
            </p>
            <p style={styleObj}>
                I study Computer Science at the <a class="text-link" href="https://cs.uic.edu/" target="_blank" rel="noreferrer" >
                University of Illinois at Chicago</a> and I graduate in December of 2021. 
            </p>
            <p style={styleObj}>
                In the past, I have worked at <a class="text-link" href="https://www.fidelity.com/" target="_blank" rel="noreferrer">
                Fidelity Investments</a> as a Software Engineer Intern. 
            </p>
            <p style={styleObj}>
                This site was made using <a class="text-link" href="https://reactjs.org/" target="_blank" rel="noreferrer">
                React.js</a>
            </p>
            <br></br>
        </div>
    )
}

export default About
