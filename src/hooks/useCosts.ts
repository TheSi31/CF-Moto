import useSWR from 'swr';
import type { CostType } from '@/types/Cost';

export const useCosts = () => {
    const { data, error, isLoading } = useSWR<CostType[]>(
        `${process.env.NEXT_PUBLIC_BASE_PATH}/api/costs`,
        fetcher
    );

    return {
        costs: data ?? [],
        loading: isLoading,
        error: error?.message ?? null,
    };
};

const fetcher = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Ошибка загрузки');
    return res.json();
};
