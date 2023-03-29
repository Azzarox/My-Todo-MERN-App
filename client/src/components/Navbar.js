import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavbarComponent() {
    let user = null || null; // Dummy for conditional rendering

    return (
        <>
            {[false].map((expand) => (
                <Navbar
                    key={expand}
                    bg="light"
                    expand={expand}
                    className="mb-3"
                >
                    <Container fluid>
                        <Navbar.Brand href="#">Todo's </Navbar.Brand>
                        <Navbar.Toggle
                            aria-controls={`offcanvasNavbar-expand-${expand}`}
                        />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title
                                    id={`offcanvasNavbarLabel-expand-${expand}`}
                                >
                                    Menu
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    {!user ? (
                                        <>
                                            <Nav.Link href="#action1">
                                                Login
                                            </Nav.Link>
                                            <Nav.Link href="#action1">
                                                Register
                                            </Nav.Link>
                                        </>
                                    ) : (
                                        <>
                                            <Nav.Link href="#action1">
                                                Profile
                                            </Nav.Link>
                                            <Nav.Link href="#action1">
                                                Log out
                                            </Nav.Link>
                                        </>
                                    )}
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default NavbarComponent;
