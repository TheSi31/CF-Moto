import Modal from "@/components/UI/Modal/Modal";

import styles from './ModalRoute.module.css';

import { ModalRouteProps } from "@/types/Route";
import RouteContent from "@/components/Routes/Route/RouteContent/RouteContent";
import FormBid from "../FormBid/FormBid";
import Cost from "@/components/Cost/Cost";

const ModalRoute = ( {route, active, setActive} : ModalRouteProps) => {

    const imagesArray = [
        `${process.env.NEXT_PUBLIC_BASE_PATH}/modal/1.png`,
        `${process.env.NEXT_PUBLIC_BASE_PATH}/modal/2.png`,
        `${process.env.NEXT_PUBLIC_BASE_PATH}/modal/3.png`,
        `${process.env.NEXT_PUBLIC_BASE_PATH}/modal/4.png`,
        `${process.env.NEXT_PUBLIC_BASE_PATH}/modal/5.png`
    ]

    return (
        <Modal className={styles.modal} active={active} setActive={setActive}>
            <RouteContent className={styles.route} {...route} />
            <div className={styles.description}>
                <h4>Что просмотрим на маршруте</h4>
                <p>{route.text}</p>
            </div>
            <Cost />
            <FormBid />
        </Modal>
    );
}

export default ModalRoute;