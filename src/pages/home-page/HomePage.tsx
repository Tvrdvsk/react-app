import BigSlider from '../../components/big-slider/BigSlider';
import ProductsSlider from '../../components/products-slider/ProductsSlider';

import { data } from './constants/constants';

const HomePage = () => {
  return (
    <>
      <div className="center">
        <BigSlider />
        <ProductsSlider title="CURRENT BEST SELLING" data={data} />
        <ProductsSlider title="BEST AMMO DEALS" data={data} />
        <ProductsSlider title="TRENDING GUNS FOR GUNS" data={data} />
        <ProductsSlider title="RECENT PRICE DROPS" data={data} />
        <ProductsSlider title="CURRENT BEST SELLING ACCESSORIES" data={data} />
      </div>
    </>
  );
};

export default HomePage;
