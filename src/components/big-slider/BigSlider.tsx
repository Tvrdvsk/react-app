import clsx from 'clsx';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './BigSlider.module.scss';

const BigSlider = () => {
  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.next_item',
          prevEl: '.prev_item',
        }}
        loop
        speed={1000}
        autoplay={{
          delay: 2000,
        }}
        modules={[Navigation, Pagination, Autoplay]}
      >
        <SwiperSlide>
          <div className={styles.imageItem}>
            <img src="img/4.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.imageItem}>
            <img src="img/2.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.imageItem}>
            <img src="img/3.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.imageItem}>
            <img src="img/1.jpg" alt="" />
          </div>
        </SwiperSlide>
        <div className={styles.navigationItems}>
          <div className={clsx(styles.naviagitonItem, styles.next_item, 'next_item')}>
            <img src="img/next_sl.png" alt="" />
          </div>
          <div className={clsx(styles.naviagitonItem, styles.prev_item, 'prev_item')}>
            <img src="./img/prev_sl.png" alt="" />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default BigSlider;
