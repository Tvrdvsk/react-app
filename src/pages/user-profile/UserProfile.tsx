import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';

import styles from './UserProfile.module.scss';

const UserProfile = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const renderCreditCards = useMemo(() => {
    if (searchParams.get('type') === 'creditCards') {
      if (localStorage.getItem('creditCards')) {
        return (
          <div>
            <div className={styles.card}>
              <div className={styles.visa_logo}>
                <img
                  src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png"
                  alt=""
                />
              </div>
              <div className={styles.visa_info}>
                <img
                  src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
                  alt=""
                />
                <p>4586 7985 9271 6388</p>
              </div>
              <div className={styles.visa_crinfo}>
                <p>02/12</p>
                <p>Nikhil Bobade</p>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className={styles.formContent}>
            <div className={styles.emptyBlock}>You dont have any payment card yet</div>
            <button
              type="button"
              onClick={() => setSearchParams({ type: 'newcreditCards' })}
              className={styles.submitButton}
            >
              Add New Card
            </button>
          </div>
        );
      }
    }
    if (searchParams.get('type') === 'newcreditCards') {
      return (
        <form className={styles.formContent} onSubmit={handleSubmit((data: any) => console.log(data))}>
          <input className={styles.input} {...register('cardNumber')} placeholder="Card Number" />
          <input className={styles.input} {...register('cardHolderName')} placeholder="Card Holder Name" />
          <input className={styles.input} {...register('validTru')} placeholder="Valid Tru" />
          <input className={styles.input} {...register('cvv')} placeholder="CVV/CVC" />
          <button className={styles.signIn} type="submit">
            Add new Card
          </button>
        </form>
      );
    }
  }, [searchParams.get('type')]);

  const renderAddressTab = useMemo(() => {
    if (searchParams.get('type') === 'addresses') {
      return (
        <div className={styles.formContent}>
          <div className={styles.emptyBlock}>You dont have any address yet</div>
          <button
            type="button"
            onClick={() => setSearchParams({ type: 'newAddresses' })}
            className={styles.submitButton}
          >
            Add address
          </button>
        </div>
      );
    }
    if (searchParams.get('type') === 'newAddresses') {
      return (
        <form className={styles.formContent} onSubmit={handleSubmit((data: any) => console.log(data))}>
          <input className={styles.input} {...register('country')} placeholder="Country" />
          <input className={styles.input} {...register('state')} placeholder="State" />
          <input className={styles.input} {...register('city')} placeholder="City" />
          <input className={styles.input} {...register('address')} placeholder="Address" />
          <input className={styles.input} {...register('zipCode')} placeholder="Zip Code" />
          <button className={styles.signIn} type="submit">
            Add address
          </button>
        </form>
      );
    }
  }, [searchParams.get('type')]);
  return (
    <div className={styles.userProfile}>
      <div className="center">
        <div className={styles.userProfileTabs}>
          <div className={styles.userProfileRow}>
            <div className={styles.userProfileLeft}>
              <ul className={styles.userProfileTabList}>
                <li>
                  <button onClick={() => setSearchParams({ type: 'orders' })} type="button">
                    Orders
                  </button>
                </li>
                <li>
                  <button onClick={() => setSearchParams({ type: 'addresses' })} type="button">
                    Addresses
                  </button>
                </li>
                <li>
                  <button onClick={() => setSearchParams({ type: 'creditCards' })} type="button">
                    Credit cards
                  </button>
                </li>
                <li>
                  <button onClick={() => setSearchParams({ type: 'giftCards' })} type="button">
                    Gift cards
                  </button>
                </li>
                <li>
                  <button onClick={() => setSearchParams({ type: 'license' })} type="button">
                    License upload
                  </button>
                </li>
                <li>
                  <button onClick={() => setSearchParams({ type: 'addForSale' })} type="button">
                    Add for sale
                  </button>
                </li>
                <li>
                  <button onClick={() => setSearchParams({ type: 'settings' })} type="button">
                    Setting
                  </button>
                </li>
              </ul>
            </div>
            <div className={styles.userRight}>
              <div className={styles.wrapperBlock}>
                {searchParams.get('type') === 'settings' && (
                  <form
                    onSubmit={handleSubmit(data => {
                      console.log(data);
                      setSearchParams({ mode: 'verify' });
                    })}
                  >
                    <div className={styles.formContent}>
                      <div className={styles.singleItem}>
                        <label>First Name</label>
                        <input type="text" placeholder="First Name" />
                      </div>
                      <div className={styles.singleItem}>
                        <label>Last Name</label>
                        <input type="text" placeholder="Last Name" />
                      </div>
                      <div className={styles.singleItem}>
                        <label>Phone Number</label>
                        <input type="tel" placeholder="Phone Number" />
                      </div>
                      <div className={styles.singleItem}>
                        <label>Email</label>
                        <input type="email" placeholder="Email" />
                      </div>
                      <div className={styles.singleItem}>
                        <label>Password</label>
                        <input type="password" placeholder="Password" />
                      </div>
                      <div className={styles.singleItem}>
                        <label>Confirm Password</label>
                        <input type="password" placeholder="Confirm Password" />
                      </div>
                      <div className={styles.singleItem}>
                        <label>Date of Birth</label>
                        <div className={styles.threItems}>
                          <input type="text" placeholder="Month" />
                          <input type="text" placeholder="Day" />
                          <input type="text" placeholder="Year" />
                        </div>
                      </div>
                      <div className={styles.singleItem}>
                        <label>Country</label>
                        <input type="text" placeholder="Country" />
                      </div>
                      <button type="submit" className={styles.submitButton}>
                        Save changes
                      </button>
                    </div>
                  </form>
                )}
                {renderAddressTab}
                {renderCreditCards}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
