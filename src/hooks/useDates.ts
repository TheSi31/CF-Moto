import useSWR from 'swr';
import type { DateType} from '@/types/Date';

export const useDates = () => {

    const { data, error, isLoading } = useSWR<DateType[]>(
        `${process.env.NEXT_PUBLIC_BASE_PATH}/api/dates`,
        fetcher
    );

    return {
        dates: data ?? [],
        loading: isLoading,
        error: error?.message ?? null,
    };
};

const fetcher = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Ошибка загрузки');
    return res.json();
};