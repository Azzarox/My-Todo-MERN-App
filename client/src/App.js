import { Routes, Route } from 'react-router-dom';

import Homepage from './components/Homepage';
import Login from './components/Login';
import NavbarComponent from './components/Navbar';

import './App.css';
import Register from './components/Register';
import { AuthContext } from './context/authContext';
import { useState } from 'react';

function App() {
    const [user, setUser] = useState({
        id: '',
        username: '',
    });

    const [token, setToken] = useState(null);

    const onRegister = (data) => {
        setUser(data);
    };

    const onLogin = (data) => {
        setToken(data)
    }

    return (
        <>
            <AuthContext.Provider value={{ user, onRegister, onLogin }}>
                <NavbarComponent />

                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </AuthContext.Provider>
        </>
    );
}

export default App;
