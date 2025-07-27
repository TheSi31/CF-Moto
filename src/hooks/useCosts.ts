import { useState, useEffect } from 'react';
import type { Cost } from '@/types/Cost';

export const useCosts = () => {
    const [costs, setCosts] = useState<Cost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCosts = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}/api/costs`);
            if (!res.ok) throw new Error('Ошибка загрузки');
            const data = await res.json();
            setCosts(data);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
        };

        fetchCosts();
    }, []);

    return { costs, loading, error };
};