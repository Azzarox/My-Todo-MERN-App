import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const Logout = () => {
    const { onLogout } = useContext(AuthContext);
    const navigate = useNavigate();
    localStorage.removeItem('token');

    onLogout(); //Sets the token to null so It can be made to be dynamic navbar

    useEffect(() => {
        navigate('/');
    }, [navigate]);

    return;
};

export default Logout;
