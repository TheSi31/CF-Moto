import Image from "next/image";
import styles from "./Contacts.module.css";

const Contacts = () => {
    return (
        <section className={styles.contacts}>
            <div className={styles.contacts__content}>
                <h2 className={styles.title}>Контакты</h2>
                <div className={styles.contacts__content__info}>
                    <div className={styles.contacts__content__info__item}>
                        <div className={styles.icon}>
                            <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/icon/home.svg`} alt="" width={22} height={22} />
                        </div>
                        <p>Город Геленджик</p>
                    </div>
                    <div className={styles.contacts__content__info__item}>
                        <div className={styles.icon}>
                            <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/icon/phone_contact.svg`} alt="" width={23} height={23} />
                        </div>
                        <p>+7 928 428-00-62</p>
                    </div>
                    <div className={styles.contacts__content__info__item}>
                        <div className={styles.icon}>
                            <Image  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/icon/email.svg`} alt="" width={25} height={25} />
                        </div>
                        <p>experience@groupgrand.ru</p>
                    </div>
                    <div className={styles.contacts__content__info__item}>
                        <div className={styles.icon}>
                            <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/icon/clock.svg`} alt="" width={30} height={30} />
                        </div>
                        <p>Пн - Пт: 9:00 - 18:00 <br />Сб: 9:00 - 17:00<br />Вс - выходной</p>
                    </div>
                </div>
                <div className={styles.contacts__social}>
                    <h3 className={styles.contacts__social__title}>Написать нам:</h3>
                    <nav className={styles.contacts__social__nav}>
                        <a>
                            <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/icon/whatsapp.svg`} alt="" width={41} height={41} />
                        </a>
                        <a>
                            <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/icon/instagram.svg`} alt="" width={41} height={41} />
                        </a>
                    </nav>
                </div>
            </div>
            <div></div>
        </section>
    );
}

export default Contacts;