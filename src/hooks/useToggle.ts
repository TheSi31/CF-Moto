import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
    const [isOpen, setIsOpen] = useState(initial);

    const toggle = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    return { isOpen, toggle, setIsOpen };
};
