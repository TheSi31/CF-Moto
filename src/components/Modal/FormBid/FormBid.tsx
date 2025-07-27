import Button from "@/components/UI/Button/Button";
import styles from "./FormBid.module.css";
import { useDates } from "@/hooks/useDates";


const FormBid = () => {

    const { dates } = useDates();

    return (
        <div className={styles.formBid} style={{backgroundImage: `url("${process.env.NEXT_PUBLIC_BASE_PATH}/form_background.png")`}}>
            <h4>Бронирование онлайн</h4>
            <form className={styles.form}>
                <div className={styles.item}>
                    <label htmlFor="date">Желаемая дата</label>
                    <div className={styles.select_wrapper}>
                        <select>
                            {dates.map((item, index) => (
                                <option key={index}>{item.date}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className={styles.item}>   
                    <label htmlFor="people">Количество человек</label>
                    <input type="number" placeholder="Количество человек" id="people" />
                </div>

                <div className={styles.item}>
                    <label htmlFor="phone">Телефон или WhatsApp</label>
                    <input type="text" placeholder="Телефон или WhatsApp" />
                </div>

                <div className={styles.item}>
                    <label htmlFor="name">Как к вам обращаться?</label>
                    <input type="text" placeholder="Как к вам обращаться?" id="name"/>
                </div>

                <Button text="Забронировать" />
            </form>
        </div>
    );
}

export default FormBid;