import { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { getProductById } from '../firebase/firebase'; 
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';
import './ProductDetail.css';

export default function ProductDetail() { 
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { cart, addToCart } = useContext(CartContext);

  useEffect(() => {
    getProductById(id)
      .then(setProduct)
      .catch(error => console.error("Error obteniendo el producto:", error));
  }, [id]);

  const productInCart = cart.find(item => item.id === id);
  const availableStock = product ? 5 - (productInCart?.quantity || 0) : 5;
  const isOutOfStock = availableStock <= 0;

  const handleClick = () => {
    if (product && !isOutOfStock) {
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
            <div className="image-container">
              <img className="product-detail-image" src={product.image} alt={product.title} />
            </div>
            <div className="product-detail-info">
              <h1>{product.title}</h1>
              <h2>${product.price} USD</h2>

              <button className="buy-button" onClick={handleClick} disabled={isOutOfStock}>
                {isOutOfStock ? "SIN STOCK" : "COMPRAR"}
              </button>

              {!isOutOfStock && <ItemCount stock={availableStock} initial={1} onQuantityChange={setQuantity} />}

              <p className="product-description">{product.description}</p>
            </div>
          </div>
        </>
      ) : (
        <div className="loader-container">
          <ReactLoading type="bubbles" color="#ff9f01" width="100px" height="50px" />
        </div>
      )}
    </section>
  );
}