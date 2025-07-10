import { useId } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import styles from './Slider.module.css';


const Slider = () => {

    const id = useId();
    const paginationClass = `route-swiper-pagination-${id}`;

    return (
        <Swiper
            slidesPerView={1.2}
            loop
            spaceBetween={20}
            centeredSlides={false}
            pagination={
                {
                        clickable: true,
                        el: `.${paginationClass}`,
                        renderBullet: (index: number, className: string) => {
                            return `<span class="${styles.paginationBullet} ${className} ${index === 0 ? styles.active : ''}">${index + 1}</span>`;
                        },
                }
            }
            modules={[Pagination]}
            className={styles.route__slider}
            onActiveIndexChange={(swiper) => {
                const bullets = swiper.el.querySelectorAll(`.${styles.paginationBullet}`);
                if (!bullets.length) return;

                bullets.forEach(bullet => bullet.classList.remove(styles.active));
                const active = bullets[swiper.realIndex];
                if (active) active.classList.add(styles.active);
            }}
        >
            <SwiperSlide className={styles.route__slider__item}>
                <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/route/base/1.png`} alt="route" fill />
            </SwiperSlide>
            <SwiperSlide className={styles.route__slider__item}>
                <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/route/base/1.png`} alt="route" fill />
            </SwiperSlide>
            <SwiperSlide className={styles.route__slider__item}>
                <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/route/base/1.png`} alt="route" fill  />
            </SwiperSlide>
            <div className={`${styles.route__slider__pagination} ${paginationClass}`} />
        </Swiper>
    );
}

export default Slider;