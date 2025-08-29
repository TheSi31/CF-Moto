import useSWR from 'swr';
import type { RouteProps } from '@/types/Route';

export const useRoutes = () => {
    const { data, error, isLoading } = useSWR<RouteProps[]>(
        `${process.env.NEXT_PUBLIC_BASE_PATH}/api/routes`,
        fetcher
    );

    return {
        routes: data ?? [],
        loading: isLoading,
        error: error?.message ?? null,
    };
};

const fetcher = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Ошибка загрузки');
    return res.json();
};