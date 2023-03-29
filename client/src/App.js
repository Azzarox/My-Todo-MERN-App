import { Routes, Route } from 'react-router-dom';

import Homepage from './components/Homepage';
import Login from './components/Login';
import NavbarComponent from './components/Navbar';

import './App.css';
import Register from './components/Register';

function App() {
    return (
        <>
            <NavbarComponent />

            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    );
}

export default App;
