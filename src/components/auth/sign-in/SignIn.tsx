import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { validation } from './validation';

import styles from './SignIn.module.scss';

const SignIn = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validation),
  });

  const handleSingIn = (data: any) => {
    localStorage.setItem('currentUser', data.email);
    setSearchParams({});
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit((data: any) => handleSingIn(data))}>
      <input className={styles.input} {...register('email')} placeholder="Email" />
      <input className={styles.input} {...register('password')} placeholder="Password" type="password" />
      <div className={styles.buttonsBlock}>
        <button className={styles.signIn} type="submit">
          Sign In
        </button>
        <button type="button" className={styles.forgotPass} onClick={() => setSearchParams({ mode: 'forgot-pass' })}>
          Forgot Password
        </button>
      </div>
      <p className={styles.errorText}>
        {(errors.email || errors.password) && `Your account name or password is incorrect`}
      </p>
      <button type="button" className={styles.register} onClick={() => setSearchParams({ mode: 'SignUp' })}>
        Register
      </button>
    </form>
  );
};

export default SignIn;
