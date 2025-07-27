'use client';

import { useState, useEffect } from "react";
import Image from "next/image";

import styles from "./Cost.module.css";
import type { Cost } from "@/types/Cost";
import ModalCost from "../Modal/ModalCost/ModalCost";

const Cost = () => {

    const [content, setContent] = useState<Cost[]>([]);

    useEffect(() => {
        const fetchRoutes = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}/api/costs`);
            const data = await res.json();
            setContent(data);
        };
        fetchRoutes();
    }, []);

    return (
        <div className={styles.cost}>
            <h4>Стоимость за 1 квадрацикл:</h4>
            <div className={styles.cost_trip}>
                {content.map((item, index) => (
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