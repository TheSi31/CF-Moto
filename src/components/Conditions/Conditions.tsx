import Image from "next/image";

import styles from "./Conditions.module.css";

const Conditions = () => {
    return (
        <section className={styles.conditions}>
            <h2 className={styles.title}>Условия предоставления<br/> услуг</h2>
            <div className={styles.conditions__content}>
                <div className={styles.conditions__content__item}>
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/icon/checkmark.svg`} width={42} height={42} alt="checkmark" />
                    <p>При прокате или аренде строго соблюдать правила техники безопасности и все требования инструктора!</p>
                </div>
                <div className={styles.conditions__content__item}>
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/icon/checkmark.svg`} width={42} height={42} alt="checkmark" />
                    <p>К управлению <b>НЕ ДОПУСКАЮТСЯ</b> лица младше 16 лет и лица в алкогольном опьянении!</p>
                </div>
                <div className={styles.conditions__content__item}>
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/icon/checkmark.svg`} width={42} height={42} alt="checkmark" />
                    <p>Распивать спиртные напитки во время проката, аренды <b>ЗАПРЕЩЕНО!</b> (После? На ваше усмотрение)</p>
                </div>
                <div className={styles.conditions__content__item}>
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/icon/checkmark.svg`} width={42} height={42} alt="checkmark" />
                    <p>Управление осуществляйте в меру своих сил и возможностей. Не переоценивайте себя! Это опасно!!!</p>
                </div>
                <div className={styles.conditions__content__item}>
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/icon/checkmark.svg`} width={42} height={42} alt="checkmark" />
                    <p>Перед каждым катанием опытный инструктор научит Вас основам управления и будет сопровождать на протяжении всего маршрута.</p>
                </div>
                <div className={styles.conditions__content__item}>
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/icon/checkmark.svg`} width={42} height={42} alt="checkmark" />
                    <p>При прокате или аренде строго соблюдать правила техники безопасности и все требования инструктора!</p>
                </div>
            </div>
        </section>
    );
}

export default Conditions;