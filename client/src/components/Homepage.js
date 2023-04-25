import TodosCatalog from './TodosCatalog';

import styles from './Homepage.module.scss';
import { Container } from 'react-bootstrap';

import * as authServices from '../services/authServices';
import { useEffect } from 'react';

const Homepage = ({ updateUser }) => {
    useEffect(() => {
        authServices
            .getUserInfo()
            .then((userData) => updateUser(userData))
            .catch((err) => console.error(err.message));
    }, []);

    return (
        <Container fluid>
            <div className={styles['site-wrapper']}>
                <h1>My Todos</h1>
                <TodosCatalog />
            </div>
        </Container>
    );
};

export default Homepage;
