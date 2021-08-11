import {Link } from 'react-router-dom'
import React from 'react'
import styled, {css} from 'styled-components/macro'
import {menuData} from '../data/MenuData'
import {FaBars} from 'react-icons/fa'

const Nav = styled.nav`
    max-width: 430px;
    width: 100%;
    margin: auto;
    background-color: #010409;
    text-align: center;
    border-radius: 100px;
    padding-bottom: 19px;
`;

const NavLink = css`
    text-decoration: none;
    padding: 0 25px;
    color: #f1f6ff;
    font-size: 30px;
    font-weight: 700;
    display: inline-block
`;

const MenuBars = styled(FaBars)`
    padding: 1rem 2rem;
    display: none;
    
    @media screen and (max-width: 250px){
        display: block;
        cursor: pointer;
        position: absolute;
        transform: translate(-20%, -35%);
    }
`;

const NavMenu = styled.div`
    @media screen and (max-width: 250px){
        display: none;
    }
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
    
`;



const Navbar = () => {
    return (
        <Nav>
            <MenuBars />
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
        </Nav>
    )
}

export default Navbar
