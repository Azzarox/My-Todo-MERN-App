import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import * as authServices from '../services/authServices';
import { Alert } from 'react-bootstrap';

function Login() {
    const [token, setToken] = useState(null);
    const [err, setErr] = useState(null);

    async function onSubmitLogin(ev) {
        ev.preventDefault();
        const formData = new FormData(ev.currentTarget);
        const { username, password } = Object.fromEntries(formData);
        const data = await authServices.login({
            username,
            password,
        });

        if (data.token) {
            setToken(data);
        } else {
            setErr(data);
        }
    }

    // Setting to localStorage
    localStorage.setItem('token', JSON.stringify(token?.token));

    return (
        <Form onSubmit={onSubmitLogin} className="wrapper">
            {err ? (
                <>
                    <Alert className="flex fl-between" variant="danger">
                        {err.err}
                        <i
                            onClick={() => setErr(null)}
                            className="bi bi-x-lg"
                        ></i>
                    </Alert>
                </>
            ) : null}
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
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
            <Button variant="dark" type="submit">
                Login
            </Button>
        </Form>
    );
}

export default Login;
