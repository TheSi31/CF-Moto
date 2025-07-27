import { useId } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import styles from './Slider.module.css';


const Slider = ({ rtl }: { rtl?: boolean }) => {

    const id = useId();
    const paginationClass = `route-swiper-pagination-${id}`;

    return (
        <Swiper
            observer={true}
            observeParents={true}
            dir={rtl ? 'rtl' : 'ltr'}
            slidesPerView={2.1}
            spaceBetween={20}
            slidesOffsetAfter={50}
            pagination={
                {
                        clickable: true,
                        el: `.${paginationClass}`,
                        renderBullet: (index: number, className: string) => {
                            return `<span class="${styles.paginationBullet} ${className} ${index === 0 ? styles.active : ''}"></span>`;
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
                <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/route/base/1.png`} alt="route" width={350} height={350} />
            </SwiperSlide>
            <SwiperSlide className={styles.route__slider__item}>
                <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/route/base/1.png`} alt="route" width={350} height={350}  />
            </SwiperSlide>
            <SwiperSlide className={styles.route__slider__item}>
                <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/route/base/1.png`} alt="route" width={350} height={350}  />
            </SwiperSlide>
            <div className={styles.pagination}>
                <p className={styles.scroll}>scroll</p>
                <span className={styles.line} />
                <div className={`${rtl ? styles.route__slider__pagination + ' ' + styles.rtl : styles.route__slider__pagination} ${paginationClass}`}/>
            </div>
        </Swiper>
    );
}

export default Slider;
