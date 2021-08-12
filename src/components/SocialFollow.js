import React from "react";
import styled from 'styled-components/macro'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faReadme,
    faTelegramPlane
} from "@fortawesome/free-brands-svg-icons";

const Social = styled.a`
    margin: 0 1rem;
    transition: transform 250ms;
    display: inline-block;
    color: black;
    &:hover {
        transform: translateY(-2px);
        color: green;
    }
`;

const SocialWrapper = styled.div`
    padding-top: -800px;
    padding-bottom: 1px;
    width: 300px;
    margin: auto;
    text-align: center;
`;



export default function SocialFollow() {
  return (
        <SocialWrapper>
            <Social href="https://www.linkedin.com/in/faro0q/"
            className="linkedin social" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </Social>

            <Social href="https://github.com/Faro0q"
            className="github social" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
            </Social>

            <Social href="/resume"
            type="application/pdf" className="resume social" rel="noreferrer">
            <FontAwesomeIcon icon={faReadme} size="2x" />
            </Social>

            <Social href="mailto:syed@farooq.dev"
            className="youtube social" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTelegramPlane} size="2x" />
            </Social>
            <h3>Farooq Syed</h3>
         </SocialWrapper>
  );
}