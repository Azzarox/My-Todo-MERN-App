import TodoCard from './TodoCard';
import CustomSpinner from './Spinner';
import Stack from 'react-bootstrap/Stack';
import FilterTodos from './FilterTodos';

import styles from './TodosCatalog.module.css';
import SearchTodo from './SearchTodo';
import AddTodo from './AddTodo';
import { Alert, Button } from 'react-bootstrap';
import useSearchDebouncer from '../hooks/useSearchDebouncer';
import useFilter from '../hooks/useFilter';

const TodosCatalog = () => {
    const { loading, todos, filter, err, setFilter, setTodos } = useFilter();
    const [_, setTitle] = useSearchDebouncer(setSearchTodos);

    // Call when title is changed

    // Changes filter func
    function filterHandler(e) {
        if (e.target.tagName === 'A') {
            setFilter(e.target.text);
        }
    }

    function setSearchTodos(todos) {
        setTodos(todos);
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
