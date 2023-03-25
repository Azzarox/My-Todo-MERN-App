import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TodoCard({ todo }) {
    return (
        <Card>
            <Card.Header>{todo.timestamp}</Card.Header>
            <Card.Body>
                <Card.Title>{todo.title}</Card.Title>
                <Card.Text>{todo.description}</Card.Text>
                <Button variant="primary">Complete</Button>
            </Card.Body>
        </Card>
    );
}

export default TodoCard;
