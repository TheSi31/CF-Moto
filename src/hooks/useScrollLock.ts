import { useEffect, useRef } from 'react';

export const useScrollLock = (lock: boolean) => {
    const scrollYRef = useRef(0);

    useEffect(() => {
        if (lock) {
            scrollYRef.current = window.scrollY;

            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollYRef.current}px`;
        } else {
            document.body.style.position = '';
            document.body.style.top = '';

            window.scrollTo({ top: scrollYRef.current, behavior: 'instant' });
        }

        return () => {
            document.body.style.position = '';
            document.body.style.top = '';
        };
    }, [lock]);
};
