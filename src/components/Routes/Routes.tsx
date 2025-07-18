
import styles from './Routes.module.css';
import Route from './Route/Route';

const routeData = [
    {
        title: 'Базовый',
        price: 4000,
        time: '1,5 - 2 часа',
        distance: '20 - 25 км',
        level: '5***',
        route: 'Смотровая - Родник - Камень Джигита - Адербиевка - Гора Нексис - Грозовые Ворота - Шашлыки - Цыгельский водопад (чаша любви) - Форсаж',
        text: 'Базовый маршрут',
        rtl: false
    },
    {
        title: 'Расширенный',
        price: 16000,
        time: '6 - 8 часа',
        distance: '60 - 70 км',
        level: '5***',
        route: 'Смотровая - Родник - Камень Джигита - Адербиевка - Гора Нексис - Грозовые Ворота - Шашлыки - Цыгельский водопад (чаша любви) - Форсаж',
        text: 'Расширенный маршрут',
        rtl: true
    },
    {
        title: 'Experience',
        price: 7000,
        time: '4 часа',
        distance: '40 - 50 км',
        level: '5***',
        route: 'Форсаж - Голубая бухта - Заброшенная Тур База - Сухогруз Рио - Форсаж',
        text: 'Experience',
        rtl: false
    }
];


const Routes = () => {
    return (
        <section id='routes'>
            <h2 className={styles.title}>Наши маршруты</h2>
            <div className={styles.routes}>
                {routeData.map((route, index) => <Route key={index} {...route} />)}   
            </div>  
        </section>
    );
}

export default Routes;