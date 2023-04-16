// const baseUrl = 'https://todo-mern-app-juco.onrender.com' || 'http://localhost:3001';

const request = async (method, path, data) => {
    let token = JSON.parse(localStorage.getItem('token'));

    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    };

    // Not used since all requests (even GET ones) need to be authorized
    // if (token) {
    //     options['headers'] = { Authorization: `Bearer ${token}` };
    // }

    if (method !== 'GET') {
        options.method = method;
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(process.env.REACT_APP_API_BASE_URL + path, options);
        if (!response.ok) {
            // let error = await response.json();
            throw new Error(response.statusText);
            // The error is caught in the catch block
        }

        return response.json();
    } catch (err) {
        throw err;
        // Caught and thrown again
    }
};

export default request;
