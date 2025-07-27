import Button from "@/components/UI/Button/Button";
import styles from "./FormBid.module.css";
import { useEffect, useState } from "react";
import { DateType } from "@/types/Date";

const FormBid = () => {

    const [date, setDate] = useState<DateType>();

    useEffect(() => {
        const fecthData = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}/api/dates`);
            const data = await res.json();
            setDate(data);
        }
        fecthData();
    }, []);

    return (
        <div className={styles.formBid} style={{backgroundImage: `url("${process.env.NEXT_PUBLIC_BASE_PATH}/form_background.png")`}}>
            <h4>Бронирование онлайн</h4>
            <form className={styles.form}>
                <div className={styles.item}>
                    <label htmlFor="date">Желаемая дата</label>
                    <div className={styles.select_wrapper}>
                        <select>
                            {date && Array.isArray(date) && date.map((item, index) => (
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