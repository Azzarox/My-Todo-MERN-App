const apiUrl = 'http://localhost:3001';
const routes = {
    allTodos: '/api/todos',
};
export const getAllTodos = () => {
    return fetch(apiUrl + routes.allTodos).then((res) => res.json());
};

