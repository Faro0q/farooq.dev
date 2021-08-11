import {Link } from 'react-router-dom'
import React from 'react'
import styled, {css} from 'styled-components/macro'
import {menuData} from '../data/MenuData'
import {FaBars} from 'react-icons/fa'

const Nav = styled.nav`
    max-width: 380px;
    width: 100%;
    margin: auto;
    background-color: black;
    text-align: center;
    border-radius: 100px;
    padding-bottom: 19px;
    height: 20px;
`;

const NavLink = css`
    text-decoration: none;
    padding: 0 25px;
    color: white;
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

const NavMenu = styled.a`
    text-decoration: none;
    padding: 0px 15px;
    color: #f1f6ff;
    font-size: 30px;
    font-weight: 700;
    display: inline-block;

    &:hover {
        color: green;
        transform: translateY(2px);
    }
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
            <MenuBars/>
            {/* <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu> */}
            <NavMenu><Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link></NavMenu>
            <NavMenu><Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About</Link></NavMenu>
            <NavMenu><Link to="/courses" style={{ color: 'inherit', textDecoration: 'none' }}>Courses</Link></NavMenu>
            
        </Nav>
    )
}

export default Navbar
