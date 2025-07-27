import Modal from "@/components/UI/Modal/Modal";

import styles from './ModalRoute.module.css';

import { ModalRouteProps } from "@/types/Route";
import RouteContent from "@/components/Routes/Route/RouteContent/RouteContent";
import FormBid from "../FormBid/FormBid";
import Cost from "@/components/Cost/Cost";

const ModalRoute = ( {route, active, setActive} : ModalRouteProps) => {

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