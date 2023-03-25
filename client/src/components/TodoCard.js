import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import * as todoServices from '../services/todoServices';

function TodoCard({ todo }) {
    // If not using state, it will not rerender (only after refresh which is not what we want)
    const [currentTodo, setCurrentTodo] = useState(todo);

    let buttonComponent = null;
    const onClickHandler = (e) => {
        todoServices.completeTodo(currentTodo).then((newTodo) => {
            setCurrentTodo(newTodo);
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

    return (
        <Card>
            <Card.Header>{currentTodo.timestamp}</Card.Header>
            <Card.Body>
                <Card.Title>{currentTodo.title}</Card.Title>
                <Card.Text>{currentTodo.description}</Card.Text>
                {buttonComponent}
            </Card.Body>
        </Card>
    );
}

export default TodoCard;
