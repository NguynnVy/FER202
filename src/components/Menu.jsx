import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';

const Menu = () => {
    return (
        <>
            <Container style={{ marginTop: '40px' }}>
                <h4 style={{ color: 'white', fontSize: '30px', fontWeight: 'lighter' }}>Our menu</h4>
                <Row>
                    <Col>
                        <Card style={{ width: '20rem' }}>
                            <img src="/assets/menu1.jpg" alt="" />
                            <Card.Body>
                                <Card.Title>Margherita Pizza</Card.Title>
                                <Card.Text>
                                    <span>
                                        <del>$40.00</del>
                                    </span>
                                    <span style={{ color: "orange" }}>$24.00</span>
                                </Card.Text>
                                <Button variant="primary" style={{ width: '100%', background: '#212529' }}>Buy</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '20rem' }}>
                            <img src="/assets/menu1.jpg" alt="" />
                            <Card.Body>
                                <Card.Title>Mushroom Pizza</Card.Title>
                                <Card.Text>
                                    <span>
                                        <del>$34.00</del>
                                    </span>
                                    <span style={{ color: "orange" }}>$20.00</span>
                                </Card.Text>
                                <Button variant="primary" style={{ width: '100%', background: '#212529' }}>Buy</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '20rem' }}>
                            <img src="/assets/menu1.jpg" alt="" />
                            <Card.Body>
                                <Card.Title>Hawaiian Pizza</Card.Title>
                                <Card.Text>
                                    <span>
                                        <del>$42.00</del>
                                    </span>
                                    <span style={{ color: "orange" }}>$21.00</span>
                                </Card.Text>
                                <Button variant="primary" style={{ width: '100%', background: '#212529' }}>Buy</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '20rem' }}>
                            <img src="/assets/menu1.jpg" alt="" />
                            <Card.Body>
                                <Card.Title>Pesto Pizza</Card.Title>
                                <Card.Text>
                                    <span>
                                        <del>$20.00</del>
                                    </span>
                                    <span style={{ color: "orange" }}>$19.00</span>
                                </Card.Text>
                                <Button variant="primary" style={{ width: '100%', background: '#212529' }}>Buy</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default Menu