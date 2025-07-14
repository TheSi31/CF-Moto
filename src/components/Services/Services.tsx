import Image from "next/image";
import styles from "./Services.module.css";

const Services = () => {
    return (
        <section className={styles.services}>
            <h2 className={styles.title}>Дополнительные услуги</h2>
            <div className={styles.services__content}>
                <div className={styles.services__content__item}>
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/services/1.png`} alt="Эвакуация, ремонт квадроциклов" width={300} height={200} />
                    <p>Эвакуация, ремонт квадроциклов</p>
                </div>
                <div className={styles.services__content__item}>
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/services/2.png`} alt="Фото, видеосъемка" width={300} height={200} />
                    <p>Фото, видеосъемка</p>
                </div>
                <div className={styles.services__content__item}>
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/services/3.png`} alt="Транспортировка техники" width={300} height={200} />
                    <p>Транспортировка техники</p>
                </div>
                <div className={styles.services__content__item}>
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/services/4.png`} alt="Заправка, чекап, мойка" width={300} height={200} />
                    <p>Заправка, чекап, мойка</p>
                </div>
                <div className={styles.services__content__item}>
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/services/5.png`} alt="Корпоративы, тимбилдинги" width={300} height={200} />
                    <p>Корпоративы, тимбилдинги</p>
                </div>
                <div className={styles.services__content__item}>
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/services/6.png`} alt="Выездной кейтеринг" width={300} height={200} />
                    <p>Выездной кейтеринг</p>
                </div>
                <div className={styles.services__content__item}>
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/services/7.png`} alt="Индивидуальные маршруты" width={300} height={200} />
                    <p>Индивидуальные маршруты</p>
                </div>
                <div className={styles.services__content__item}>
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/services/8.png`} alt="Услуги гида" width={300} height={200} />
                    <p>Услуги гида</p>
                </div>
            </div>
        </section>
    );
}

export default Services;