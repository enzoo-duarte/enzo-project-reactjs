import { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../asyncMock';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';
import './ProductDetail.css';

export default function ProductDetail() { 
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    getProductById(id).then(setProduct);
  }, [id]);

  const handleClick = () => {
    if (product) {
      addToCart({ ...product, quantity });
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

              <ItemCount stock={5} initial={1} onQuantityChange={setQuantity} />

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
