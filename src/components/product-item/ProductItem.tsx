import { useNavigate } from 'react-router-dom';

import { IProductItem } from './constants/types';

import styles from './ProductItem.module.scss';

const ProductItem = ({ img, isInWishlist = false, name, price }: IProductItem) => {
  const navigate = useNavigate();
  return (
    <div className={styles['wrapper-bottom-slid']} onClick={() => navigate('/products/taurus')}>
      <img className={styles['wrapper-bottom-slid_img']} src={img} />
      <span>{name}</span>
      <div className={styles['add-product']}>
        <div>
          <p>
            {price}
            <span>$</span>
          </p>
        </div>

        <button>
          <img src={window.location.pathname.includes('products') ? '../img/cart.svg' : './img/cart.svg'} alt="error" />
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
