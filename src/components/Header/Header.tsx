import Image from "next/image";
import Link from "next/link";

import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/logo.png`} alt="logo" width={111} height={143} />
            <nav className={styles.menu}> 
                <Link href="#">МАРШРУТЫ</Link>
                <Link href="#">ГАЛЕРЕЯ</Link>
                <Link href="#">ВОПРОС-ОТВЕТ</Link>
                <Link href="#">КОНТАКТЫ</Link>
            </nav>
            <div className={styles.contacts}>
                <p className={styles.number}>+7 928 333 26 45</p>
                <button className={styles.button}>Перезвоните мне</button>
            </div>
        </header>
    );
}

export default Header;