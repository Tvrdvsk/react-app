import React from 'react';

import styles from './Card.module.scss';

const Cart = () => {
  return (
    <div className="center">
      <div className={styles.cartPage}>
        <div className={styles.cartRow}>
          <div className={styles.cartItems}>
            <div className={styles.cartItem}>
              <div className={styles.cartItemRow}>
                <div className="col_">
                  <div className={styles.imageBlock}>
                    <img
                      src="./images/Revolvers/Taurus_Revolver/Revolver_Taurus_38 Special_2” Barrel___TAURUS 856.webp"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col_">
                  <p className={styles.description}>Decription</p>
                </div>
                <div className="col_">
                  <div>
                    <p className={styles.price}>Price</p>
                    <p style={{ marginTop: '50px' }}>419.99$</p>
                  </div>
                  <div className={styles.counter}>
                    <button>-</button>
                    <input type="text" value={2} onChange={() => console.log()} />
                    <button>+</button>
                  </div>
                </div>
                <div className="col_">
                  <p className={styles.total}>Total</p>
                  <p style={{ marginTop: '50px' }}>839.90$</p>
                </div>
              </div>
            </div>
            <div className={styles.cartItem}>
              <div className={styles.cartItemRow}>
                <div className="col_">
                  <div className={styles.imageBlock}>
                    <img
                      src="./images/Revolvers/Taurus_Revolver/Revolver_Taurus_.357 Magnum_2” Barrel___TAURUS DEFENDER 605.webp"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col_">
                  <p className={styles.description}>Decription</p>
                </div>
                <div className="col_">
                  <p className={styles.price}>Price</p>
                  <p style={{ marginTop: '50px' }}>419.99$</p>
                  <div className={styles.counter}>
                    <button>-</button>
                    <input type="text" value={1} onChange={() => console.log()} />
                    <button>+</button>
                  </div>
                </div>
                <div className="col_">
                  <p className={styles.total}>Total</p>
                  <p style={{ marginTop: '50px' }}>419.99$</p>
                </div>
              </div>
            </div>
            <div className={styles.cartItem}>
              <div className={styles.cartItemRow}>
                <div className="col_">
                  <div className={styles.imageBlock}>
                    <img
                      src="./images/Revolvers/Taurus_Revolver/Revolver_Taurus_.44 Magnum_4” Barrel___TRACKER 44.webp"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col_">
                  <p className={styles.description}>Decription</p>
                </div>
                <div className="col_">
                  <p className={styles.price}>Price</p>
                  <p style={{ marginTop: '50px' }}>419.99$</p>
                  <div className={styles.counter}>
                    <button>-</button>
                    <input type="text" value={1} onChange={() => console.log()} />
                    <button>+</button>
                  </div>
                </div>
                <div className="col_">
                  <p className={styles.total}>Total</p>
                  <p style={{ marginTop: '50px' }}>419.99$</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cartInfo}>
            <div className={styles.cartInfoContent}>
              <p className={styles.subTotal}>SUBTOTAL: 1679.96</p>
              <p className={styles.shipping}>SHIPPING: 50</p>
              <p className={styles.grndtotal}>GRANDTOTAL: 1729.96</p>
              <button>Check out</button>
              <button>Back to shipping</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
