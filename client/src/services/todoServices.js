const apiUrl = 'http://localhost:3001';

const routes = {
    allTodos: (filter) => {
        return `/api/todos?filter=${filter}`;
    },
};

export const getAllTodos = (filter) => {
    return fetch(apiUrl + routes.allTodos(filter)).then((res) => res.json());
};

export const completeTodo = (todo) => {
    return fetch(`http://localhost:3001/api/todos/${todo.id}`, {
        method: 'PUT',
    }).then((res) => res.json());
};
