'use client';

import { useEffect, useState } from "react";

import Image from "next/image";

import styles from "./Route.module.css";
import Slider from "../Slider/Slider";
import Button from "@/components/UI/Button/Button";
import Modal from "@/components/UI/Modal/Modal";

type RouteProps = {
    title: string;
    price: number;
    time: string;
    distance: string;
    level: string;
    route: string;
    images?: string[];
    text?: string;
}

const Route = ( {title, price, time, distance, level, route, images, text}: RouteProps) => {

    const [active, setActive] = useState(false);
    const imagesArray = [
        `${process.env.NEXT_PUBLIC_BASE_PATH}/modal/1.png`,
        `${process.env.NEXT_PUBLIC_BASE_PATH}/modal/2.png`,
        `${process.env.NEXT_PUBLIC_BASE_PATH}/modal/3.png`,
        `${process.env.NEXT_PUBLIC_BASE_PATH}/modal/4.png`,
        `${process.env.NEXT_PUBLIC_BASE_PATH}/modal/5.png`
    ]

    return (
        <div className={styles.route}>
            <span className={styles.line} />
            <div className={styles.route__content}>
                <div>
                    <h3 className={styles.route__title}>{title}</h3>
                    <h4 className={styles.route__price}>от {price} ₽</h4>
                </div>
                <ul className={styles.route__list}>
                    <li className={styles.route__list__item}>
                        <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/route/time.svg`} alt="time" width={13} height={13} />
                        <div>
                            <span>Время в пути: </span>
                            <b>{time}</b>
                        </div>      
                    </li>
                    <li className={styles.route__list__item}>
                        <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/route/map.svg`} alt="map" width={13} height={13} />
                        <div>
                            <span>Расстояние: </span>
                            <b>{distance}</b>
                        </div>
                    </li>
                    <li className={styles.route__list__item}>
                        <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/route/star.svg`} alt="level" width={13} height={13} />
                        <div>
                            <span>Сложность: </span>
                            <b>{level}</b>
                        </div>
                    </li>
                </ul>
                <div className={styles.route__description}>
                    <h4>Маршрут</h4>
                    <p>{route}</p>
                </div>
                <nav className={styles.route__buttons}>
                    <Button text="Подробнее" outline onClick={() => setActive(true)} />
                    <Button text="Забронировать" />
                </nav>
            </div> 
            <Slider /> {/*Нужно будет переделать*/}
            <Modal active={active} setActive={setActive}>
                <div className={styles.route__modal}>
                    <span className={styles.line} />
                    <div className={styles.route__content}>
                        <div>
                            <h3 className={styles.route__title}>{title}</h3>
                            <h4 className={styles.route__price}>от {price} ₽</h4>
                        </div>
                        <ul className={styles.route__list}>
                            <li className={styles.route__list__item}>
                                <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/route/time.svg`} alt="time" width={13} height={13} />
                                <div>
                                    <span>Время в пути: </span>
                                    <b>{time}</b>
                                </div>      
                            </li>
                            <li className={styles.route__list__item}>
                                <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/route/map.svg`} alt="map" width={13} height={13} />
                                <div>
                                    <span>Расстояние: </span>
                                    <b>{distance}</b>
                                </div>
                            </li>
                            <li className={styles.route__list__item}>
                                <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/route/star.svg`} alt="level" width={13} height={13} />
                                <div>
                                    <span>Сложность: </span>
                                    <b>{level}</b>
                                </div>
                            </li>
                        </ul>
                        <div className={styles.route__description}>
                            <h4>Маршрут</h4>
                            <p>{route}</p>
                        </div>
                    </div>
                    <Slider /> 
                </div>
                <div>
                    <h4>Что просмотрим на маршруте</h4>
                    <p>{text}</p>
                </div>
                <div>
                    <h4>Стоимость за 1 квадрацикл:</h4>
                    <div>
                        {imagesArray.map((image, index) => (
                            <div>
                                <Image key={index} src={image} alt="route" width={300} height={300} />
                            </div>
                        ))}
                    </div>
                </div>
            </Modal>    
        </div>
    );
}

export default Route;

