import clsx from 'clsx';

import styles from './Menu.module.scss';

const Menu = () => {
  return (
    <div className={clsx(styles.mainly)}>
      <div className={styles.mainlycenter}>
        <menu>
          <li className={clsx(styles.red, styles.shop)}>
            <img className={styles.back_menu} src="./img/back.png" alt="error" />
            <a className={clsx(styles.en_text, styles.open_mob)} href="#">
              Firearms
            </a>
            <div className={styles['open-menu-fon']}>
              <div className={clsx(styles['open-menu'], 'center')}>
                <ul className={styles.clearfix}>
                  <li className={clsx(styles['min-menu'], styles['en_text'])}>
                    <a className={clsx(styles.mek, styles.mek_en)} href="#">
                      Pistols
                    </a>
                    <br />
                  </li>

                  <li className={clsx(styles['min-menu'], styles['en_text'])}>
                    <a className={clsx(styles.mek, styles.mek_en)} href="#">
                      Revolvers
                    </a>
                    <br />
                  </li>

                  <li className={clsx(styles['min-menu'], styles['min-menu1'], styles.active_menu, styles.en_text)}>
                    <a className={clsx(styles.mek, styles.mek_en)} href="#">
                      Shot Guns
                    </a>
                    <ul className={clsx(styles.clearfix, styles.clearfix1, styles.d_none)}>
                      <li className={clsx(styles['min-menu'], styles.en_text)}>
                        <a className={clsx(styles.mek, styles.mek_en)} href="#">
                          Revolver
                        </a>
                        <br />
                      </li>

                      <li className={clsx(styles['min-menu'], styles.en_text)}>
                        <a className={clsx(styles.mek, styles.mek_en)} href="#">
                          Derringer
                        </a>
                        <br />
                      </li>

                      <li
                        className={clsx(styles['min-menu'], styles['min-menu2'], styles.active_menu1, styles.en_text)}
                      >
                        <a className={clsx(styles.mek, styles.mek_en)} href="#">
                          Pistol
                        </a>
                        <br />

                        <ul className={clsx(styles.clearfix, styles.clearfix2, styles.d_none)}>
                          <li className={clsx(styles['min-menu'], styles.en_text)}>
                            <a className={clsx(styles.mek, styles.mek_en)} href="products.html">
                              223/5.56
                            </a>
                            <br />
                          </li>

                          <li className={clsx(styles['min-menu'], styles.en_text)}>
                            <a className={clsx(styles.mek, styles.mek_en)} href="#">
                              .38
                            </a>
                            <br />
                          </li>

                          <li className={clsx(styles['min-menu'], styles.en_text)}>
                            <a className={clsx(styles.mek, styles.mek_en)} href="#">
                              .45
                            </a>
                            <br />
                          </li>
                        </ul>
                      </li>

                      <li className={clsx(styles['min-menu'], styles.en_text)}>
                        <a className={clsx(styles.mek, styles.mek_en)} href="#">
                          Revolver
                        </a>
                        <br />
                      </li>
                    </ul>
                  </li>
                  <li className={clsx(styles['min-menu'], styles['min-menu1'], styles.en_text)}>
                    <ul className={clsx(styles.clearfix, styles.clearfix1, styles.d_none)}>
                      <li className={clsx(styles['min-menu'], styles.en_text)}>
                        <a className={clsx(styles.mek, styles.mek_en)} href="#">
                          Derringer
                        </a>
                        <br />
                      </li>

                      <li className={clsx(styles['min-menu'], styles['min-menu2'], styles.en_text)}>
                        <a className={clsx(styles.mek, styles.mek_en)} href="#">
                          Pistol
                        </a>
                        <br />

                        <ul className={clsx(styles.clearfix, styles.clearfix2, styles.d_none)}>
                          <li className={clsx(styles['min-menu'], styles.en_text)}>
                            <a className={clsx(styles.mek, styles.mek_en)} href="products.html">
                              223/5.56
                            </a>
                            <br />
                          </li>

                          <li className={clsx(styles['min-menu'], styles.en_text)}>
                            <a className={clsx(styles.mek, styles.mek_en)} href="#">
                              .38
                            </a>
                            <br />
                          </li>

                          <li className={clsx(styles['min-menu'], styles.en_text)}>
                            <a className={clsx(styles.mek, styles.mek_en)} href="#">
                              .45
                            </a>
                            <br />
                          </li>
                        </ul>
                      </li>

                      <li className={clsx(styles['min-menu'], styles.en_text)}>
                        <a className={clsx(styles.mek, styles.mek_en)} href="#">
                          Revolver
                        </a>
                        <br />
                      </li>
                    </ul>
                  </li>

                  <li className={clsx(styles['min-menu'], styles['min-menu1'], styles.en_text)}>
                    <ul className={clsx(styles.clearfix, styles.clearfix1, styles.d_none)}>
                      <li className={clsx(styles['min-menu'], styles.en_text)}>
                        <a className={clsx(styles.mek, styles.mek_en)} href="#">
                          Revolver
                        </a>
                        <br />
                      </li>

                      <li className={clsx(styles['min-menu'], styles.en_text)}>
                        <a className={clsx(styles.mek, styles.mek_en)} href="#">
                          Derringer
                        </a>
                        <br />
                      </li>

                      <li className={clsx(styles['min-menu'], styles['min-menu2'], styles.en_text)}>
                        <a className={clsx(styles.mek, styles.mek_en)} href="#">
                          Pistol
                        </a>
                        <br />

                        <ul className={clsx(styles.clearfix, styles.clearfix2, styles.d_none)}>
                          <li className={clsx(styles['min-menu'], styles.en_text)}>
                            <a className={clsx(styles.mek, styles.mek_en)} href="products.html">
                              223/5.56
                            </a>
                            <br />
                          </li>

                          <li className={clsx(styles['min-menu'], styles.en_text)}>
                            <a className={clsx(styles.mek, styles.mek_en)} href="#">
                              .38
                            </a>
                            <br />
                          </li>

                          <li className={clsx(styles['min-menu'], styles.en_text)}>
                            <a className={clsx(styles.mek, styles.mek_en)} href="#">
                              .45
                            </a>
                            <br />
                          </li>
                        </ul>
                      </li>

                      <li className={clsx(styles['min-menu'], styles.en_text)}>
                        <a className={clsx(styles.mek, styles.mek_en)} href="#">
                          Revolver
                        </a>
                        <br />
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <img className={styles.more_img} src="./img/more.png" alt="error" />
          </li>
          <li className={clsx(styles.red, styles.shop)}>
            <img className={styles.back_menu} src="./img/back.png" alt="error" />
            <a className={clsx(styles.en_text, styles.open_mob)} href="#">
              Ammo
            </a>
            <div className={styles['open-menu-fon']}>
              <div className={clsx(styles['open-menu'], 'center')}>
                <ul className={styles.clearfix}>
                  <li className={clsx(styles['min-menu'], styles['en_text'])}>
                    <a className={clsx(styles.mek, styles.mek_en)} href="#">
                      Handguns
                    </a>
                    <br />
                  </li>

                  <li className={clsx(styles['min-menu'], styles['en_text'])}>
                    <a className={clsx(styles.mek, styles.mek_en)} href="#">
                      Long Guns
                    </a>
                    <br />
                  </li>

                  <li className={clsx(styles['min-menu'], styles['min-menu1'], styles.en_text)}>
                    <a className={clsx(styles.mek, styles.mek_en)} href="#">
                      Concealed Carry Handguns
                    </a>
                    <br />

                    <ul className={clsx(styles.clearfix, styles.clearfix1, styles.d_none)}>
                      <li className={clsx(styles['min-menu'], styles.en_text)}>
                        <a className={clsx(styles.mek, styles.mek_en)} href="#">
                          Revolver
                        </a>
                        <br />
                      </li>

                      <li className={clsx(styles['min-menu'], styles.en_text)}>
                        <a className={clsx(styles.mek, styles.mek_en)} href="#">
                          Derringer
                        </a>
                        <br />
                      </li>

                      <li className={clsx(styles['min-menu'], styles['min-menu2'], styles.en_text)}>
                        <a className={clsx(styles.mek, styles.mek_en)} href="#">
                          Pistol
                        </a>
                        <br />

                        <ul className={clsx(styles.clearfix, styles.clearfix2, styles.d_none)}>
                          <li className={clsx(styles['min-menu'], styles.en_text)}>
                            <a className={clsx(styles.mek, styles.mek_en)} href="products.html">
                              223/5.56
                            </a>
                            <br />
                          </li>

                          <li className={clsx(styles['min-menu'], styles.en_text)}>
                            <a className={clsx(styles.mek, styles.mek_en)} href="#">
                              .38
                            </a>
                            <br />
                          </li>

                          <li className={clsx(styles['min-menu'], styles.en_text)}>
                            <a className={clsx(styles.mek, styles.mek_en)} href="#">
                              .45
                            </a>
                            <br />
                          </li>
                        </ul>
                      </li>

                      <li className={clsx(styles['min-menu'], styles.en_text)}>
                        <a className={clsx(styles.mek, styles.mek_en)} href="#">
                          Revolver
                        </a>
                        <br />
                      </li>
                    </ul>
                  </li>

                  <li className={clsx(styles['min-menu'], styles.en_text)}>
                    <a className={clsx(styles.mek, styles.mek_en)} href="#">
                      NFA Items
                    </a>
                    <br />
                  </li>
                  <li className={clsx(styles['min-menu'], styles['min-menu1'], styles.en_text)}>
                    <a className={clsx(styles.mek, styles.mek_en)} href="#">
                      Muzzleloaders
                    </a>
                    <br />
                    <ul className={clsx(styles.clearfix, styles.clearfix1, styles.d_none)}>
                      <li className={clsx(styles['min-menu'], styles.en_text)}>
                        <a className={clsx(styles.mek, styles.mek_en)} href="#">
                          Revolver
                        </a>
                        <br />
                      </li>

                      <li className={clsx(styles['min-menu'], styles.en_text)}>
                        <a className={clsx(styles.mek, styles.mek_en)} href="#">
                          Derringer
                        </a>
                        <br />
                      </li>

                      <li className={clsx(styles['min-menu'], styles['min-menu2'], styles.en_text)}>
                        <a className={clsx(styles.mek, styles.mek_en)} href="#">
                          Pistol
                        </a>
                        <br />

                        <ul className={clsx(styles.clearfix, styles.clearfix2, styles.d_none)}>
                          <li className={clsx(styles['min-menu'], styles.en_text)}>
                            <a className={clsx(styles.mek, styles.mek_en)} href="products.html">
                              223/5.56
                            </a>
                            <br />
                          </li>

                          <li className={clsx(styles['min-menu'], styles.en_text)}>
                            <a className={clsx(styles.mek, styles.mek_en)} href="#">
                              .38
                            </a>
                            <br />
                          </li>

                          <li className={clsx(styles['min-menu'], styles.en_text)}>
                            <a className={clsx(styles.mek, styles.mek_en)} href="#">
                              .45
                            </a>
                            <br />
                          </li>
                        </ul>
                      </li>

                      <li className={clsx(styles['min-menu'], styles.en_text)}>
                        <a className={clsx(styles.mek, styles.mek_en)} href="#">
                          Revolver
                        </a>
                        <br />
                      </li>
                    </ul>
                  </li>
                  <li className={clsx(styles['min-menu'], styles.en_text)}>
                    <a className={clsx(styles.mek, styles.mek_en)} href="#">
                      Left-Handed
                    </a>
                    <br />
                  </li>

                  <li className={clsx(styles['min-menu'], styles['min-menu1'], styles.en_text)}>
                    <a className={clsx(styles.mek, styles.mek_en)} href="#">
                      View All Firearm Types
                    </a>
                    <br />
                    <ul className={clsx(styles.clearfix, styles.clearfix1, styles.d_none)}>
                      <li className={clsx(styles['min-menu'], styles.en_text)}>
                        <a className={clsx(styles.mek, styles.mek_en)} href="#">
                          Revolver
                        </a>
                        <br />
                      </li>

                      <li className={clsx(styles['min-menu'], styles.en_text)}>
                        <a className={clsx(styles.mek, styles.mek_en)} href="#">
                          Derringer
                        </a>
                        <br />
                      </li>

                      <li className={clsx(styles['min-menu'], styles['min-menu2'], styles.en_text)}>
                        <a className={clsx(styles.mek, styles.mek_en)} href="#">
                          Pistol
                        </a>
                        <br />

                        <ul className={clsx(styles.clearfix, styles.clearfix2, styles.d_none)}>
                          <li className={clsx(styles['min-menu'], styles.en_text)}>
                            <a className={clsx(styles.mek, styles.mek_en)} href="products.html">
                              223/5.56
                            </a>
                            <br />
                          </li>

                          <li className={clsx(styles['min-menu'], styles.en_text)}>
                            <a className={clsx(styles.mek, styles.mek_en)} href="#">
                              .38
                            </a>
                            <br />
                          </li>

                          <li className={clsx(styles['min-menu'], styles.en_text)}>
                            <a className={clsx(styles.mek, styles.mek_en)} href="#">
                              .45
                            </a>
                            <br />
                          </li>
                        </ul>
                      </li>

                      <li className={clsx(styles['min-menu'], styles.en_text)}>
                        <a className={clsx(styles.mek, styles.mek_en)} href="#">
                          Revolver
                        </a>
                        <br />
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className={clsx(styles.shop, styles.red)}>
            <img className={styles.back_menu} src="./img/back.png" alt="error" />
            <a className={clsx(styles.en_text, styles.open_mob)} href="#">
              Accessories
            </a>
            <div className={styles['open-menu-fon']}>
              <div className={clsx(styles['open-menu'], 'center')}>
                <ul className={styles.clearfix}>
                  <li className={clsx(styles['min-menu'], styles['en_text'])}>
                    <a className={clsx(styles.mek, styles.mek_en)} href="#">
                      Handguns
                    </a>
                    <br />
                  </li>

                  <li className={clsx(styles['min-menu'], styles['en_text'])}>
                    <a className={clsx(styles.mek, styles.mek_en)} href="#">
                      Long Guns
                    </a>
                    <br />
                  </li>

                  <li className={clsx(styles['min-menu'], styles['min-menu1'], styles.en_text)}>
                    <a className={clsx(styles.mek, styles.mek_en)} href="#">
                      Concealed Carry Handguns
                    </a>
                    <br />

                    <ul className={clsx(styles.clearfix, styles.clearfix1, styles.d_none)}>
                      <li className={clsx(styles['min-menu'], styles.en_text)}>
                        <a className={clsx(styles.mek, styles.mek_en)} href="#">
                          Revolver
                        </a>
                        <br />
                      </li>

                      <li className={clsx(styles['min-menu'], styles.en_text)}>
                        <a className={clsx(styles.mek, styles.mek_en)} href="#">
                          Derringer
                        </a>
                        <br />
                      </li>

                      <li className={clsx(styles['min-menu'], styles['min-menu2'], styles.en_text)}>
                        <a className={clsx(styles.mek, styles.mek_en)} href="#">
                          Pistol
                        </a>
                        <br />

                        <ul className={clsx(styles.clearfix, styles.clearfix2, styles.d_none)}>
                          <li className={clsx(styles['min-menu'], styles.en_text)}>
                            <a className={clsx(styles.mek, styles.mek_en)} href="products.html">
                              223/5.56
                            </a>
                            <br />
                          </li>

                          <li className={clsx(styles['min-menu'], styles.en_text)}>
                            <a className={clsx(styles.mek, styles.mek_en)} href="#">
                              .38
                            </a>
                            <br />
                          </li>

                          <li className={clsx(styles['min-menu'], styles.en_text)}>
                            <a className={clsx(styles.mek, styles.mek_en)} href="#">
                              .45
                            </a>
                            <br />
                          </li>
                        </ul>
                      </li>

                      <li className={clsx(styles['min-menu'], styles.en_text)}>
                        <a className={clsx(styles.mek, styles.mek_en)} href="#">
                          Revolver
                        </a>
                        <br />
                      </li>
                    </ul>
                  </li>

                  <li className={clsx(styles['min-menu'], styles.en_text)}>
                    <a className={clsx(styles.mek, styles.mek_en)} href="#">
                      NFA Items
                    </a>
                    <br />
                  </li>
                  <li className={clsx(styles['min-menu'], styles['min-menu1'], styles.en_text)}>
                    <a className={clsx(styles.mek, styles.mek_en)} href="#">
                      Muzzleloaders
                    </a>
                    <br />
                    <ul className={clsx(styles.clearfix, styles.clearfix1, styles.d_none)}>
                      <li className={clsx(styles['min-menu'], styles.en_text)}>
                        <a className={clsx(styles.mek, styles.mek_en)} href="#">
                          Revolver
                        </a>
                        <br />
                      </li>

                      <li className={clsx(styles['min-menu'], styles.en_text)}>
                        <a className={clsx(styles.mek, styles.mek_en)} href="#">
                          Derringer
                        </a>
                        <br />
                      </li>

                      <li className={clsx(styles['min-menu'], styles['min-menu2'], styles.en_text)}>
                        <a className={clsx(styles.mek, styles.mek_en)} href="#">
                          Pistol
                        </a>
                        <br />

                        <ul className={clsx(styles.clearfix, styles.clearfix2, styles.d_none)}>
                          <li className={clsx(styles['min-menu'], styles.en_text)}>
                            <a className={clsx(styles.mek, styles.mek_en)} href="products.html">
                              223/5.56
                            </a>
                            <br />
                          </li>

                          <li className={clsx(styles['min-menu'], styles.en_text)}>
                            <a className={clsx(styles.mek, styles.mek_en)} href="#">
                              .38
                            </a>
                            <br />
                          </li>

                          <li className={clsx(styles['min-menu'], styles.en_text)}>
                            <a className={clsx(styles.mek, styles.mek_en)} href="#">
                              .45
                            </a>
                            <br />
                          </li>
                        </ul>
                      </li>

                      <li className={clsx(styles['min-menu'], styles.en_text)}>
                        <a className={clsx(styles.mek, styles.mek_en)} href="#">
                          Revolver
                        </a>
                        <br />
                      </li>
                    </ul>
                  </li>
                  <li className={clsx(styles['min-menu'], styles.en_text)}>
                    <a className={clsx(styles.mek, styles.mek_en)} href="#">
                      Left-Handed
                    </a>
                    <br />
                  </li>

                  <li className={clsx(styles['min-menu'], styles['min-menu1'], styles.en_text)}>
                    <a className={clsx(styles.mek, styles.mek_en)} href="#">
                      View All Firearm Types
                    </a>
                    <br />
                    <ul className={clsx(styles.clearfix, styles.clearfix1, styles.d_none)}>
                      <li className={clsx(styles['min-menu'], styles.en_text)}>
                        <a className={clsx(styles.mek, styles.mek_en)} href="#">
                          Revolver
                        </a>
                        <br />
                      </li>

                      <li className={clsx(styles['min-menu'], styles.en_text)}>
                        <a className={clsx(styles.mek, styles.mek_en)} href="#">
                          Derringer
                        </a>
                        <br />
                      </li>

                      <li className={(styles['min-menu'], styles['min-menu2'], styles.en_text)}>
                        <a className={clsx(styles.mek, styles.mek_en)} href="#">
                          Pistol
                        </a>
                        <br />

                        <ul className={clsx(styles.clearfix, styles.clearfix2, styles.d_none)}>
                          <li className={clsx(styles['min-menu'], styles.en_text)}>
                            <a className={clsx(styles.mek, styles.mek_en)} href="products.html">
                              223/5.56
                            </a>
                            <br />
                          </li>

                          <li className={clsx(styles['min-menu'], styles.en_text)}>
                            <a className={clsx(styles.mek, styles.mek_en)} href="#">
                              .38
                            </a>
                            <br />
                          </li>

                          <li className={clsx(styles['min-menu'], styles.en_text)}>
                            <a className={clsx(styles.mek, styles.mek_en)} href="#">
                              .45
                            </a>
                            <br />
                          </li>
                        </ul>
                      </li>

                      <li className={clsx(styles['min-menu'], styles.en_text)}>
                        <a className={clsx(styles.mek, styles.mek_en)} href="#">
                          Revolver
                        </a>
                        <br />
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className={clsx(styles.shop, styles.red)}>
            <img className={styles.back_menu} src="./img/back.png" alt="error" />
            <a className={clsx(styles.en_text, styles.open_mob)} href="#">
              Special Deals
            </a>
          </li>
          <li className={clsx(styles.shop, styles.red)}>
            <img className={styles.back_menu} src="./img/back.png" alt="error" />
            <a className={clsx(styles.en_text, styles.open_mob)} href="#">
              Gift cards
            </a>
          </li>
          <li className={clsx(styles.red, styles.shop)}>
            <img className={styles.back_menu} src="./img/back.png" alt="error" />
            <a className={clsx(styles.en_text, styles.open_mob)} href="#">
              Auctions
            </a>
          </li>
          <li className={clsx(styles.red, styles.shop)}>
            <img className={styles.back_menu} src="./img/back.png" alt="error" />
            <a className={clsx(styles.en_text, styles.open_mob)} href="#">
              Manufacturers
            </a>
          </li>
        </menu>
      </div>
    </div>
  );
};

export default Menu;
