import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { cardsData } from "./data/portfolio";
import Header from "./components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';

const projectsWrapper = {
    flex: "1,100%",
    display: "flex",
    flexDirection: "column",
    margin: "50px 190px 0px 190px",
}

const cardsWrapper = {
    display: "flex",
    flexDirection: "row",
    marginTop: "50px"
}

const Portfolio = () => {
    return (
        <div style={projectsWrapper}>
            <Header header={'Portfolio'}/>
            <div style={cardsWrapper}>
                <Row xs={1} md={2} className="g-4">
                    {cardsData.map((card, idx) => (
                        <Col key={idx}>
                        <Card style={{ display:"flex", justifyContent:"center", alignItems:"center", padding:"0px 0px 0px 0px" }}>
                            <Card.Img variant="top" src={card.imageSrc} />
                            {/* <Card.Body style={{ textAlign:"center", fontFamily: 'Montserrat' }}> */}
                            {/* <Card.Title style={{ fontWeight:"bolder" }}>{card.title}</Card.Title> */}
                            {/* <Card.Text>{card.text}</Card.Text> */}
                            {/* <Card.Link style={{ textDecoration:"none" }} href="#">Github</Card.Link> */}
                            {/* </Card.Body> */}
                        </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}

export default Portfolio;