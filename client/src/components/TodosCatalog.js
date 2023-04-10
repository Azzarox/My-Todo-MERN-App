import { useState, useEffect } from 'react';
import TodoCard from './TodoCard';
import * as todoServices from '../services/todoServices';
import CustomSpinner from './Spinner';
import Stack from 'react-bootstrap/Stack';
import FilterTodos from './FilterTodos';

import styles from './TodosCatalog.module.css';
import SearchTodo from './SearchTodo';
import debounce from '../utils/debouncer';
import AddTodo from './AddTodo';
import { Alert, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const TodosCatalog = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState('');
    const [filter, setFilter] = useState('');
    const [title, setTitle] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        const timeoutId = setTimeout(() => {
            todoServices
                .getAllTodos(filter.toLowerCase())
                .then((data) => {
                    // This will be executed only if there is no error
                    setTodos(data);
                    setLoading(false);
                })
                .catch(
                    // if there is error navigate to the login page
                    (err) => navigate('/login')
                );
        }, 1000);

        // To avoid memory leak?
        return () => {
            clearTimeout(timeoutId);
        };
    }, [filter]);

    // Call when title is changed
    useEffect(() => {
        const debounceHandler = debounce(() => {
            todoServices.getAllTodosByTitle(title).then((data) => {
                setTodos(data);
            });
        }, 500);

        debounceHandler.execute();

        return () => {
            debounceHandler.cancel();
        };
    }, [title]);

    // Changes filter func
    function filterHandler(e) {
        if (e.target.tagName === 'A') {
            setFilter(e.target.text);
        }
    }

    // This is passed to the SearchTodo so it can set the state
    function titleHandler(title) {
        setTitle(title);
    }

    // This updates the todos state from AddTodo child
    function updateTodos(newTodo) {
        setTodos((oldTodos) => [newTodo, ...oldTodos]);
    }

    // This updates the todos state from TodoCard
    function updateTodosDeleted(deletedTodo) {
        setTodos((oldTodos) =>
            oldTodos.filter((todo) => todo.id !== deletedTodo.id)
        );
    }

    let component = loading ? (
        <CustomSpinner />
    ) : (
        todos.map((todo) => (
            <TodoCard
                updateTodosDeleted={updateTodosDeleted}
                todo={todo}
                key={todo._id}
            />
        ))
    );

    return (
        <>
            <div className={styles.wrapper}>
                <FilterTodos filterHandler={filterHandler} filter={filter} />
                <AddTodo updateTodos={updateTodos} />
            </div>
            <Stack direction="vertical" gap={3}>
                <SearchTodo titleHandler={titleHandler} />

                {todos.length > 0 ? (
                    component
                ) : (
                    <Alert variant="primary">There aren't any todos yet.</Alert>
                )}

                {/* When first loads the page there is no filter so delete all doesn't show up */}
                {filter && (
                    <Button
                        variant="light"
                        onClick={() => {
                            setTodos([]);
                        }}
                    >
                        <i className="bi bi-trash"></i> Delete All
                    </Button>
                )}
            </Stack>
        </>
    );
};

export default TodosCatalog;
