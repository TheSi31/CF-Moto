'use client';

import Image from "next/image";
import styles from "./ModalCost.module.css";

import { useToggle } from "@/hooks/useToggle";

const ModalCost = () => {

    const { isOpen, toggle } = useToggle(false);

    return (
        <>
            <Image className={styles.icon} src={`${process.env.NEXT_PUBLIC_BASE_PATH}/icon/info.svg`} alt="" width={31} height={31} onClick={toggle} />
            <div className={`${styles.content} ${isOpen ? styles.open : ""}`}>
                <span className={styles.close} onClick={toggle}></span>
                <div className={styles.content__info}>
                    <p>Мощность: <b>72 л.с.</b></p>
                    <p>Двигатель: <b>1000 см3</b></p>   
                </div>
            </div>
        </>
    );
}

export default ModalCost;
