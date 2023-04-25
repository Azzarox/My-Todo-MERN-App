import { Routes, Route } from 'react-router-dom';

import Homepage from './components/Homepage';
import Login from './components/Login';
import NavbarComponent from './components/Navbar';

import './App.scss';
import Register from './components/Register';
import { AuthContext } from './context/authContext';
import { useEffect, useState } from 'react';
import Logout from './components/Logout';

const INITIAL_USER_STATE = {
    id: '',
    username: '',
};

function App() {
    const [user, setUser] = useState(INITIAL_USER_STATE);

    let [token, setToken] = useState(null);

    // Fixing the resetting the token on refresh page?
    useEffect(() => {
        setToken(localStorage.getItem('token'));
    }, []);

    const onRegister = () => {};

    const onLogin = (data) => {
        setToken(data);
    };

    const onLogout = () => {
        setToken(null);
        setUser(INITIAL_USER_STATE);
    };

    function updateUser(data) {
        setUser(data);
    }

    return (
        <>
            <AuthContext.Provider
                value={{ user, token, onRegister, onLogin, onLogout }}
            >
                <NavbarComponent  />

                <Routes>
                    <Route path="/" element={<Homepage updateUser={updateUser} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </AuthContext.Provider>
        </>
    );
}

export default App;
