import Image from "next/image";
import styles from "./Special.module.css";
import Button from "../UI/Button/Button";

const Special = () => {
    return (
        <section className={styles.special} id='special'>
            <h2 className={styles.title}>Спецпредложения</h2>
            <Image className={styles.buggy} src={`${process.env.NEXT_PUBLIC_BASE_PATH}/buggy.png`} alt='' width={843} height={596} />
            <Image className={styles.details} src={`${process.env.NEXT_PUBLIC_BASE_PATH}/details.png`} alt='' width={943} height={596} />
            <div className={styles.special__content}> 
                <div className={styles.special__content__item}>
                    <Image className={styles.special__content__item__img} src={`${process.env.NEXT_PUBLIC_BASE_PATH}/special/1.png`} alt="день рождения" width={300} height={300} />
                    <div className={styles.special__content__item__text}>
                        <h3>Скидка 10%</h3>
                        <h4>на день рождения</h4>
                        <p>в честь Дня Рождения - дарим имениннику скидку 10%</p>
                    </div>
                    <Image className={styles.special__content__item__bottom} src={`${process.env.NEXT_PUBLIC_BASE_PATH}/special/bottom.svg`} alt="низ" width={300} height={300} />
                </div>
                <div className={styles.special__content__item}>
                    <Image className={styles.special__content__item__img} src={`${process.env.NEXT_PUBLIC_BASE_PATH}/special/2.png`} alt="клиенты Ex-Kuban" width={300} height={300} />
                    <div className={styles.special__content__item__text}>
                        <h3>Скидка 10%</h3>
                        <p>клиентам Ex-Kuban на услуги Загородного клуба Ягода Малина</p>
                        <Button text="Подробнее" outline className={styles.special__content__item__button}/> 
                    </div>
                    <Image className={styles.special__content__item__bottom} src={`${process.env.NEXT_PUBLIC_BASE_PATH}/special/bottom.svg`} alt="низ" width={300} height={300} />
                </div>
            </div>
        </section>
    );
}

export default Special;