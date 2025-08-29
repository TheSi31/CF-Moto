'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./BurgerMenu.module.css";
import { useScrollLock } from "@/hooks/useScrollLock";

const BurgerMenu = () => {
    const [active, setActive] = useState(false);

    useScrollLock(active);

    useEffect(() => {
            const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setActive(false);
            };
            window.addEventListener('keydown', handleKeyDown);
            return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

  return (
    <div className={styles.burger_menu_wrapper}>
        <div className={styles.burger_menu} onClick={() => setActive(true)}>
            <span className={styles.burger_menu__line}></span>
            <span className={styles.burger_menu__line}></span>
            <span className={styles.burger_menu__line}></span>
        </div>

        <div className={`${styles.menu} ${active ? styles.active : ''}`} onClick={() => setActive(false)}>
            <div className={styles.menu_content} onClick={(e) => e.stopPropagation()}>
            <div className={styles.close} onClick={() => setActive(false)}>
                <span className={styles.burger_menu__line}></span>
                <span className={styles.burger_menu__line}></span>
            </div>
            <Link href="#routes" onClick={() => setActive(false)}>Маршруты</Link>
            <Link href="#photo" onClick={() => setActive(false)}>Галерея</Link>
            <Link href="#question_answer" onClick={() => setActive(false)}>Вопрос-ответ</Link>
            <Link href="#contacts" onClick={() => setActive(false)}>Контакты</Link>
            <Link href="#" onClick={() => setActive(false)}>Забронировать</Link>
            </div>
        </div>
    </div>
  );
};

export default BurgerMenu;
