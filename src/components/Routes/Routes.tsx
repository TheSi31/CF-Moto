'use client';

import styles from './Routes.module.css';
import Route from './Route/Route';

import { useRoutes } from '@/hooks/useRoutes';

const Routes = () => {

    const { routes, loading, error } = useRoutes();

    if (loading) return <p>Загружаем маршруты…</p>;
    if (error) return <p>Ошибка загрузки маршрутов</p>;
     
    return (
        <section id='routes'>
            <h2 className={styles.title}>Наши маршруты</h2>
            <div className={styles.routes}>
                {routes.map((route, index) => <Route key={index} {...route} />)}
            </div>
        </section>
    );
}

export default Routes;
