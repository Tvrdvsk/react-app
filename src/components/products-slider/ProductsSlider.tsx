import React from 'react';
import clsx from 'clsx';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import ProductItem from '../product-item/ProductItem';

import styles from './ProductSlider.module.scss';

const ProductsSlider = ({
  title,
  data,
}: {
  title: string;
  data: { id: number; name: string; img: string; price: string | number; isInWishlist: boolean }[];
}) => {
  return (
    <div>
      <h3 className="title">{title}</h3>
      <div className={styles.viewAll}>
        <p>View All</p>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={17}
        navigation={{
          nextEl: `.next_item`,
          prevEl: `.prev_item`,
        }}
        loop
        speed={1000}
        modules={[Navigation]}
      >
        {data?.map(product => {
          return (
            <SwiperSlide key={product.id}>
              <ProductItem
                isInWishlist={product.isInWishlist}
                name={product.name}
                price={product.price}
                img={product.img}
              />
            </SwiperSlide>
          );
        })}
        <div className={styles.navigationItems}>
          <div className={clsx(styles.naviagitonItem, styles.next_item, `next_item`)}>
            <img
              src={window.location.pathname.includes('products') ? '../img/next_big.png' : './img/next_big.png'}
              alt=""
            />
          </div>
          <div className={clsx(styles.naviagitonItem, styles.prev_item, `prev_item`)}>
            <img
              src={window.location.pathname.includes('products') ? '../img/priv_big.png' : './img/priv_big.png'}
              alt=""
            />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default ProductsSlider;
