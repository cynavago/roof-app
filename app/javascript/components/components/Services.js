import React, { Component } from 'react'
import {
    Card,
    CardDeck,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    Container,
    CardSubtitle
} from 'reactstrap';
// import search from '../../../assets/images/search.png'
import { NavLink } from 'react-router-dom'
// import '../../assets/stylesheets/header.scss'

class Services extends Component{
    render(){
        return(
            <React.Fragment>
            <Container fluid>
                <h2 className="sub-headline">Services</h2>
                <CardDeck>
                <Card>
                        <CardTitle className="card-num">01</CardTitle>
                        <CardBody>
                        <CardSubtitle className="card-subtitle">Search apartments</CardSubtitle>
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardTitle className="card-num">02</CardTitle>
                        <CardBody>
                        <CardSubtitle className="card-subtitle">Create listings</CardSubtitle>
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardTitle className="card-num">03</CardTitle>
                        <CardBody>
                        <CardSubtitle className="card-subtitle">Contact landlords</CardSubtitle>
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </CardText>
                        </CardBody>
                    </Card>
                </CardDeck>
            </Container>
            </React.Fragment>
        )
    }
}

export default Services



