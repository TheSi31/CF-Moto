import { useScrollLock } from '@/hooks/useScrollLock';

import styles from './Modal.module.css';

type ModalProps = {
    active: boolean;
    setActive: (active: boolean) => void;
    className?: string;
    children?: React.ReactNode;
}

const Modal = ({active, setActive, className, children}: ModalProps) => {

    useScrollLock(active);

    return (
        <div className={active ? styles.modal + ' ' + styles.active : styles.modal} onClick={() => setActive(false)}>
            <div className={styles.modal__content}>
                <span className={styles.close} onClick={() => setActive(false)}></span>
                <div className={active ? styles.content + ' ' + styles.active + ' ' + className : styles.content + ' ' + className} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;