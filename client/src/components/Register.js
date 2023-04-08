import { useContext, useState } from 'react';
import * as authServices from '../services/authServices';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Alert } from 'react-bootstrap';
import { AuthContext } from '../context/authContext';
import { Navigate, useNavigate } from 'react-router-dom';

const Register = () => {
    const { onRegister, user } = useContext(AuthContext);
    const navigate = useNavigate();
    
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
            onRegister(data);
            navigate('/login');
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
