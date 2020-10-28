import React, { Component } from 'react'
import {
    Jumbotron,
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
  } from 'reactstrap';
import { NavLink } from 'react-router-dom'
// import '../../assets/stylesheets/header.scss'

class Header extends Component{
    constructor(props){
        super(props)
        this.state ={
            collapsed: true
        }
    }
    toggleNavbar = () => {
        this.state.collapsed === true ?
        this.setState({ collapsed: false }) :
        this.setState({ collapsed: true }) 
    }
    render(){
        return(
            <React.Fragment>
                <Jumbotron fluid className="hero">
                    <Container fluid>
                        <h1 className="display-3">Apartment App</h1>
                        <p className="lead">Find your next home.</p>
                    </Container>
                    <div>
                        <Navbar color="faded" light>
                            <NavbarBrand href="/" className="mr-auto"></NavbarBrand>
                            <NavbarToggler onClick={ this.toggleNavbar } className="mr-2"/>
                            <Collapse isOpen={ !this.state.collapsed } navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink to="/">All Apartments</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="/index">Add Apartments</NavLink>
                                    </NavItem>
                                    { this.props.logged_in &&
                                    <>
                                    <NavItem>
                                        <a href="/myapts">My Apartments</a>
                                    </NavItem>
                                    <NavItem>
                                        <a href="/new">Add a New Apartment</a>
                                    </NavItem>
                                    <NavItem>
                                        <a href={ this.props.sign_out_route }>Sign Out</a>
                                    </NavItem>
                                    </>
                                    }
                                    { !this.props.logged_in &&
                                    <NavItem>
                                        <a href={ this.props.sign_in_route }>Sign In</a>
                                    </NavItem>
                                    }
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </div>
                </Jumbotron>

            </React.Fragment>
        )
    }
}

export default Header 