import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';

import { validation } from './validation';

import styles from './SingUp.module.scss';

const SignUp = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(validation),
  });

  const handleSignUp = (data: any) => {
    const users = localStorage.getItem('users');
    if (users) {
      const parsedUsers = JSON.parse(users);
      if (!parsedUsers[data.email]) {
        localStorage.setItem('users', JSON.stringify({ ...parsedUsers, [data.email]: data }));
      }
    } else {
      localStorage.setItem('users', JSON.stringify({ [data.email]: data }));
    }
    navigate('/?mode=verify');
  };

  return (
    <form
      className={styles.container}
      onSubmit={handleSubmit(data => {
        handleSignUp(data);
      })}
    >
      <input className={styles.input} {...register('firstName')} placeholder="First Name" />
      <input className={styles.input} {...register('lastName')} placeholder="Last Name" />
      <input className={styles.input} {...register('phoneNumber')} placeholder="Phone Number" />
      <input className={styles.input} {...register('email')} placeholder="Email" />
      <input className={styles.input} {...register('password')} placeholder="Password" type="password" />
      <input className={styles.input} {...register('confirmPassword')} placeholder="Confirm Password" type="password" />
      <div className={styles.dateOfBirth}>
        <input className={styles.input} {...register('month')} placeholder="Month" />
        <input className={styles.input} {...register('day')} placeholder="Day" />
        <input className={styles.input} {...register('year')} placeholder="Year" />
      </div>
      <input className={styles.input} {...register('country')} placeholder="Country" />
      <div className={styles.checkboxBlock}>
        <input className={styles.checkbox} type="checkbox" {...register('assignment')} />
        <p>
          I HAVE READ AND UNDERSTAND <strong>THE PRIVACY</strong> AND <strong>COOKIES POLICY</strong>
        </p>
      </div>
      <button disabled={!isValid} type="submit" className={clsx(styles.verify, { [styles.disabled]: !isValid })}>
        Verify Email
      </button>
      <div className={styles.haveAnAccountBlock}>
        <p className={styles.haveAnAccount}>Already have an account?</p>
        <button type="button" className={styles.signInBtn} onClick={() => setSearchParams({ mode: 'signIn' })}>
          Sign In
        </button>
      </div>
    </form>
  );
};

export default SignUp;
