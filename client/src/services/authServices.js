import request from './requester';

export const register = (data) => {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then((res) => res.json());
};

export const login = (data) => {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then((res) => res.json());
};

export const getUserInfo = async () => {
    // TODO: Add try catch
    const response = await request('GET', '/api/auth/user', {});
    return response;
};
