import NavbarComponent from './components/Navbar';
import TodosCatalog from './components/TodosCatalog';

import styles from './App.module.css';

function App() {
    return (
        <div className={styles['site-wrapper']}>
            <NavbarComponent />
            <h1>My Todos</h1>
            <TodosCatalog />
        </div>
    );
}

export default App;
