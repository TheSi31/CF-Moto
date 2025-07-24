import Image from "next/image";
import styles from "../Route.module.css";
import Slider from "../../Slider/Slider";
import Button from "@/components/UI/Button/Button";
import { RouteProps } from "@/types/Route";

type Props = RouteProps & {
  onDetailsClick?: () => void;
};

const RouteContent = ({className, title, price, time, distance, level, route, images, text, rtl, onDetailsClick }: Props) => {
  return (
    <div className={styles.route + " " + className}>
      <span className={rtl ? styles.line + " " + styles.rtl : styles.line} />
      <div className={rtl ? styles.route__content + " " + styles.rtl : styles.route__content}>
        <div>
          <h3 className={styles.route__title}>{title}</h3>
          <h4 className={styles.route__price}>от {price} ₽</h4>
        </div>
        <ul className={styles.route__list}>
          <li className={styles.route__list__item}>
            <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/route/time.svg`} alt="time" width={13} height={13} />
            <div><span>Время в пути: </span><b>{time}</b></div>
          </li>
          <li className={styles.route__list__item}>
            <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/route/map.svg`} alt="map" width={13} height={13} />
            <div><span>Расстояние: </span><b>{distance}</b></div>
          </li>
          <li className={styles.route__list__item}>
            <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/route/star.svg`} alt="level" width={13} height={13} />
            <div><span>Сложность: </span><b>{level}</b></div>
          </li>
        </ul>
        <div className={styles.route__description}>
          <h4>Маршрут</h4>
          <p>{route}</p>
        </div>
        {onDetailsClick && (
          <nav className={styles.route__buttons}>
            <Button text="Подробнее" outline onClick={onDetailsClick} />
            <Button text="Забронировать" />
          </nav>
        )}
      </div>
      <Slider rtl={rtl} />
    </div>
  );
};

export default RouteContent;
