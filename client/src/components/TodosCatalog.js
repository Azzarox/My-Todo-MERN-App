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

const TodosCatalog = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('');
    const [title, setTitle] = useState('');

    // Call when filter is changed
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            // In the api filter should be lowercase
            // But from the client it is received as uppercase (Recent, Incomplete, Completed);
            // So have to make it lowerCase
            todoServices.getAllTodos(filter.toLowerCase()).then((data) => {
                setTodos(data);
                setLoading(false);
            });
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

    return (
        <>
            <div className={styles.wrapper}>
                <FilterTodos filterHandler={filterHandler} filter={filter} />
                <AddTodo updateTodos={updateTodos} />
            </div>
            <Stack direction="vertical" gap={3}>
                <SearchTodo titleHandler={titleHandler} />
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
