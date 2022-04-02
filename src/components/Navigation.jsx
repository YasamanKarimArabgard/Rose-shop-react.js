import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav } from 'react-bootstrap';

const items = [
    { name: 'cart', to: '/cart' },
    { name: 'home', to: '/' }
]
const Navigation = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">shop</Navbar.Brand>
                <Nav className="me-auto">
                    {items.map(item => (
                        <Nav.Link href={item.to}>{item.name}</Nav.Link>
                    ))}
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;;