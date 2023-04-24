import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

function NavbarComponent() {
    const { _, token } = useContext(AuthContext);
    return (
        <>
            <Container fluid>
                <Navbar>
                    <Navbar.Brand as={Link} to="/">
                        Todo's
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="">
                            {token ? (
                                <>
                                    <Nav.Link as={Link} to="/logout">
                                        Logout
                                    </Nav.Link>
                                </>
                            ) : (
                                <>
                                    <Nav.Link as={Link} to="/login">
                                        Login
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/register">
                                        Register
                                    </Nav.Link>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </>
    );
}

export default NavbarComponent;
