import { useEffect, useState } from 'react';
import * as todoServices from '../services/todoServices';

const useFilter = () => {
    const [err, setErrors] = useState(null);
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState('');
    const [filter, setFilter] = useState('');

    // Call when filter is changed
    useEffect(() => {
        setLoading(true);
        const timeoutId = setTimeout(() => {
            // In the api filter should be lowercase
            // But from the client it is received as uppercase (Recent, Incomplete, Completed);
            // So have to make it lowerCase
            todoServices
                .getAllTodos(filter.toLowerCase())
                .then((data) => {
                    setTodos(data);
                    setLoading(false);
                })
                .catch((err) => setErrors(err));
        }, 1000);

        // To avoid memory leak?
        return () => {
            clearTimeout(timeoutId);
        };
    }, [filter]);

    return { loading, todos, filter, err, setFilter, setTodos };
};

export default useFilter;
