import React from 'react';
import clsx from 'clsx';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={clsx(styles.bottom, 'center')}>
        <div className={styles.contact}>
          <a href="index.html">
            <img
              src={window.location.pathname.includes('products') ? '../img/ak-12.png' : './img/ak-12.png'}
              alt="error"
            />
          </a>
          <div className={styles.i_info}>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
        <div className={styles.info}>
          <p>©2022 All rights reserved.</p>
        </div>
        <div className={styles.cart}>
          <img
            src={window.location.pathname.includes('products') ? '../img/paypal.png' : './img/paypal.png'}
            alt="error"
          />
          <img src={window.location.pathname.includes('products') ? '../img/visa.png' : './img/visa.png'} alt="error" />
          <img
            src={window.location.pathname.includes('products') ? '../img/master.png' : './img/master.png'}
            alt="error"
          />
        </div>
      </div>
      <div className="clear"></div>
    </footer>
  );
};

export default Footer;
