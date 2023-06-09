import { useNavigate } from 'react-router-dom';

import styles from './sidebar.module.scss';

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <nav className={styles.dws_menu}>
      <ul>
        <li>
          <a>FIREARMS</a>
          <ul>
            <li>
              <a onClick={() => navigate('/products/?filter=handguns')}>Hand Guns</a>
              <ul>
                <li>
                  <a href="/products">Revolvers</a>
                  <ul>
                    <li>
                      <a href="/products">Calibers</a>
                      <ul>
                        <li>
                          <a onClick={() => navigate('/products/?filter=LR0.22')}>LR 0.22</a>
                        </li>
                        <li>
                          <a href="/products">38 Special</a>
                        </li>
                        <li>
                          <a href="/products">.357 Magnum</a>
                        </li>
                        <li>
                          <a href="/products">.44 Magnum</a>
                        </li>
                        <li>
                          <a href="/products">View more</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/products">Brands</a>
                      <ul>
                        <li>
                          <a href="/products">Smith&Wesson</a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/products/?filter=taurus')}>Taurus</a>
                        </li>
                        <li>
                          <a href="/products">Colt</a>
                        </li>
                        <li>
                          <a href="/products">Ruger</a>
                        </li>
                        <li>
                          <a href="/products">View more</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/products">Barrel in inch</a>
                    </li>
                    <ul>
                      <li>
                        <a href="/products">1"</a>
                      </li>
                      <li>
                        <a href="/products">2"</a>
                      </li>
                      <li>
                        <a href="/products">4"</a>
                      </li>
                      <li>
                        <a href="/products">6"</a>
                      </li>
                      <li>
                        <a href="/products">8</a>
                      </li>
                    </ul>
                  </ul>
                </li>
                <li>
                  <a href="/products">Pistols</a>
                  <ul>
                    <li>
                      <a href="/products">Hammer Fired</a>
                      <ul>
                        <li>
                          <a href="/products">Calibers</a>
                          <ul>
                            <li>
                              <a onClick={() => navigate('/products/?filter=LR0.22')}>LR 0.22</a>
                            </li>
                            <li>
                              <a href="/products">7.65 ACP</a>
                            </li>
                            <li>
                              <a href="/products">.380 ACP</a>
                            </li>
                            <li>
                              <a href="/products">9mm</a>
                            </li>
                            <li>
                              <a href="/products">10mm</a>
                            </li>
                            <li>
                              <a href="/products">45ACP</a>
                            </li>
                            <li>
                              <a href="/products">View More</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/products">Brands</a>
                          <ul>
                            <li>
                              <a href="/products">Beretta</a>
                            </li>
                            <li>
                              <a href="/products">Sig Saur</a>
                            </li>
                            <li>
                              <a href="/products">Browning</a>
                            </li>
                            <li>
                              <a href="/products">View more</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/products">Barrel in inch</a>
                          <ul>
                            <li>
                              <a href="/products">1"</a>
                            </li>
                            <li>
                              <a href="/products">2"</a>
                            </li>
                            <li>
                              <a href="/products">4"</a>
                            </li>
                            <li>
                              <a href="/products">5"</a>
                            </li>
                            <li>
                              <a href="/products">6"</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/products">Striker Fired</a>
                      <ul>
                        <li>
                          <a href="/products">Calibers</a>
                          <ul>
                            <li>
                              <a onClick={() => navigate('/products/?filter=LR0.22')}>LR 0.22</a>
                            </li>
                            <li>
                              <a href="/products">7.65 ACP</a>
                            </li>
                            <li>
                              <a href="/products">.380 ACP</a>
                            </li>
                            <li>
                              <a href="/products">9mm</a>
                            </li>
                            <li>
                              <a href="/products">10mm</a>
                            </li>
                            <li>
                              <a href="/products">45ACP</a>
                            </li>
                            <li>
                              <a href="/products">View More</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/products">Brands</a>
                          <ul>
                            <li>
                              <a href="/products">Glock</a>
                            </li>
                            <li>
                              <a href="/products">Smith&Wesson</a>
                            </li>
                            <li>
                              <a onClick={() => navigate('/products/?filter=taurus')}>Taurus</a>
                            </li>
                            <li>
                              <a href="/products">View more</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/products">Barrel in inch</a>
                          <ul>
                            <li>
                              <a href="/products">1"</a>
                            </li>
                            <li>
                              <a href="/products">2"</a>
                            </li>
                            <li>
                              <a href="/products">4"</a>
                            </li>
                            <li>
                              <a href="/products">5"</a>
                            </li>
                            <li>
                              <a href="/products">6"</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a onClick={() => navigate('/products/?filter=shotguns')}>Shot Guns</a>
              <ul>
                <li>
                  <a href="/products">Gauge</a>
                  <ul>
                    <li>
                      <a href="/products">20G</a>
                    </li>
                    <li>
                      <a href="/products">16G</a>
                    </li>
                    <li>
                      <a href="/products">12G</a>
                    </li>
                    <li>
                      <a href="/products">10G</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/products">Brands</a>
                  <ul>
                    <li>
                      <a href="/products">Benelli</a>
                    </li>
                    <li>
                      <a href="/products">Browning</a>
                    </li>
                    <li>
                      <a href="/products">Mossberg</a>
                    </li>
                    <li>
                      <a href="/products">View more</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/products">Action</a>
                  <ul>
                    <li>
                      <a href="/products">Pump Action</a>
                    </li>
                    <li>
                      <a href="/products">Single Shot</a>
                    </li>
                    <li>
                      <a href="/products">Over Under</a>
                    </li>
                    <li>
                      <a href="/products">Semi Automatic</a>
                    </li>
                    <li>
                      <a href="/products">View more</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a onClick={() => navigate('/products/?filter=rifles')}>Rifles</a>
              <ul>
                <li>
                  <a href="/products">Caliber</a>
                  <ul>
                    <li>
                      <a onClick={() => navigate('/products/?filter=LR0.22')}>LR 0.22</a>
                    </li>
                    <li>
                      <a href="/products">9mm</a>
                    </li>
                    <li>
                      <a href="/products">0.223</a>
                    </li>
                    <li>
                      <a href="/products">3036</a>
                    </li>
                    <li>
                      <a href="/products">300 WinMag</a>
                    </li>
                    <li>
                      <a href="/products">308 Lapua</a>
                    </li>
                    <li>
                      <a href="/products">View More</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/products">Brands</a>
                  <ul>
                    <li>
                      <a href="/products">Ruger</a>
                    </li>
                    <li>
                      <a href="/products">Sig Sauer</a>
                    </li>
                    <li>
                      <a href="/products">AR 15</a>
                    </li>
                    <li>
                      <a href="/products">Bergara</a>
                    </li>
                    <li>
                      <a href="/products">View more</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/products">Action</a>
                  <ul>
                    <li>
                      <a href="/products">Single Shot</a>
                    </li>
                    <li>
                      <a href="/products">Bolt Action</a>
                    </li>
                    <li>
                      <a href="/products">Semi Automatic</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">AMMO</a>
          <ul>
            <li>
              <a onClick={() => navigate('/products/?filter=handguns')}>Hand Guns</a>
              <ul>
                <li>
                  <a>Revolvers</a>
                  <ul>
                    <li>
                      <a>Calibers</a>
                      <ul>
                        <li>
                          <a onClick={() => navigate('/products/?filter=LR0.22')}>LR 0.22</a>
                        </li>
                        <li>
                          <a>38 Special</a>
                        </li>
                        <li>
                          <a>.357 Magnum</a>
                        </li>
                        <li>
                          <a>.44 Magnum</a>
                        </li>
                        <li>
                          <a>View more</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>Brands</a>
                      <ul>
                        <li>
                          <a>Smith&Wesson</a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/products/?filter=taurus')}>Taurus</a>
                        </li>
                        <li>
                          <a>Colt</a>
                        </li>
                        <li>
                          <a>Ruger</a>
                        </li>
                        <li>
                          <a>View more</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>Barrel in inch</a>
                    </li>
                    <ul>
                      <li>
                        <a>1"</a>
                      </li>
                      <li>
                        <a>2"</a>
                      </li>
                      <li>
                        <a>4"</a>
                      </li>
                      <li>
                        <a>6"</a>
                      </li>
                      <li>
                        <a>8</a>
                      </li>
                    </ul>
                  </ul>
                </li>
                <li>
                  <a>Pistols</a>
                  <ul>
                    <li>
                      <a>Hammer Fired</a>
                      <ul>
                        <li>
                          <a>Calibers</a>
                          <ul>
                            <li>
                              <a onClick={() => navigate('/products/?filter=LR0.22')}>LR 0.22</a>
                            </li>
                            <li>
                              <a>7.65 ACP</a>
                            </li>
                            <li>
                              <a>.380 ACP</a>
                            </li>
                            <li>
                              <a>9mm</a>
                            </li>
                            <li>
                              <a>10mm</a>
                            </li>
                            <li>
                              <a>45ACP</a>
                            </li>
                            <li>
                              <a>View More</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a>Brands</a>
                          <ul>
                            <li>
                              <a>Beretta</a>
                            </li>
                            <li>
                              <a>Sig Saur</a>
                            </li>
                            <li>
                              <a>Browning</a>
                            </li>
                            <li>
                              <a>View more</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a>Barrel in inch</a>
                          <ul>
                            <li>
                              <a>1"</a>
                            </li>
                            <li>
                              <a>2"</a>
                            </li>
                            <li>
                              <a>4"</a>
                            </li>
                            <li>
                              <a>5"</a>
                            </li>
                            <li>
                              <a>6"</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>Striker Fired</a>
                      <ul>
                        <li>
                          <a>Calibers</a>
                          <ul>
                            <li>
                              <a onClick={() => navigate('/products/?filter=LR0.22')}>LR 0.22</a>
                            </li>
                            <li>
                              <a>7.65 ACP</a>
                            </li>
                            <li>
                              <a>.380 ACP</a>
                            </li>
                            <li>
                              <a>9mm</a>
                            </li>
                            <li>
                              <a>10mm</a>
                            </li>
                            <li>
                              <a>45ACP</a>
                            </li>
                            <li>
                              <a>View More</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a>Brands</a>
                          <ul>
                            <li>
                              <a>Glock</a>
                            </li>
                            <li>
                              <a>Smith&Wesson</a>
                            </li>
                            <li>
                              <a onClick={() => navigate('/products/?filter=taurus')}>Taurus</a>
                            </li>
                            <li>
                              <a>View more</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a>Barrel in inch</a>
                          <ul>
                            <li>
                              <a>1"</a>
                            </li>
                            <li>
                              <a>2"</a>
                            </li>
                            <li>
                              <a>4"</a>
                            </li>
                            <li>
                              <a>5"</a>
                            </li>
                            <li>
                              <a>6"</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a onClick={() => navigate('/products/?filter=shotguns')}>Shot Guns</a>
              <ul>
                <li>
                  <a>Gauge</a>
                  <ul>
                    <li>
                      <a>20G</a>
                    </li>
                    <li>
                      <a>16G</a>
                    </li>
                    <li>
                      <a>12G</a>
                    </li>
                    <li>
                      <a>10G</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Brands</a>
                  <ul>
                    <li>
                      <a>Benelli</a>
                    </li>
                    <li>
                      <a>Browning</a>
                    </li>
                    <li>
                      <a>Mossberg</a>
                    </li>
                    <li>
                      <a>View more</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Action</a>
                  <ul>
                    <li>
                      <a>Pump Action</a>
                    </li>
                    <li>
                      <a>Single Shot</a>
                    </li>
                    <li>
                      <a>Over Under</a>
                    </li>
                    <li>
                      <a>Semi Automatic</a>
                    </li>
                    <li>
                      <a>View more</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a onClick={() => navigate('/products/?filter=rifles')}>Rifles</a>
              <ul>
                <li>
                  <a>Caliber</a>
                  <ul>
                    <li>
                      <a onClick={() => navigate('/products/?filter=LR0.22')}>LR 0.22</a>
                    </li>
                    <li>
                      <a>9mm</a>
                    </li>
                    <li>
                      <a>0.223</a>
                    </li>
                    <li>
                      <a>3036</a>
                    </li>
                    <li>
                      <a>300 WinMag</a>
                    </li>
                    <li>
                      <a>308 Lapua</a>
                    </li>
                    <li>
                      <a>View More</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Brands</a>
                  <ul>
                    <li>
                      <a>Ruger</a>
                    </li>
                    <li>
                      <a>Sig Sauer</a>
                    </li>
                    <li>
                      <a>AR 15</a>
                    </li>
                    <li>
                      <a>Bergara</a>
                    </li>
                    <li>
                      <a>View more</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Action</a>
                  <ul>
                    <li>
                      <a>Single Shot</a>
                    </li>
                    <li>
                      <a>Bolt Action</a>
                    </li>
                    <li>
                      <a>Semi Automatic</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">ACCESSORIES</a>
        </li>
        <li>
          <a href="#">SPECIAL DEALS</a>
        </li>
        <li>
          <a href="#">GIFT CARDS</a>
        </li>
        <li>
          <a href="#">AUCTIONS</a>
        </li>
        <li>
          <a href="#">MANUFACTURERS</a>
        </li>
      </ul>
    </nav>
  );
};
export default SideBar;
