'use client';

import Image from "next/image";

import styles from "./Route.module.css";
import Slider from "../Slider/Slider";
import Button from "@/components/UI/Button/Button";

const Route = () => {

    return (
        <div className={styles.route}>
            <span className={styles.line} />
            <div className={styles.route__content}>
                <div>
                    <h3 className={styles.route__title}>БАЗОВЫЙ</h3>
                    <h4 className={styles.route__price}>от 4000 ₽</h4>
                </div>
                <ul className={styles.route__list}>
                    <li className={styles.route__list__item}>
                        <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/route/time.svg`} alt="time" width={13} height={13} />
                        <div>
                            <span className={styles.route__time}>Время в пути: </span>
                            <b>1,5 - 2 часа</b>
                        </div>      
                    </li>
                    <li className={styles.route__list__item}>
                        <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/route/map.svg`} alt="map" width={13} height={13} />
                        <div>
                            <span className={styles.route__time}>Расстояние: </span>
                            <b>20 - 25 км</b>
                        </div>
                    </li>
                    <li className={styles.route__list__item}>
                        <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/route/star.svg`} alt="level" width={13} height={13} />
                        <div>
                            <span className={styles.route__time}>Сложность: </span>
                            <b>5***</b>
                        </div>
                    </li>
                </ul>
                <div className={styles.route__description}>
                    <h4>Маршрут</h4>
                    <p>Смотровая - Родник - Камень Джигита - Адербиевка - Гора Нексис -<br /> -Грозовые Ворота - Шашлыки - Цыгельский водопад (чаша любви) - <br /> -Форсаж</p>
                </div>
                <nav className={styles.route__buttons}>
                    <Button text="Подробнее" outline />
                    <Button text="Забронировать" />
                </nav>
            </div> 
            <Slider /> {/*Нужно будет переделать*/}
        </div>
    );
}

export default Route;

