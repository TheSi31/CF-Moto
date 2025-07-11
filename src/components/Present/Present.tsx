import Image from "next/image";
import Button from "../UI/Button/Button";
import styles from "./Present.module.css";


const Present = () => {
    return (
        <section className={styles.present}>
            <h2 className={styles.title}>Подарочный сертификат</h2>
            <h3 className={styles.subtitle}>Хотите сделать оригинальный подарок?<br /> Подарите незабываемые эмоции - лучший подарок!</h3>
            <div className={styles.present__content}>
                <div className={styles.present__content__text}>
                    <p>Хотите удивить своих близких оригинальным подарком? Подарочный сертификат на экскурсию на квадроциклах 
                        станет не просто интересным подарком, но и реальной возможностью приблизить Ваших друзей и близких к 
                        новому увлечению.</p>
                    <Button text="Подберем сертификат для вас" outline className={styles.button} />
                </div>
                <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/present.png`} alt="present" width={600} height={300} />
            </div>
        </section>
    );
}

export default Present;