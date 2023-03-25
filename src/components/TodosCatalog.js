import { useState, useEffect } from 'react';
import TodoCard from './TodoCard';
import * as todoServices from '../services/todoServices';
import CustomSpinner from './Spinner';
import Stack from 'react-bootstrap/Stack';

const TodosCatalog = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            todoServices.getAllTodos().then((data) => {
                setTodos(data);
                setLoading(false);
            });
        }, 1000);
    }, []);

    return (
        <Stack direction="vertical" gap={3}>
            {loading ? (
                <CustomSpinner />
            ) : (
                todos.map((todo) => <TodoCard todo={todo} />)
            )}
        </Stack>
    );
};

export default TodosCatalog;
