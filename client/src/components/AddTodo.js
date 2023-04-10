import styles from './AddTodo.module.css';

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import * as todoServices from '../services/todoServices';
const AddTodo = ({ updateTodos }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const { title, description } = Object.fromEntries(formData);

        todoServices
            .createTodo({ title, description })
            .then((newTodo) => updateTodos(newTodo))
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <a href="#" className={styles['btn-add-todo']} onClick={handleShow}>
                Add Todo
            </a>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Todo</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                as="input"
                                name="title"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="description"
                                rows={3}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="light" onClick={handleClose}>
                            Discard
                        </Button>
                        <Button
                            type="submit"
                            variant="dark"
                            onClick={handleClose}
                        >
                            Create
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
};

export default AddTodo;
