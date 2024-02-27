import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { ProductList } from '../components/ProductList';

const Home = () => {
  const { products } = useContext(ProductContext);
  return <ProductList products={products} />;
};

export default Home;
