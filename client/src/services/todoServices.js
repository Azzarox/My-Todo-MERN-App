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
    const token = JSON.parse(localStorage.getItem('token'));

    const response = await fetch(apiUrl + routes.allTodos(filter), {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });

    // The response will be unauthorized so we throw the error back to be caught in the useEffect in TodoCatalog

    if (!response.ok) {
        throw new Error(response.statusText);
    }
    // If the response is ok we get the data
    return response.json();
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
