import React from 'react'
// Data
import SiteNavbarData from '../../Data/SiteNavbarData'
// CSS
import './Navbar.css'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
// Components

const SiteNavbar = () => {

    const myNavLinks = SiteNavbarData.map((link, index) => (
        <Nav.Link href={link.link} key={index}>{link.page}</Nav.Link>
    ))

    return (
        
        <Navbar bg="dark" variant="dark" fixed="top">
            <div className="menu-section">
                <Nav className="mr-auto">
                    {myNavLinks}
                </Nav>
            </div>
            <div className="menu-section">
                <Navbar.Brand>
                    <Link to="/" className="nav-logo">
                        Coach Potato
                    </Link>
                </Navbar.Brand>
            </div>
            <div className="menu-section">
                <Form inline>
                    <FormControl type="text" placeholder="Search here.." className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </div>
        </Navbar>
    )
}

export default SiteNavbar