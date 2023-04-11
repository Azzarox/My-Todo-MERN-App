import request from './requester';

const apiUrl = 'http://localhost:3001';

const routes = {
    allTodos: (filter) => {
        return `/api/todos?filter=${filter}`;
    },
    allTodosByTitle: (title) => {
        return `/api/todos/search?title=${title}`;
    },
};

export const getAllTodos = async (filter) => {
    try {
        const response = await request('GET', routes.allTodos(filter));
        return response;
    } catch (err) {
        throw err;
    }
};

export const getAllTodosByTitle = async (title) => {
    try {
        // If there was a error thrown from request it would be caught in the catch
        const response = await request('GET', routes.allTodos(title));
        return response;
    } catch (err) {
        throw err;
        // Caught and thrown to be caught in the useEffect hook
    }
};

export const createTodo = async (data) => {
    try {
        const response = await request('POST', '/api/todos', data);
        return response;
    } catch (err) {
        throw err;
    }
};

export const completeTodo = (id) => {
    return fetch(`http://localhost:3001/api/todos/${id}`, {
        method: 'PUT',
    }).then((res) => res.json());
};

export const deleteTodo = (id) => {
    return fetch(`http://localhost:3001/api/todos/${id}`, {
        method: 'DELETE',
    }).then((res) => res.json());
};
