'use client';

import { Swiper ,SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import Image from 'next/image';

import styles from './Photo.module.css';

const Photo = () => {

    const pagination = {
        clickable: true,
        el: '.photo-swiper-pagination',
        renderBullet: (index: number, className: string) => {
            return `<span class="${styles.paginationBullet} ${className} ${index === 0 ? styles.active : ''}"></span>`;
        },
    };

    return (
        <section className={styles.photo} id='photo'>
            <h2 className={styles.title}>Фото</h2>
            <Swiper
                slidesPerView={3}
                centeredSlides={true}   
                slidesOffsetBefore={50}
                slidesOffsetAfter={50}
                loop
                pagination={pagination}
                modules={[Pagination]}
                className={styles.photo__slider}
                onActiveIndexChange={(swiper) => {
                    const bullets = document.querySelectorAll(`.${styles.paginationBullet}`);
                    if (!bullets.length) return;

                    bullets.forEach(bullet => bullet.classList.remove(styles.active));
                    const active = bullets[swiper.realIndex];
                    if (active) active.classList.add(styles.active);
                }}
            >
                {[
                    `${process.env.NEXT_PUBLIC_BASE_PATH}/swiper/photo/1.png`,
                    `${process.env.NEXT_PUBLIC_BASE_PATH}/swiper/photo/2.png`,
                    `${process.env.NEXT_PUBLIC_BASE_PATH}/swiper/photo/3.png`,
                    `${process.env.NEXT_PUBLIC_BASE_PATH}/swiper/photo/1.png`,
                    `${process.env.NEXT_PUBLIC_BASE_PATH}/swiper/photo/2.png`,
                ].map((src, index) => (
                    <SwiperSlide key={index}><Image className={styles.image} src={src} alt="photo" width={413} height={413} /></SwiperSlide>
                ))}
            </Swiper>
            <div className={styles.pagination__photo}>
                <div className={styles.pagination +" photo-swiper-pagination"} />
                <span className={styles.line} />
                <p className={styles.scroll}>scroll</p>
            </div>
        </section>
    );
}

export default Photo;