
import Image from "next/image";
import Modal from "@/components/UI/Modal/Modal";

import styles from './ModalRoute.module.css';

import { ModalRouteProps } from "@/types/Route";
import RouteContent from "@/components/Routes/Route/RouteContent/RouteContent";
import FormBid from "../FormBid/FormBid";

const content = [
    {
        id: 1,
        title: 'UFORCE 1000 EPS (U10 EPS)',
        price: '4000',
        img: `${process.env.NEXT_PUBLIC_BASE_PATH}/modal/1.png`
    },
    {
        id: 2,
        title: 'CFORCE 1000 EPS (X10 EPS)',
        price: '6000',
        img: `${process.env.NEXT_PUBLIC_BASE_PATH}/modal/2.png`
    },
    {
        id: 3,
        title: 'CFMOTO CFORCE 600 EPS',
        price: '7000',
        img: `${process.env.NEXT_PUBLIC_BASE_PATH}/modal/3.png`
    },
    {
        id: 4,
        title: 'CFORCE 400L EPS (X4 EPS)',
        price: '8000',
        img: `${process.env.NEXT_PUBLIC_BASE_PATH}/modal/4.png`
    },
    {
        id: 5,
        title: 'ZFORCE 1000',
        price: '9000',
        img: `${process.env.NEXT_PUBLIC_BASE_PATH}/modal/5.png`
    },
    {
        id: 6,
        title: 'UFORCE 1000 EPS (U10 EPS)',
        price: '4000',
        img: `${process.env.NEXT_PUBLIC_BASE_PATH}/modal/1.png`
    }
]

const ModalRoute = ( {route, active, setActive} : ModalRouteProps) => {

    const imagesArray = [
        `${process.env.NEXT_PUBLIC_BASE_PATH}/modal/1.png`,
        `${process.env.NEXT_PUBLIC_BASE_PATH}/modal/2.png`,
        `${process.env.NEXT_PUBLIC_BASE_PATH}/modal/3.png`,
        `${process.env.NEXT_PUBLIC_BASE_PATH}/modal/4.png`,
        `${process.env.NEXT_PUBLIC_BASE_PATH}/modal/5.png`
    ]

    return (
        <Modal className={styles.modal} active={active} setActive={setActive}>
            <RouteContent className={styles.route} {...route} />
            <div className={styles.description}>
                <h4>Что просмотрим на маршруте</h4>
                <p>{route.text}</p>
            </div>
            <div className={styles.cost}>
                <h4>Стоимость за 1 квадрацикл:</h4>
                <div className={styles.cost_trip}>
                    {content.map((item, index) => (
                        <div className={styles.cost_trip__item} key={index}>
                            <Image src={item.img} alt={item.title} width={310} height={310} />
                            <div className={styles.cost_trip__item__text}>
                                <span className={styles.cost_trip__item__text__title}>{item.title}</span>
                                <span className={styles.cost_trip__item__text__price}>{item.price} ₽</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <FormBid />
        </Modal>
    );
}

export default ModalRoute;