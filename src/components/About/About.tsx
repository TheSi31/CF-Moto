'use client';

import { useEffect, useState } from 'react';

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from "swiper/modules";

import styles from "./About.module.css";

import 'swiper/css';

const About = () => {
    const [direction, setDirection] = useState<'vertical' | 'horizontal'>('horizontal');

    useEffect(() => {
        const handleResize = () => {
            setDirection(window.innerWidth >= 1024 ? 'vertical' : 'horizontal');
        };

        const debouncedHandleResize = debounce(handleResize, 200);

        window.addEventListener('resize', debouncedHandleResize);

        return () => {
            window.removeEventListener('resize', debouncedHandleResize);
        };
    }, []);

    const debounce = (func: Function, delay: number) => {
        let timeoutId: NodeJS.Timeout;

        return (...args: any[]) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(null, args), delay);
        };
    };

    const pagination = {
        clickable: true,
        el: '.about-swiper-pagination',
        renderBullet: (index: number, className: string) => {
            return `<span class="${styles.paginationBullet} ${className} ${index === 0 ? styles.active : ''}"></span>`;
        },
    };

    return (
        <section className={styles.about}>
            <div className={styles.pagination +" about-swiper-pagination"} />
            <Swiper
                key={direction}
                direction={direction}
                pagination={pagination}
                loop
                onActiveIndexChange={(swiper) => {
                    const bullets = document.querySelectorAll(`.${styles.paginationBullet}`);
                    if (!bullets.length) return;

                    bullets.forEach(bullet => bullet.classList.remove(styles.active));
                    const active = bullets[swiper.realIndex];
                    if (active) active.classList.add(styles.active);
                }}
                style={{ position: 'absolute', width: '100%', height: '100%'  }}
                modules={[Pagination]}
            >
                {[
                    `${process.env.NEXT_PUBLIC_BASE_PATH}/swiper/about/1.jpg`,
                    `${process.env.NEXT_PUBLIC_BASE_PATH}/swiper/about/2.jpg`,
                    `${process.env.NEXT_PUBLIC_BASE_PATH}/swiper/about/1.jpg`
                ].map((src, index) => (
                    <SwiperSlide key={index}><Image className={styles.image} src={src} alt="about" width={1440} height={918} /></SwiperSlide>
                ))}
            </Swiper>
            <div className={styles.content}>
                <h1 className={styles.title}>Экскурсии на <br/> квадроциклах<br/> в Геленджике</h1>
                <p>приезжайте за новыми ощущениями и эмоциями!</p>
                <button className={styles.button}>Подобрать маршрут<Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/icon/next.svg`} alt="arrow" width={24} height={24} /></button>
            </div>
        </section>
    );
}

export default About;


