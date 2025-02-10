import { useState, useEffect } from 'react';
import { getProducts, getCategory } from '../asyncMock'; 
import ProductCard from './ProductCard';
import { useParams } from 'react-router-dom'; 
import './ItemListContainer.css';

export default function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState(null);
  const { catId } = useParams(); 

  useEffect(() => {
    if (!catId) {
      getProducts().then((response) => setProducts(response));
    } else {
      getCategory(catId).then((response) => setProducts(response));
    }
  }, [catId]); 

  return (
    <section className="item-list-container">
      <h1>{greeting}</h1>
      <div className="product-list">
        {products ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>Cargando productos...</p>
        )}
      </div>
    </section>
  );
}
