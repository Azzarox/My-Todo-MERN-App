import request from './requester';

const routes = {
    allTodos: (filter) => {
        return `/api/todos?filter=${filter}`;
    },
    allTodosByTitle: (filter, title) => {
        return `/api/todos/search?filter=${filter}&title=${title}`;
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

export const getAllTodosByTitle = async (filter, title) => {
    try {
        // If there was a error thrown from request it would be caught in the catch
        const response = await request(
            'GET',
            routes.allTodosByTitle(filter, title)
        );
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

export const completeTodo = async (id) => {
    try {
        const response = await request('PUT', `/api/todos/${id}`, {
            isDone: true,
        });
        return response;
    } catch (err) {
        console.error(err);
    }
};

export const deleteTodo = async (id) => {
    try {
        const response = await request('DELETE', `/api/todos/${id}`, {});
        return response;
    } catch (err) {
        console.error(err);
    }
};

export const deleteAllTodos = async () => {
    try {
        const response = await request('DELETE', `/api/todos`, {});
        return response;
    } catch (err) {
        console.error(err);
    }
};
