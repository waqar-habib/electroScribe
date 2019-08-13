import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card';
import './dashboard.css';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

const Dashboard = () => (
    <div>

        <div>
            <Jumbotron fluid>
                <Container>
                    <h1 style={{ textAlign: 'center' }}>electroScribe</h1>
                    <p style={{ textAlign: 'center' }}>
                        Track your patients, their medications and conditions.
    </p>
                </Container>
            </Jumbotron>
        </div>



        <div className="first">
            <CardDeck className="cards">
                <Card>
                    <Card.Img variant="top" src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <Card.Body>
                        <Card.Title>Current Patients</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <a style={{ color: "blue", textDecoration: "none", fontWeight: 'bold' }} href="/patients">See your patients</a>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://images.pexels.com/photos/4154/clinic-doctor-health-hospital.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <Card.Body>
                        <Card.Title>Medications</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
          content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <a style={{ color: "blue", textDecoration: "none", fontWeight: 'bold' }} href="/patients/:id/drugs">See the Medications</a>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <Card.Body>
                        <Card.Title>Conditions</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <a style={{ color: "blue", textDecoration: "none", fontWeight: 'bold' }} href="/patients/:id/conditions">See the Conditions</a>

                    </Card.Footer>
                </Card>
            </CardDeck>
        </div>
    </div>
)

export default Dashboard; 