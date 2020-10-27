import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Footer extends Component{
  render(){
    return(
      <React.Fragment>
          <Nav className="footer">
            <NavItem>
              <NavLink className="footer-link" to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="footer-link" to="/index">All the Apartments</NavLink>
            </NavItem>
            { this.props.logged_in &&
              <>
                <NavItem>
                  <a className="footer-link" href="/myapts">My Apartments</a>
                </NavItem>
                <NavItem>
                  <a className="footer-link" href="/new">Add a New Apartment</a>
                </NavItem>
                <NavItem>
                  <a  className="footer-link" href={ this.props.sign_out_route }>Sign Out</a>
                </NavItem>
              </>
            }
            { !this.props.logged_in &&
              <NavItem>
                <a href={ this.props.sign_in_route }>Sign In</a>
              </NavItem>
            }
          </Nav>
      </React.Fragment>
    )
  }
}
export default Footer
