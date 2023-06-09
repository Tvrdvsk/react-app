import { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useSearchParams } from 'react-router-dom';
import clsx from 'clsx';

import styles from './Verify.module.scss';

const Verify = () => {
  const [otp, setOtp] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className={styles.container}>
      <p className={styles.pleaseEnter}>Please enter the 5-digit code send to email</p>
      <p className={styles.verifyText}>Verify Email address</p>
      <OtpInput
        value={otp}
        onChange={setOtp}
        containerStyle={styles.otpContainer}
        inputStyle={styles.otpInput}
        numInputs={5}
        renderSeparator={<span> </span>}
        renderInput={props => <input {...props} />}
      />
      <p className={styles.resendCode}>Resend Code</p>
      <div className={styles.btnContainer}>
        <button
          onClick={() => setSearchParams({ mode: 'signIn' })}
          disabled={otp.length !== 5}
          className={clsx(styles.verify, { [styles.disabled]: otp.length !== 5 })}
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default Verify;
