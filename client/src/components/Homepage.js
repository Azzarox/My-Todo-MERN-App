import TodosCatalog from './TodosCatalog';

import styles from './Homepage.module.css';
import { Container } from 'react-bootstrap';

const Homepage = () => {
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
