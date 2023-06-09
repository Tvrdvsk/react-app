import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import clsx from 'clsx';

import Modal from '../../../modal/Modal';
import SideBar from '../sideBar/sideBar';

import styles from './Header.module.scss';

const Header = () => {
  const [active, setActive] = useState<boolean>();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const users = localStorage.getItem('users');
  const parsedUsers = JSON.parse(users!);
  const currentUser = localStorage.getItem('currentUser');
  return (
    <header className={styles.topSection}>
      <div className={styles.boxShadow}>
        <div className={styles.boxShow}>
          <div className={clsx(styles.topContainer, 'center')}>
            <span className={styles.logo}>
              <Link to="/">
                <img
                  src={window.location.pathname.includes('products') ? '../img/ak-12.png' : './img/ak-12.png'}
                  alt="error"
                  className={styles.logoImg}
                />
              </Link>
            </span>
            <form className={styles.search}>
              <input className={styles.search_in} type="text" placeholder="search" />
              <img
                className={styles.search_img_b}
                src={window.location.pathname.includes('products') ? '../img/Layer%202.png' : './img/Layer%202.png'}
                alt="error"
              />
              <img
                className={styles.search_img}
                src={window.location.pathname.includes('products') ? '../img/Layer%202.png' : './img/Layer%202.png'}
                alt="error"
              />
              <img
                className={styles.close_search}
                src={window.location.pathname.includes('products') ? '../img/close.png' : './img/close.png'}
                alt="error"
              />
            </form>

            <div className={styles.centerInfo}>
              <div className={styles.login}>
                <img
                  src={window.location.pathname.includes('products') ? '../img/login-01.png' : './img/login-01.png'}
                  alt="error"
                  onClick={() => {
                    if (localStorage.getItem('currentUser')) {
                      localStorage.removeItem('currentUser');
                      navigate('/');
                    }
                  }}
                />
                {!localStorage.getItem('currentUser') ? (
                  <p
                    onClick={() => {
                      setSearchParams({ mode: 'signIn' });
                      setActive(true);
                    }}
                    className={styles.en_text}
                  >
                    Log In/ Sign Up
                  </p>
                ) : (
                  <p onClick={() => navigate('/user-profile/?type=addresses')} className={styles.en_text}>{`${
                    parsedUsers[currentUser!].firstName
                  } ${parsedUsers[currentUser!].lastName}`}</p>
                )}
                <p className={clsx(styles.ru_text, styles.d_none)}>Войти/ Регистрация</p>
                <p className={clsx(styles.am_text, styles.d_none)}>Մուտք/ Գրանցվել</p>
              </div>
            </div>

            <div className={styles.right_container}>
              <div className={styles.basket}>
                <Link to="/cart">
                  <img
                    src={
                      window.location.pathname.includes('products')
                        ? '../img/shopping-bag%20(1).png'
                        : './img/shopping-bag%20(1).png'
                    }
                    alt="error"
                  />
                  {!!localStorage.getItem('cart') && (
                    <div className={styles.number}>
                      <span className={styles.b_items_count}>{JSON.parse(localStorage.getItem('cart')!)?.length}</span>
                    </div>
                  )}
                </Link>
              </div>
              <img
                className={styles.menu_img_open}
                src={window.location.pathname.includes('products') ? '../img/menu_im.png' : './img/menu_im.png'}
                alt="error"
              />
              <img
                className={clsx(styles.close_menu, styles.m_done)}
                src={window.location.pathname.includes('products') ? '../img/close.png' : './img/close.png'}
                alt="error"
              />
            </div>
          </div>
        </div>
        <SideBar />
      </div>
      <Modal active={active} setActive={setActive} />
    </header>
  );
};

export default Header;
