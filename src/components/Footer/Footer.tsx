import Image from "next/image";
import Link from "next/link";

import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <Image className={styles.logo} src={`${process.env.NEXT_PUBLIC_BASE_PATH}/Logo.png`} alt="logo" width={65} height={83} />
                <nav className={styles.menu}>
                    <Link className={styles.link} href="#routes">МАШРУТЫ</Link>
                    <Link className={styles.link} href="#photo">ГАЛЕРЕЯ</Link>
                    <Link className={styles.link} href="#question_answer">ВОПРОС-ОТВЕТ</Link>
                    <Link className={styles.link} href="#contacts">КОНТАКТЫ</Link>
                    <Link className={styles.link} href="#conditions">УСЛОВИЯ</Link>
                    <Link className={styles.link} href="#special">СПЕЦПРЕДЛОЖЕНИЯ</Link>
                </nav>
            </div>
            <p className={styles.copyright}>© CFMOTO Experience Kuban. Внедорожный полигон CFMOTO и прокат квадроциклов в Геленджике</p>
        </footer>
    );
}

export default Footer;