import { useEffect, useState } from 'react';
import debounce from '../utils/debouncer';
import * as todoServices from '../services/todoServices';

// Call when title is changed
const useSearchDebouncer = (setTodos) => {
    const [title, setTitle] = useState('');

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
    }, [title, setTodos]);

    return [title, setTitle];
};

export default useSearchDebouncer;
