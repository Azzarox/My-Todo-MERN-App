import Spinner from 'react-bootstrap/Spinner';
import styles from './Spinner.module.scss';

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
