import { useEffect, useState } from 'react';
import debounce from '../utils/debouncer';
import * as todoServices from '../services/todoServices';
import { useNavigate } from 'react-router-dom';

// Call when title is changed
const useSearchDebouncer = (setSearchTodos) => {
    const [title, setTitle] = useState('');
    const [errMessage, setErrMessage] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        const debounceHandler = debounce(() => {
            todoServices
                .getAllTodosByTitle(title)
                .then((data) => {
                    setSearchTodos(data);
                })
                .catch((err) => {
                    setErrMessage(err.message);
                    navigate('/login');
                });
        }, 500);

        debounceHandler.execute();

        return () => {
            debounceHandler.cancel();
        };
    }, [title]);

    return [title, setTitle, errMessage];
};

export default useSearchDebouncer;
