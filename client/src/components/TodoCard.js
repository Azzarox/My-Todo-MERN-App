import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import * as todoServices from '../services/todoServices';
import { Row, Col } from 'react-bootstrap';

function TodoCard({ todo, updateTodosDeleted }) {
    // If not using state, it will not rerender (only after refresh which is not what we want)
    const [currentTodo, setCurrentTodo] = useState(todo);

    let buttonComponent = null;

    const onClickHandler = (e) => {
        todoServices.completeTodo(currentTodo._id).then((newTodo) => {
            setCurrentTodo(newTodo);
        });
    };

    const onClickDeleteHandler = (e) => {
        todoServices.deleteTodo(currentTodo._id).then((deletedTodo) => {
            updateTodosDeleted(deletedTodo);
        });
    };

    if (currentTodo.isDone) {
        buttonComponent = (
            <Button onClick={onClickHandler} disabled variant="success">
                Completed
            </Button>
        );
    } else {
        buttonComponent = (
            <Button onClick={onClickHandler} variant="dark">
                Complete
            </Button>
        );
    }

    const iconStyle = {
        cursor: 'pointer',
        fontSize: '20px',
    };

    const todoTimestamp = new Date(todo.createdAt).toLocaleString();

    return (
        <Card>
            <Card.Header>{todoTimestamp}</Card.Header>
            <Card.Body>
                <Card.Title>{currentTodo.title}</Card.Title>
                <Card.Text>{currentTodo.description}</Card.Text>
                <Row className="justify-content-between">
                    <Col>{buttonComponent}</Col>
                    <Col className="text-end">
                        <i
                            className="bi bi-x-lg"
                            style={iconStyle}
                            onClick={onClickDeleteHandler}
                            onMouseEnter={(e) =>
                                (e.target.style.color = '#68b08f')
                            }
                            onMouseLeave={(e) =>
                                (e.target.style.color = 'black')
                            }
                        ></i>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default TodoCard;
