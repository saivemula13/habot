import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Dropdown } from 'react-bootstrap'
import { DropDownArrowSvg } from '../../../Assets/SvgExport/SvgExport'
import "./NavBarComponent.scss"


export const NavBarComponent = () => {
    return (
        <Navbar expand="lg" className='bg-white'>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={require("../../../Assets/Images/habot-logo.jpg")} className="img-fluid" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav className='gap-3'>
                        <Nav.Link href="#home">Find Suppliers</Nav.Link>
                        <span className='position-relative pe-2 me-1'>
                            <span className='position-absolute top-50 end-0 translate-middle-y p-0 d-flex align-items-center'>
                                <DropDownArrowSvg />
                            </span>
                            <NavDropdown title="Find Service Tags" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </span>
                        <Nav.Link className='login-btn px-4' href="#login">Login / Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
