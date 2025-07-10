
import styles from './Routes.module.css';
import Route from './Route/Route';


const Routes = () => {
    return (
        <section id='routes'>
            <h2 className={styles.title}>Наши маршруты</h2>
            <div className={styles.routes}>
                <Route />
                <Route />
                <Route />   
            </div>  
        </section>
    );
}

export default Routes;