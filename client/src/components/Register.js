import { useState } from 'react';
import * as authServices from '../services/authServices';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Alert, Col, Row } from 'react-bootstrap';

const Register = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    async function onSubmitRegister(ev) {
        ev.preventDefault();
        const formData = new FormData(ev.currentTarget);
        const { username, password, repass } = Object.fromEntries(formData);

        const data = await authServices.register({
            username,
            password,
            repass,
        });

        if (data.id) {
            setUser(data);
        } else {
            setError(data);
        }

        console.log(user);
        console.log(error);
    }

    return (
        <Form onSubmit={onSubmitRegister} className="wrapper">
            {error ? (
                <>
                    <Alert className="flex fl-between" variant="danger">
                        {error.err}
                        <i
                            onClick={() => setError(null)}
                            className="bi bi-x-lg"
                        ></i>
                    </Alert>
                </>
            ) : null}
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="text"
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

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name="repass"
                />
            </Form.Group>

            <Button variant="dark" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default Register;
