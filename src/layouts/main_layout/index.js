import styles from './index.module.css';

const Mainlayout = ({ children }) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}

export default Mainlayout;