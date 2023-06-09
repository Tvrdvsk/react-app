import React, { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import clsx from 'clsx';

import ProductItem from '../../components/product-item/ProductItem';
import ProductsSlider from '../../components/products-slider/ProductsSlider';
import { data } from '../home-page/constants/constants';

import styles from './Products.module.scss';

const Products = () => {
  const [sortOpen, setSortOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSort = () => {
    setSortOpen(prev => !prev);
  };

  const renderProducts = useMemo(() => {
    if (!searchParams.get('filter')) {
      return (
        <div className={styles.pageRow}>
          <div className="col_">
            <ProductItem
              price="419.99"
              img="../images/Revolvers/Taurus_Revolver/Revolver_Taurus_38 Special_2” Barrel___TAURUS 856.webp"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="268.85"
              img="../images/Pistols/Pistol_Hammer Fired/Berreta_Pistol/Hammer Fired_Berreta_9mm____92X Performance Carry Optic.webp"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="268.85"
              img="../images/Pistols/Pistol_Striker Fired/Pistol_Smith & Wesson/Pistol_Striker Fired_Smith & Wesson_9mm___M&P 2.0 FULL SIZE SERIES.webp"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="268.85"
              img="../images/Revolvers/Colt_Revolver/Revolver_Colt_38 Special_2” Barrel_____COBRA TWO-TONE (38SPL).jpg"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="268.85"
              img="../images/Revolvers/Smith&Wesson_Revolver/Revolver_Smith & Wesson_.44 Magnum_4” Barrel___K-FRAME SERIES.webp"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="268.85"
              img="../images/Rifles/Rifles_Sig Saur/Rifles_Sig Saur_9mm_Semi-Auto____SIG MPX PCC.jpg"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="268.85"
              img="../images/Shot Guns/Mossberg_Shot gun/Shot gun_Mossberg_12G_Pump-action____590A1 RETROGRADE.jpg"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="268.85"
              img="../images/Shot Guns/Mossberg_Shot gun/Shot gun_Mossberg_12G_Pump-action____590A1 RETROGRADE.jpg"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="268.85"
              img="../images/Shot Guns/Mossberg_Shot gun/Shot gun_Mossberg_20G_Pump-action____510 MINI SUPER BANTAM – ALL-PURPOSE.jpg"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="268.85"
              img="../images/Shot Guns/Browning_Shot guns/Shot Guns_Browning_10G_Semi Auto_____Gold Light 10 Gauge Field – Auric.webp"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="268.85"
              img="../images/Shot Guns/Browning_Shot guns/Shot Guns_Browning_20G_Pump action_____BPS Field Composite.webp"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
        </div>
      );
    }
    if (searchParams.get('filter') === 'taurus') {
      return (
        <div className={styles.pageRow}>
          <div className="col_">
            <ProductItem
              price="419.99"
              img="../images/Revolvers/Taurus_Revolver/Revolver_Taurus_38 Special_2” Barrel___TAURUS 856.webp"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="268.85"
              img="../images/Pistols/Pistol_Striker Fired/Pistol_Taurus/Striker Fired_9mm_Taurus___TAURUS 1911 Commander 9mm Luger Matte Black.webp"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="268.85"
              img="../images/Pistols/Pistol_Striker Fired/Pistol_Taurus/Striker Fired_Taurus_ LR 0.22_TAURUSTX 22 Competition SCR Hard Anodized Black 22 LR Black Polymer Frame 10-Rounds.webp"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="419.99"
              img="../images/Revolvers/Taurus_Revolver/Revolver_Taurus_.44 Magnum_4” Barrel___TRACKER 44.webp"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="268.85"
              img="../images/Revolvers/Taurus_Revolver/Revolver_Taurus_.357 Magnum_2” Barrel___TAURUS DEFENDER 605.webp"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="268.85"
              img="../images/Pistols/Pistol_Striker Fired/Pistol_Taurus/Pistol_Striker Fired_Taurus_.45ACP_5” Barrel__TAURUS 1911.webp"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
        </div>
      );
    }
    if (searchParams.get('filter') === 'LR0.22') {
      return (
        <div className={styles.pageRow}>
          <div className="col_">
            <ProductItem
              price="419.99"
              img="../images/Pistols/Pistol_Striker Fired/Pistol_Taurus/Striker Fired_Taurus_ LR 0.22_TAURUSTX 22 Competition SCR Hard Anodized Black 22 LR Black Polymer Frame 10-Rounds.webp"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="268.85"
              img="../images/Revolvers/Smith&Wesson_Revolver/Revolver_Smith & Wesson_LR0.22_4” Barrel__K_FRAME SERIES MODEL 617 4 BARREL.webp"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="268.85"
              img="../images/Revolvers/Ruger_Revolver/Revolver_Ruger_LR 0.22___Cushioned Rubber with Hardwood Insert.jpg"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="419.99"
              img="../images/Pistols/Pistol_Striker Fired/Pistol_Smith & Wesson/Striker Fired_Smith & Wesson_ LR 0.22___K_FRAME SERIES MODEL 617 4 BARREL.webp"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="268.85"
              img="../images/Pistols/Pistol_Hammer Fired/Berreta_Pistol/Hammer Fired_Berreta_LR 0.22____Beretta 92FSR .22 Sniper Grey.webp"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="268.85"
              img="../images/Pistols/Pistol_Hammer Fired/Sig Saur_Pistol/Hammer Fired_Sig Saur_ LR 0.22_____P322.jpg"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="268.85"
              img="../images/Pistols/Pistol_Hammer Fired/Browning_Pistol/Hammer Fired_Browning_LR 0.22___Buck Mark Camper UFX.webp"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="268.85"
              img="../images/Pistols/Pistol_Hammer Fired/Browning_Pistol/Hammer Fired_Browning_LR 0.22___Buck Mark Hunter.webp"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="268.85"
              img="../images/Pistols/Pistol_Hammer Fired/Browning_Pistol/Hammer Fired_Browning_LR 0.22___Buck Mark Micro Bull Suppressor Ready.webp"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
        </div>
      );
    }
    if (searchParams.get('filter') === 'handguns') {
      return (
        <div className={styles.pageRow}>
          <div className="col_">
            <ProductItem
              price="419.99"
              img="../images/Revolvers/Colt_Revolver/Revolver_Colt_.357 Magnum_2” Barrel___COLT KING COBRA CARRY .357 MAGNUM 6RD 2” STAINLESS KCOBRA-SB2BB-S.jpg"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="268.85"
              img="../images/Revolvers/Colt_Revolver/Revolver_Colt_38 Special_2” Barrel_____COBRA TWO-TONE (38SPL).jpg"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="268.85"
              img="../images/Revolvers/Colt_Revolver/Revolver_Colt_44 Magnum_6 Barrel_____COLT'S MANUFACTURING ANACONDA, REVOLVER, 44 MAGNUM, 6 BARREL, SEMI-BRIGHT STAINLESS FINISH, HOGUE GRIP, 6 ROUNDS ANACONDA-SP6RTS.jpg"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="419.99"
              img="../images/Revolvers/Colt_Revolver/Revolver_Colt_44 Magnum_8 Barrel_____COLT ANACONDA .44 MAGNUM 6RD 8 BARREL STAINLESS ANACONDA-SP8RTS.jpg"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="268.85"
              img="../images/Revolvers/Ruger_Revolver/Revolver_Ruger_357 Magnum_6 Barrel___Hogue Monogrip.jpg"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="268.85"
              img="../images/Revolvers/Ruger_Revolver/Revolver_Ruger_LR 0.22___Cushioned Rubber with Hardwood Insert.jpg"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="268.85"
              img="../images/Revolvers/Smith&Wesson_Revolver/Revolver_Smith & Wesson_.44 Magnum_4” Barrel___K-FRAME SERIES.webp"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="268.85"
              img="../images/Revolvers/Smith&Wesson_Revolver/Revolver_Smith & Wesson_LR0.22_4” Barrel__K_FRAME SERIES MODEL 617 4 BARREL.webp"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="268.85"
              img="../images/Revolvers/Smith&Wesson_Revolver/Revolvers_Smith & Wesson_.357 Magnum___K_FRAME SERIES MODEL 617 .webp"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="268.85"
              img="../images/Revolvers/Smith&Wesson_Revolver/Revolvers_Smith & Wesson_38 Speciall___K_FRAME SERIES MODEL 617.webp"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="268.85"
              img="../images/Revolvers/Taurus_Revolver/Revolver_Taurus_.44 Magnum_4” Barrel___TRACKER 44.webp"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="268.85"
              img="../images/Revolvers/Taurus_Revolver/Revolver_Taurus_.357 Magnum_2” Barrel___TAURUS DEFENDER 605.webp"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="268.85"
              img="../images/Revolvers/Taurus_Revolver/Revolver_Taurus_38 Special_2” Barrel___TAURUS 856.webp"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
        </div>
      );
    }
    if (searchParams.get('filter') === 'shotguns') {
      return (
        <div className={styles.pageRow}>
          <div className="col_">
            <ProductItem
              price="419.99"
              img="../images/Shot Guns/Browning_Shot guns/Shot Guns_Browning_10G_Pump_____BPS 10 Gauge Field Composite.webp"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="268.85"
              img="../images/Shot Guns/Browning_Shot guns/Shot Guns_Browning_12G_Pump_____BPS Field Composite.webp"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="268.85"
              img="../images/Shot Guns/Browning_Shot guns/Shot Guns_Browning_12G_Single shot_____BT-99 Micro with Adjustable Buttplate and Comb.webp"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="419.99"
              img="../images/Shot Guns/Mossberg_Shot gun/Shot gun_Mossberg_12G_Semi auto____940 PRO TACTICAL - HOLOSUN MICRO DOT COMBO.jpg"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="268.85"
              img="../images/Shot Guns/Mossberg_Shot gun/Shot gun_Mossberg_20G_Pump-action____500 SUPER BANTAM – WATERFOWL.jpg"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="col_">
            <ProductItem
              price="268.85"
              img="../images/Shot Guns/Mossberg_Shot gun/Shot gun_Mossberg_20G_Pump-action____510 MINI SUPER BANTAM – ALL-PURPOSE.jpg"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
        </div>
      );
    }
    if (searchParams.get('filter') === 'rifles') {
      return (
        <div className={styles.pageRow}>
          <div className="col_">
            <ProductItem
              price="419.99"
              img="../images/Rifles/Rifles_Sig Saur/Rifles_Sig Saur_9mm_Semi-Auto____SIG MPX PCC.jpg"
              name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
        </div>
      );
    }
  }, [searchParams.get('filter')]);
  return (
    <div className="center">
      <div className={styles.navigation}>
        <Link to="#" className={styles.start}>
          Home
        </Link>
        <span> &gt; </span>
        <Link to="#">FIREARMS</Link>
        <span> &gt; </span>
        <Link to="/products">HANDGUNS</Link>
      </div>
      <div className={styles.sort_filter}>
        <div className={styles.st_mob}>
          <p onClick={handleSort}>Sort by</p>
          <img src="../img/boot.png" alt="error" />

          <div className={clsx(styles.sort_select, { [styles.d_none]: !sortOpen })}>
            <Link to="#">Views</Link>
            <Link to="#">Price Low to High</Link>
            <Link to="#">Price High to Low</Link>
            <Link to="#">Latest added</Link>
          </div>
        </div>
      </div>
      <div className={styles.pageContent}>
        <aside>
          <div className={styles.face_menu_section}>
            <div className={styles.face_menu}>
              <div className={styles.face_menu_description}>
                <h2>TYPE</h2>
                <ul className={styles.cont_filter}>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input
                        type="checkbox"
                        className={styles.checkbox}
                        checked={searchParams.get('filter') === 'handguns'}
                        onClick={() =>
                          searchParams.get('filter') === 'handguns'
                            ? setSearchParams({})
                            : setSearchParams({ filter: 'handguns' })
                        }
                      />
                      <span className={styles.fake}></span>
                      <span>Handguns</span>
                    </label>
                  </li>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input
                        type="checkbox"
                        className={styles.checkbox}
                        checked={searchParams.get('filter') === 'shotguns'}
                        onClick={() =>
                          searchParams.get('filter') === 'shotguns'
                            ? setSearchParams({})
                            : setSearchParams({ filter: 'shotguns' })
                        }
                      />
                      <span className={styles.fake}></span>
                      <span>Shot Guns</span>
                    </label>
                  </li>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input
                        type="checkbox"
                        className={styles.checkbox}
                        checked={searchParams.get('filter') === 'rifles'}
                        onClick={() =>
                          searchParams.get('filter') === 'rifles'
                            ? setSearchParams({})
                            : setSearchParams({ filter: 'rifles' })
                        }
                      />
                      <span className={styles.fake}></span>
                      <span>Rifles</span>
                    </label>
                  </li>
                  <li className={styles.filter_name}>
                    <span className={styles.face_menu_nav_plu}>+</span> <span>View All Firearm</span>
                  </li>
                </ul>
              </div>
              <div className={styles.face_menu_nav}>
                <div className={styles.brand_nav}>
                  <h3>Caliber</h3>
                  <img className={styles.open_cont_pr} src="./img/boot.png" alt="" />
                </div>
                <ul className={styles.cont_filter}>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input
                        type="checkbox"
                        className={styles.checkbox}
                        checked={searchParams.get('filter') === 'LR0.22'}
                        onClick={() =>
                          searchParams.get('filter') === 'LR0.22'
                            ? setSearchParams({})
                            : setSearchParams({ filter: 'LR0.22' })
                        }
                      />
                      <span className={styles.fake}></span>
                      <span>LR 0.22</span>
                    </label>
                  </li>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span>38 Special</span>
                    </label>
                  </li>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span> .357 Magnum</span>
                    </label>
                  </li>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span>.44 Magnum</span>
                    </label>
                  </li>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span>7.65 ACP</span>
                    </label>
                  </li>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span>.380 ACP</span>
                    </label>
                  </li>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span>9mm</span>
                    </label>
                  </li>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span>10mm</span>
                    </label>
                  </li>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span>.45ACP</span>
                    </label>
                  </li>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span>0.223</span>
                    </label>
                  </li>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span>3036</span>
                    </label>
                  </li>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span>300 WinMag</span>
                    </label>
                  </li>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span>.308 Lapua</span>
                    </label>
                  </li>
                </ul>
              </div>
              <div className={styles.face_menu_nav}>
                <div className={styles.brand_nav}>
                  <h3>Handguns</h3>
                  <img className={styles.open_cont_pr} src="./img/boot.png" alt="" />
                </div>
                <ul className={styles.cont_filter}>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span>Revolvers</span>
                    </label>
                  </li>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span>Pistol</span>
                    </label>
                  </li>
                  <li className={styles.filter_name}>
                    <span className={styles.face_menu_nav_plu}>+</span> <span>View All Handguns</span>
                  </li>
                </ul>
              </div>
              <div className={styles.face_menu_nav}>
                <div className={styles.brand_nav}>
                  <h3>Pistol</h3>
                  <img className={styles.open_cont_pr} src="./img/boot.png" alt="" />
                </div>
                <ul className={styles.cont_filter}>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span>Hammer Fired</span>
                    </label>
                  </li>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span>Striker Fired</span>
                    </label>
                  </li>
                </ul>
              </div>
              <div className={styles.face_menu_nav}>
                <div className={styles.brand_nav}>
                  <h3>Brand</h3>
                  <img className={styles.open_cont_pr} src="./img/boot.png" alt="" />
                </div>
                <ul className={styles.cont_filter}>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input
                        type="checkbox"
                        className={styles.checkbox}
                        checked={searchParams.get('filter') === 'taurus'}
                        onClick={() =>
                          searchParams.get('filter') === 'taurus'
                            ? setSearchParams({})
                            : setSearchParams({ filter: 'taurus' })
                        }
                      />
                      <span className={styles.fake}></span>
                      <span>Taurus</span>
                    </label>
                  </li>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span>Colt</span>
                    </label>
                  </li>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span>Ruger</span>
                    </label>
                  </li>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span>Beretta</span>
                    </label>
                  </li>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span>Sig Saur</span>
                    </label>
                  </li>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span>Browning</span>
                    </label>
                  </li>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span>Glock</span>
                    </label>
                  </li>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span>Benelli</span>
                    </label>
                  </li>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span>Moossberg</span>
                    </label>
                  </li>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span>Bergara</span>
                    </label>
                  </li>
                </ul>
              </div>
              <div className={styles.face_menu_nav}>
                <div className={styles.brand_nav}>
                  <h3>Barrel Size in inch</h3>
                  <img className={styles.open_cont_pr} src="./img/boot.png" alt="" />
                </div>
                <ul className={styles.cont_filter}>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span>6.1 1”</span>
                    </label>
                  </li>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span>6.2 2”</span>
                    </label>
                  </li>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span>6.3 4”</span>
                    </label>
                  </li>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span>6.4 5”</span>
                    </label>
                  </li>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span>6.5 6”</span>
                    </label>
                  </li>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span>6.6 8”</span>
                    </label>
                  </li>
                </ul>
              </div>
              <div className={styles.face_menu_nav}>
                <div className={styles.brand_nav}>
                  <h3>Gauge</h3>
                  <img className={styles.open_cont_pr} src="./img/boot.png" alt="" />
                </div>
                <ul className={styles.cont_filter}>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span>20G</span>
                    </label>
                  </li>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span>16G</span>
                    </label>
                  </li>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span>12G</span>
                    </label>
                  </li>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span>10G</span>
                    </label>
                  </li>
                </ul>
              </div>
              <div className={styles.face_menu_nav}>
                <div className={styles.brand_nav}>
                  <h3>Action</h3>
                  <img className={styles.open_cont_pr} src="./img/boot.png" alt="" />
                </div>
                <ul className={styles.cont_filter}>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span>Pump Action</span>
                    </label>
                  </li>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span>Single shot </span>
                    </label>
                  </li>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span>Over Under</span>
                    </label>
                  </li>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span>Bolt Action</span>
                    </label>
                  </li>
                  <li className={styles.filter_name}>
                    <label className={styles.label}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.fake}></span>
                      <span>Semi Automatic</span>
                    </label>
                  </li>
                </ul>
              </div>
              <div className={styles.face_menu_nav}>
                <div className={styles.brand_nav}>
                  <h3>
                    Handguns ∙ <span>$</span>
                  </h3>
                  <img className={styles.open_cont_pr} src="./img/boot.png" alt="" />
                </div>
                <div className={styles['range-slider']}>
                  <span className={styles.rangeValues}></span>
                  <input value="200" min="500" max="50000" step="500" type="range" onChange={() => console.log()} />
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div className={styles.pageItems}>{renderProducts}</div>
      </div>
      <ProductsSlider title="RECENT PRICE DROPS" data={data} />
    </div>
  );
};

export default Products;
