'use client';

import { useEffect, useState } from 'react';
import styles from './Routes.module.css';
import Route from './Route/Route';
import { RouteProps } from '@/types/Route';

const Routes = () => {
    const [routeData, setRouteData] = useState<RouteProps[]>([]);

    useEffect(() => {
        const fetchRoutes = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}/api/routes`);
            const data = await res.json();
            setRouteData(data);
        };
        fetchRoutes();
    }, []);

    return (
        <section id='routes'>
            <h2 className={styles.title}>Наши маршруты</h2>
            <div className={styles.routes}>
                {routeData.map((route, index) => <Route key={index} {...route} />)}
            </div>
        </section>
    );
}

export default Routes;
