import TodosCatalog from './TodosCatalog';

import styles from './Homepage.module.css';

const Homepage = () => {
    return (
        <>
            <div className={styles['site-wrapper']}>
                <h1>My Todos</h1>
                <TodosCatalog />
            </div>
        </>
    );
};

export default Homepage;
