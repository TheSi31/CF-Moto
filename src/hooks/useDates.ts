import { useEffect, useState } from 'react';
import type { DateType } from '@/types/Date';

export const useDates = () => {
    const [dates, setDates] = useState<DateType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDates = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}/api/dates`);
                if (!res.ok) throw new Error('Ошибка загрузки');
                const data = await res.json();
                setDates(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchDates();
    }, []);

    return { dates, loading, error };
};