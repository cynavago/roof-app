// Apartments have: a street designation, a city, state, a manager's name, manager's contact email, monthly rental price, bedrooms, bathrooms, and whether they allow pets
import React, { Component } from 'react'
import { Button, Card, CardTitle, Col, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { Redirect } from 'react-router-dom';

class ApartmentShow extends Component{
  constructor(props){
    super(props)
      this.state = {
      success: false
    }
  }

  handleClick = (e) => {
    // e.preventDefault()
    this.props.deleteApt(this.props.apartment.id);
    this.setState({ success: true })
    console.log("Apartment deleted")
  }

  render(){
    const {
      logged_in,
      sign_in_route,
      sign_out_route,
      current_user, 
      apartment
    } = this.props
    return(
      <React.Fragment>
        <h3>One Apartment</h3>
        <Row id="cards">
            <Col md="6">
              <Card body>
                <CardTitle>
                  <h5>Street Address:</h5>
                  <p>
                    { apartment.street }
                    <br />
                    { apartment.city }, { apartment.state }
                  </p>
                  <p>Manager name: { apartment.manager }</p>
                  <p>Manager email: { apartment.email }</p>
                  <p>Monthly rent: ${ apartment.price }</p>
                  <p>Bedrooms: { apartment.bedrooms }</p>
                  <p>Bathrooms: { apartment.bathrooms }</p>
                  <p>Pets Allowed: { apartment.pets }</p>
                  <p>User Id: { apartment.user_id }</p>

                  <NavLink to={"/index"}>
                    <Button color="secondary">
                      Back to All Apartments
                    </Button>
                  </NavLink>

                  { logged_in && current_user.id === apartment.user_id &&
                    <>
                      <NavLink to = {`/edit/${this.props.apartment.id}`}>
                        <Button>Edit Apartment</Button>
                      </NavLink>
                      <Button onClick = {this.handleClick}>
                        Delete Apartment
                      </Button>
                    </>
                  }

                </CardTitle>
              </Card>
            </Col>
        </Row>
        { this.state.success && <Redirect to="/myapts"/>}
      </React.Fragment>
    )
  }
}
export default ApartmentShow
