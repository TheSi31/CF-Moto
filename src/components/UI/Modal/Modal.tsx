'use client'

import { useEffect, useRef } from 'react';

import styles from './Modal.module.css';

type ModalProps = {
    active: boolean;
    setActive: (active: boolean) => void;
    children?: React.ReactNode;
}

const Modal = ({active, setActive, children}: ModalProps) => {

    const scrollYRef = useRef(0);

    useEffect(() => {
        if (active) {
            scrollYRef.current = window.scrollY;

            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollYRef.current}px`;
        } else {
            window.scroll({ top: scrollYRef.current, behavior: 'instant' });

            document.body.style.position = '';
            document.body.style.top = '';
        }

        return () => {
            document.body.style.position = '';
            document.body.style.top = '';
        };
    }, [active]);

    return (
        <div className={active ? styles.modal + ' ' + styles.active : styles.modal} onClick={() => setActive(false)}>
            <div className={active ? styles.content + ' ' + styles.active : styles.content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Modal;