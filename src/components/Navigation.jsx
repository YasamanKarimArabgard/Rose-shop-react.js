import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartProvider';


const Navigation = () => {

    const { cart } = useCart()

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">shop</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
                    <Nav.Link to='/cart' as={NavLink} className='position-relative'>Cart
                        {cart.length ? <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger mt-3 mx-1">{cart.length}</span> : null }
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;