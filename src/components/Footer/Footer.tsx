import Image from "next/image";
import Link from "next/link";

import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <Image className={styles.logo} src={`${process.env.NEXT_PUBLIC_BASE_PATH}/Logo.png`} alt="logo" width={65} height={83} />
                <nav className={styles.menu}>
                    <Link href="#routes">Маршрут</Link>
                    <Link href="#photo">Галерея</Link>
                    <Link href="#question_answer">Вопрос-ответ</Link>
                    <Link href="#contacts">Контакты</Link>
                    <Link href="#conditions">Условия</Link>
                    <Link href="#special">Спецпредложения</Link>
                </nav>
            </div>
            <p className={styles.copyright}>© CFMOTO Experience Kuban. Внедорожный полигон CFMOTO и прокат квадроциклов в Геленджике</p>
        </footer>
    );
}

export default Footer;