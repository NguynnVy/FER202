import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';

const Booking = () => {
    return (
        <>
            <Container style={{ marginTop: '40px' }}>
                <h4
                    style={{
                        fontWeight: 'lighter',
                        fontSize: '35px',
                        color: 'white',
                        textAlign: 'center',
                        marginTop: '100px'
                    }}>Book Your Table</h4>

                <Row>
                    <Col>
                        <Form.Control placeholder="Your Name *" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Your Email *" />
                    </Col>
                    <Col>
                        <Form.Select >
                            <option>Select Service</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ marginTop: '15px' }}>
                        {/* Chuyển as="textarea" để sử dụng textarea thay vì input */}
                        <Form.Control
                            as="textarea"
                            style={{ width: '100%', height: '150px', padding: '10px' }}
                            placeholder="Please write your comment"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col style={{ marginTop: '20px', marginBottom: '20px' }}>
                        <Button style={{ backgroundColor: 'red', fontWeight: 'bold', width: '13%' }}>Send Message</Button>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default Booking