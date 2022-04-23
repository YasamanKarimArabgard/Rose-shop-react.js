import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartProvider';
import { useAuth } from '../context/AuthProvider';


const Navigation = () => {

    const { cart } = useCart()
    const userData = useAuth()
    console.log(userData);
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                        <Nav.Link to="/cart" as={NavLink}>cart
                            {cart.length ? <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger mt-3 mx-2">{cart.length}</span> : null}
                        </Nav.Link>
                        { userData ? 'enter' : <NavDropdown title="Account" id="basic-nav-dropdown">
                            <NavDropdown.Item to="/signup" as={NavLink}>Signup</NavDropdown.Item>
                            <NavDropdown.Item to="/login" as={NavLink}>login</NavDropdown.Item>
                        </NavDropdown>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;