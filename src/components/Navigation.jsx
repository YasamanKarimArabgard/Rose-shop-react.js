import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const items = [
    { name: 'home', to: '/' },
    { name: 'cart', to: '/cart' }
]
const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">shop</Navbar.Brand>
                <Nav className="me-auto">
                    {items.map(item => (
                        <Nav.Link to={item.to} as={NavLink}>{item.name}</Nav.Link>
                    ))}
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;