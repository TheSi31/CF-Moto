'use client';

import { useCosts } from "@/hooks/useCosts";
import Image from "next/image";

import styles from "./Cost.module.css";
import ModalCost from "../Modal/ModalCost/ModalCost";

const Cost = () => {

    const { costs, loading, error } = useCosts();

    if (loading) return <p>Загружаем стоимость…</p>;
    if (error) return <p>Ошибка загрузки стоимости</p>;

    return (
        <div className={styles.cost}>
            <h4>Стоимость за 1 квадрацикл:</h4>
            <div className={styles.cost_trip}>
                {costs.map((item, index) => (
                    <div className={styles.cost_trip__item} key={index}>
                        <ModalCost />
                        <Image src={item.img} alt={item.title} width={310} height={310} />
                        <div className={styles.cost_trip__item__text}>
                            <span className={styles.cost_trip__item__text__title}>{item.title}</span>
                            <span className={styles.cost_trip__item__text__price}>{item.price} ₽</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cost;