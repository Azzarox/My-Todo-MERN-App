const apiUrl = 'http://localhost:3001';
const routes = {
    allTodos: '/api/todos',
};
export const getAllTodos = () => {
    return fetch(apiUrl + routes.allTodos).then((res) => res.json());
};

export const completeTodo = (todo) => {
    return fetch(`http://localhost:3001/api/todos/${todo.id}`, {
        method: 'PUT',
    }).then((res) => res.json());
};
