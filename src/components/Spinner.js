import Spinner from 'react-bootstrap/Spinner';
import styles from './Spinner.module.css';

function CustomSpinner() {
    return (
        <div className={styles.wrapper}>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
}

export default CustomSpinner;
