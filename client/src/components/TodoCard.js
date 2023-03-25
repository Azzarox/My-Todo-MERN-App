import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TodoCard({ todo }) {

    let buttonComponent = null;

    if (todo.isDone) {
        buttonComponent = (
            <Button disabled variant="success">
                Completed
            </Button>
        );
    } else {
        buttonComponent = <Button variant="dark">Complete</Button>;
    }

    return (
        <Card>
            <Card.Header>{todo.timestamp}</Card.Header>
            <Card.Body>
                <Card.Title>{todo.title}</Card.Title>
                <Card.Text>{todo.description}</Card.Text>
                {buttonComponent}
            </Card.Body>
        </Card>
    );
}

export default TodoCard;
