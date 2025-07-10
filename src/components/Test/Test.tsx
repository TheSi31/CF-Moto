import Button from '../UI/Button/Button';
import styles from './Test.module.css';

const Test = () => {
    return (
        <section className={styles.test} style={{backgroundImage: `url("${process.env.NEXT_PUBLIC_BASE_PATH}/test_background.png")`}}>
            <div className={styles.content}>
                <h2>Затрудняетесь выбрать маршрут?</h2>
                <p>Пройдите тест и мы поможем вам подобрать оптимальную под вас экскурсию</p>
            </div>
            <Button text="Пройти тест" />
        </section>
    );
}

export default Test;