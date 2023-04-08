import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
    return (
        <Form className="wrapper">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Username"
                    name="username"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                />
            </Form.Group>
            <Button variant="dark" type="submit">
                Login
            </Button>
        </Form>
    );
}

export default Login;
