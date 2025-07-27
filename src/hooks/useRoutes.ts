'use client';

import { useEffect, useState } from 'react';
import type { RouteProps } from '@/types/Route';

export const useRoutes = () => {
    const [routes, setRoutes] = useState<RouteProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRoutes = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}/api/routes`);
            if (!res.ok) throw new Error('Ошибка загрузки');
            const data = await res.json();
            setRoutes(data);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

        fetchRoutes();
    }, []);

    return { routes, loading, error };
};
