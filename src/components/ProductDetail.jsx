import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../asyncMock';
import { CartContext } from '../context/CartContext'; 
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext); 

  useEffect(() => {
    getProductById(id).then((response) => setProduct(response));
  }, [id]);

  const handleClick = () => {
    if (product) {
      addToCart(product);
    }
  };

  return (
    <section className="product-detail">
      {product ? (
        <>
          <button className="back-button" onClick={() => window.history.back()}>
            &larr; Volver al listado
          </button>
          <div className="product-detail-content">
            <img
              className="product-detail-image"
              src={product.image}
              alt={product.title}
            />
            <div className="product-detail-info">
              <h1>{product.title}</h1>
              <h2>${product.price}</h2>
              <button className="buy-button" onClick={handleClick}>
                COMPRAR
              </button>
              <p className="product-description">{product.description}</p>
            </div>
          </div>
        </>
      ) : (
        <p>Cargando producto...</p>
      )}
    </section>
  );
}
