import Image from "next/image";

import styles from "./Advantage.module.css";

const Advantage = () => {
    return (
        <section className={styles.advantage}>
            <div className={styles.item}>
                <div className={styles.circle}></div>
                <Image className={styles.image} src="/advantage/Forest.svg" alt="Forest" width={36} height={36} />
                <h3>Увлекательные экскурсии</h3>
                <p>Маршруты от лесных дорожек до полного бездорожья!</p>
            </div>
            <div className={styles.item}>
                <div className={styles.circle}></div>
                <Image className={styles.image} src="/advantage/Moto.svg" alt="Moto" width={48} height={32} />
                <h3>Надежная техника</h3>
                <p>18 квадроциклов всех японских брендов</p>
            </div>
            <div className={styles.item}>
                <div className={styles.circle}></div>
                <Image className={styles.image} src="/advantage/Helmet.svg" alt="Helmet" width={40} height={32} />
                <h3>Экипировка бесплатно</h3>
                <p>Необходимая экипировка выдается бесплатно</p>
            </div>
            <div className={styles.item}>
                <div className={styles.circle}></div>
                <Image className={styles.image} src="/advantage/Instructor.svg" alt="Instructor" width={44} height={44} />
                <h3>Опытные инструктора</h3>
                <p>Обеспечат полную безопасность Вашего отдыха</p>
            </div>
        </section>
    );
}

export default Advantage;

