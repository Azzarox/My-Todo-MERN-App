import { Routes, Route } from 'react-router-dom';

import Homepage from './components/Homepage';
import Login from './components/Login';
import NavbarComponent from './components/Navbar';

import './App.css';
import Register from './components/Register';
import { AuthContext } from './context/authContext';
import { useEffect, useState } from 'react';
import Logout from './components/Logout';

function App() {
    const [user, setUser] = useState({
        id: '',
        username: '',
    });

    let [token, setToken] = useState(null);

    // Fixing the resetting the token on refresh page?
    useEffect(() => {
        setToken(localStorage.getItem('token'));
    }, []);

    const onRegister = (data) => {
        setUser(data);
    };

    const onLogin = (data) => {
        setToken(data);
    };
    const onLogout = () => {
        setToken(null);
    };

    return (
        <>
            <AuthContext.Provider
                value={{ token, user, onRegister, onLogin, onLogout }}
            >
                <NavbarComponent />

                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </AuthContext.Provider>
        </>
    );
}

export default App;
