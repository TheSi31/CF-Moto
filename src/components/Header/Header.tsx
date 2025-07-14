import Image from "next/image";
import Link from "next/link";

import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/Logo.png`} alt="logo" width={111} height={143} unoptimized />
            <nav className={styles.menu}> 
                <Link href="#routes">МАРШРУТЫ</Link>
                <Link href="#photo">ГАЛЕРЕЯ</Link>
                <Link href="#question_answer">ВОПРОС-ОТВЕТ</Link>
                <Link href="#contacts">КОНТАКТЫ</Link>
            </nav>
            <div className={styles.contacts}>
                <p className={styles.number}>+7 928 333 26 45</p>
                <button className={styles.button}>Перезвоните мне</button>
            </div>
        </header>
    );
}

export default Header;