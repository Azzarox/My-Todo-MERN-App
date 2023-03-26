import NavbarComponent from './components/Navbar';
import TodosCatalog from './components/TodosCatalog';

import styles from './App.module.css';

function App() {
    return (
        <>
            <NavbarComponent />
            <div className={styles['site-wrapper']}>
                <h1>My Todos</h1>
                <TodosCatalog />
            </div>
        </>
    );
}

export default App;
