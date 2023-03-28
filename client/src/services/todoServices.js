const apiUrl = 'http://localhost:3001';

const routes = {
    allTodos: (filter) => {
        return `/api/todos?filter=${filter}`;
    },
    allTodosByTitle: (title) => {
        return `/api/todos/search?title=${title}`;
    },
};

export const getAllTodos = (filter) => {
    // This works even if filter is empty string because of the api default /api/todos
    return fetch(apiUrl + routes.allTodos(filter)).then((res) => res.json());
};
export const getAllTodosByTitle = (title) => {
    return fetch(apiUrl + routes.allTodosByTitle(title)).then((res) =>
        res.json()
    );
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
