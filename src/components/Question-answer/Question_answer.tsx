import Image from "next/image";
import Button from "../UI/Button/Button";

import styles from "./Question_answer.module.css";

const Question_answer = () => {
    return (
        <section className={styles.question_answer} id="question_answer">
            <h2 className={styles.title}>Вопросы-ответы</h2>
            <Image className={styles.buggy} src={`${process.env.NEXT_PUBLIC_BASE_PATH}/buggy.png`} alt="" width={843} height={596} />
            <Image className={styles.spring} src={`${process.env.NEXT_PUBLIC_BASE_PATH}/spring.png`} alt="" width={943} height={596} />
            <div className={styles.question_answer__content}>
                <div className={styles.accordions}>
                    <details className={styles.accordion}>
                        <summary className={styles.accordion__title}>Какие способы оплаты предоставлены?</summary>
                        <div className={styles.accordion__content}>
                            <p>Карточка, наличные, перевод</p>
                        </div>
                    </details>
                    <details className={styles.accordion}>
                        <summary className={styles.accordion__title}>Можно ли купить несколько экскурсий?</summary>
                        <div className={styles.accordion__content}>
                            <p>Да, можно</p>
                        </div>
                    </details>
                    <details className={styles.accordion}>
                        <summary className={styles.accordion__title}>Какие способы оплаты предоставлены?</summary>
                        <div className={styles.accordion__content}>
                            <p>Карточка, наличные, перевод</p>
                        </div>
                    </details>
                    <details className={styles.accordion}>
                        <summary className={styles.accordion__title}>Можно ли купить несколько экскурсий?</summary>
                        <div className={styles.accordion__content}>
                            <p>Да, можно</p>
                        </div>
                    </details>
                </div>
                <div className={styles.form}>
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/icon/chat.svg`} alt="chat" width={94} height={94} />
                    <h3>Есть вопросы?</h3>
                    <p>Не стесняйтесь обращаться к нам,<br /> если у вас есть какие-либо вопросы, предложения или <br /> 
                    идеи для сотрудничества</p>
                    <Button text="Задать вопрос" />
                </div>
            </div>
        </section>
    );
}

export default Question_answer;