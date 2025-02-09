import { useState, useEffect } from 'react';
import './ItemListContainer.css';
import { getProducts } from '../asyncMock'; 
import ProductCard from './ProductCard'; 

export default function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState(null); 

  useEffect(() => {
    getProducts().then((response) => setProducts(response));
  }, []);

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
