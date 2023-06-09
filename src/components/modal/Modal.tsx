import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import clsx from 'clsx';

import SignIn from '../auth/sign-in/SignIn';
import SignUp from '../auth/sign-up/SignUp';
import Verify from '../auth/verify-email/Verify';

import styles from './Modal.module.scss';

const Modal = ({ active, setActive }: any) => {
  const [params, setParams] = useSearchParams();
  const renderContent = useMemo(() => {
    if (params.get('mode') === 'signIn') {
      return <SignIn />;
    } else if (params.get('mode') === 'SignUp') {
      return <SignUp />;
    } else if (params.get('mode') === 'verify') {
      return <Verify />;
    }
  }, [params.get('mode')]);

  useEffect(() => {
    if (!params.get('mode')) {
      setActive(false);
    }
  }, [params.get('mode')]);

  return (
    <div
      className={clsx(styles.modal, { [styles.active]: !!active })}
      onClick={() => {
        setParams({});
        setActive(false);
      }}
    >
      <div
        className={clsx(styles.modal_content, { [styles.active]: !!active })}
        onClick={(e: any) => e.stopPropagation()}
      >
        {renderContent}
      </div>
    </div>
  );
};

export default Modal;
