import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaSearch } from "react-icons/fa";

const Header = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home" style={{ fontWeight: 'bold', fontSize: '26px' }}>Pizza House</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">About Us</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            style={{
                                background: 'white'
                            }}
                        />
                        <Button style={{ backgroundColor: 'red' }}>
                            <FaSearch />
                        </Button>
                    </Form>
                </Container>
            </Navbar>
        </>
    )
}

export default Header