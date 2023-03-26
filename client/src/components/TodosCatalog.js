import { useState, useEffect } from 'react';
import TodoCard from './TodoCard';
import * as todoServices from '../services/todoServices';
import CustomSpinner from './Spinner';
import Stack from 'react-bootstrap/Stack';
import FilterTodos from './FilterTodos';

import styles from './TodosCatalog.module.css';
import AddTodo from './AddTodo';

const TodosCatalog = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        setTimeout(() => {
            // In the api filter should be lowercase
            // But from the client it is received as uppercase (Recent, Incomplete, Completed);
            // So have to make it lowerCase
            todoServices.getAllTodos(filter.toLowerCase()).then((data) => {
                setTodos(data);
                setLoading(false);
            });
        }, 1000);
    }, [filter]);

    // Changes filter func
    function filterHandler(e) {
        if (e.target.tagName === 'A') {
            setFilter(e.target.text);
        }
    }

    return (
        <>
            <div className={styles.wrapper}>
                <FilterTodos filterHandler={filterHandler} filter={filter} />
                <AddTodo />
            </div>
            <Stack direction="vertical" gap={3}>
                {loading ? (
                    <CustomSpinner />
                ) : (
                    todos.map((todo) => <TodoCard todo={todo} key={todo.id} />)
                )}
            </Stack>
        </>
    );
};

export default TodosCatalog;
