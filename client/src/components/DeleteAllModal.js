import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeleteAllModal({ deleteAllTodos }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className={'mb-3'} variant="light" onClick={handleShow}>
                <i className="bi bi-trash"></i> Delete All
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete All Todos?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete all todos? There is no going
                    back!
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="danger"
                        onClick={() => {
                            deleteAllTodos(); // deletes the todos
                            handleClose(); // and closes the modal
                        }}
                    >
                        Delete
                    </Button>
                    <Button variant="outlined" onClick={handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteAllModal;
