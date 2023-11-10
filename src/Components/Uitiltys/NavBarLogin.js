import React from 'react'
import { Navbar, Container, FormControl, Nav } from 'react-bootstrap'

const NavBarLogin = () => {
  return (
            <Navbar className="sticky-top navbar"  variant="dark" expand="sm">
                <Container>
                    <Navbar.Brand>
                        <a href='/'>
                        <i class="fa-brands fa-shopify fa-2xl" style={{ color: "white" }}></i>
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <FormControl
                            type="search"
                            placeholder="ابحث..."
                            className="me-2 w-100 text-center"
                            aria-label="Search"/>
                        
                        <Nav className="me-auto">
                            <Nav.Link href='/login'
                                className="nav-text d-flex mt-3 justify-content-center"
                                style={{ color: "black" }}>
                                <i class="fa-regular fa-circle-user fa-xl mt-3 ms-1"></i>
                                <p style={{ color: "black" , fontSize:"18px"}}>دخول</p>
                            </Nav.Link>

                            <Nav.Link href='/cart'
                                className="nav-text d-flex mt-3 justify-content-center"> 
                                <i class="fa-solid fa-cart-shopping mt-3 ms-1 fa-xl"
                                 style={{ color: "black" }}></i> 
                                <p style={{ color: "black", fontSize:"18px" }}>العربه</p>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }

export default NavBarLogin
