



import { NavLink as ReactLink } from 'react-router-dom'; //used to dynmmically relod the other page
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

/*Navbar includes all the components and pages list*/
const CustomNavbar=(args)=>{
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

    return (

        <div>
        <Navbar 
          className="my-2"
          color="success"
          dark
        
        >
          <NavbarBrand  
        tag={ReactLink} to="/"  > 
         <img
        alt="logo"
        src="/logo192.png"
        style={{
          height: 40,
          width: 40
        }} />  Health Care</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>

              <NavItem>
                <NavLink tag={ReactLink} to="/about" >
                  About
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink tag={ReactLink} to="/login">
                  Login
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink tag={ReactLink} to="/signup">
                  Signup
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink tag={ReactLink} to="/exercise">
                  ExerciseSchedule
                </NavLink>
              </NavItem>

              

              <NavItem>
                <NavLink tag={ReactLink} to="/medlist">
                  MedicationList
                </NavLink>
              </NavItem>


              <UncontrolledDropdown nav inNavbar>

                <DropdownToggle nav caret>
                  More
                </DropdownToggle>

                <DropdownMenu right>

                  <DropdownItem tag={ReactLink} to="/community">CommunityClub</DropdownItem>
                  <DropdownItem tag={ReactLink} to="/healthfacts">HealthFacts</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={ReactLink} to="/notify">Notifications</DropdownItem>

                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>Support</NavbarText>
          </Collapse>
        </Navbar>
      </div>


    )
}
export default CustomNavbar;