import React, { Component } from 'react'
import {
    Card,
    CardDeck,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    Container,
    CardSubtitle,
    Button
} from 'reactstrap';
// import search from '../../../assets/images/search.png'
import { NavLink } from 'react-router-dom'
// import '../../assets/stylesheets/header.scss'

class Services extends Component{
    render(){
        return(
            <React.Fragment>
            <Container fluid>
                <h2 className="sub-headline">Top Listings</h2>
                <CardDeck>
                <Card>
                        {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap"/> */}
                        <CardBody>
                        <CardSubtitle className="card-subtitle">Search apartments</CardSubtitle>
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </CardText>
                        </CardBody>
                        <NavLink to = {`/index`} className="hero-btn">
                            <Button className="hero-btn">View apartment</Button>
                        </NavLink>
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
                        <NavLink to = {`/index`} className="hero-btn">
                            <Button className="hero-btn">View apartment</Button>
                        </NavLink>
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
                        <NavLink to = {`/index`} className="hero-btn">
                            <Button className="hero-btn">View apartment</Button>
                        </NavLink>
                    </Card>
                </CardDeck>
            </Container>
            </React.Fragment>
        )
    }
}

export default Services



