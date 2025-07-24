import Image from 'next/image';
import styles from './Team.module.css';

const Team = () => {
    return (
        <section className={styles.team} id='team'>
            <h2 className={styles.title}>Наша команда</h2>
            <Image className={styles.canister} src={`${process.env.NEXT_PUBLIC_BASE_PATH}/canister.png`} alt='' width={843} height={596} />
            <Image className={styles.bumper} src={`${process.env.NEXT_PUBLIC_BASE_PATH}/bumper.png`} alt='' width={943} height={596} />
            <div className={styles.team__content}>
                <div className={styles.team__item}>
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/team/1.png`} alt='Юлиана' width={303} height={303} />
                    <div className={styles.team__item__text}>
                        <h3>Юлиана</h3>
                        <p>руководитель</p>
                    </div>
                </div>
                <div className={styles.team__item}>
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/team/2.png`} alt='Максим' width={303} height={303} />
                    <div className={styles.team__item__text}>
                        <h3>Максим</h3>
                        <p>старший инструктор</p>
                    </div>
                </div>
                <div className={styles.team__item}>
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/team/3.png`} alt='Кристина' width={303} height={303} />
                    <div className={styles.team__item__text}>
                        <h3>Кристина</h3>
                        <p>администратор</p>
                    </div>
                </div>
                <div className={styles.team__item}>
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/team/4.png`} alt='Юрий' width={303} height={303} />
                    <div className={styles.team__item__text}>
                        <h3>Юрий</h3>
                        <p>старший механик</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Team;

