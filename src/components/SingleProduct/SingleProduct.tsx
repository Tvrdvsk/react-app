import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './SingleProduct.module.scss';

const SingleProduct = () => {
  return (
    <div className="center">
      <div className={styles.cartPage}>
        <div className={styles.sliderWrapper}>
          <Swiper
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: '.next_item',
              prevEl: '.prev_item',
            }}
            modules={[Navigation, Pagination, Autoplay]}
          >
            <SwiperSlide>
              <div className={styles.imageItem}>
                <img
                  src="../images/Revolvers/Taurus_Revolver/Revolver_Taurus_.357 Magnum_2” Barrel___TAURUS DEFENDER 605.webp"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.imageItem}>
                <img
                  src="../images/Revolvers/Taurus_Revolver/Revolver_Taurus_38 Special_2” Barrel___TAURUS 856.webp"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.imageItem}>
                <img
                  src="../images/Revolvers/Taurus_Revolver/Revolver_Taurus_.44 Magnum_4” Barrel___TRACKER 44.webp"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.descr}>
          <h1 className={styles.name}>TAURUS 605</h1>
          <p className={styles.short}>
            357 Mag / 38 Spl +P Matte Black <br /> Oxide 2.00 in. Soft Rubber
          </p>
          <p className={styles.price}>419.99 $</p>
          <button className={styles.btn}>BUY NOW</button>
        </div>
      </div>
      <div className={styles.bottomDescr}>
        <div className={styles.mainBottom}>
          <div className={styles.mainBottomBlockes}>
            <p>ITEM NUMBER</p>
            <p>2-605021</p>
          </div>
          <div className={styles.mainBottomBlockes}>
            <p>CALIBER</p>
            <p>357 MAG</p>
          </div>
          <div className={styles.mainBottomBlockes}>
            <p>BRAND</p>
            <p>tAURUS</p>
          </div>
        </div>
        <div className={styles.mainBottom}>
          <div className={styles.mainBottomBlockes}>
            <p>BARREL LENGTH</p>
            <p>2.00 In.</p>
          </div>
          <div className={styles.mainBottomBlockes}>
            <p>OVERALL LENGTH</p>
            <p>6.50 In.</p>
          </div>
          <div className={styles.mainBottomBlockes}>
            <p>OVERALL HEIGHT</p>
            <p>4.40 In.</p>
          </div>
          <div className={styles.mainBottomBlockes}>
            <p>OVERALL WEIGHT</p>
            <p>24.00 Oz. (Unloaded)</p>
          </div>
        </div>
        <div className={styles.mainBottom}>
          <div className={styles.mainBottomBlockes}>
            <p>FRAME MATERIAL</p>
            <p>Allov Steel</p>
          </div>
          <div className={styles.mainBottomBlockes}>
            <p>FRAME FINISH</p>
            <p>Matte Black Oxide</p>
          </div>
          <div className={styles.mainBottomBlockes}>
            <p>CYLINDER MATERIAL</p>
            <p>Alloy Steel</p>
          </div>
          <div className={styles.mainBottomBlockes}>
            <p>CYLINDER FINISH</p>
            <p>Matte Black Oxide</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
