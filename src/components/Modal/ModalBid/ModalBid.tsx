import { useForm } from 'react-hook-form';

import Modal from "../../UI/Modal/Modal";
import Button from '@/components/UI/Button/Button';

import styles from './ModalBid.module.css';

type FormProps = {
    name: string,
    phone: string
}

type ModalProps = {
    active: boolean, 
    setActive: (active: boolean) => void
};

const ModalBid = ({active, setActive} : ModalProps) => {

    const {register, handleSubmit, formState: {errors}} = useForm<FormProps>();

    

    return (
        <Modal active={active} setActive={setActive}>
            <div className={styles.modal__content}>
                <h2 className={styles.title}>Оставь заявку</h2>
                <form className={styles.form} onSubmit={handleSubmit((data) => console.log(data))}>
                    <label>Как к вам обращаться?</label>
                    <input className={styles.input + ' ' + styles.name} type="text" {...register('name', {required: true})} />
                    {errors.name && <span className={styles.error}>Поле обязательно</span>}

                    <label>Телефон или WhatsApp</label>
                    <input className={styles.input + ' ' + styles.phone} type='text' {...register('phone', {required: true, pattern: /^\+?7?\s?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/ })} />
                    {errors.phone && <span className={styles.error}>Некорректный номер</span>}

                    <Button text='Отправить' />
                </form>
            </div>
        </Modal>
    );
}

export default ModalBid;