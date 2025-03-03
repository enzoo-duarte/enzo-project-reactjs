import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
    const { cart } = useContext(CartContext);

    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
    <section className="cart">
        {cart.length === 0 ? (
        <div className="cart-empty">
            <h2>Tu carrito está vacío</h2>
            <Link to="/" className="cart-back-button">← Volver a la tienda</Link>
        </div>
        ) : (
        <>
            <div className="cart-items-container">
                <div className="cart-items">
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title} className="cart-item-image"/>
                            <div>
                                <small>Nombre</small>
                                <h3>{item.title}</h3>
                            </div>
                            <div>
                                <small>Cantidad</small>
                                <p>{item.quantity}</p>
                            </div>
                            <div>
                                <small>Precio</small>
                                <p>${item.price} USD</p> 
                            </div>
                            <div>
                                <small>Subtotal</small>
                                <p>${Math.round(item.price * item.quantity)} USD</p>
                            </div>
                            <button className="cart-item-remove">🗑️</button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="cart-actions">
                <button className="cart-actions-clear">Vaciar carrito</button>
                <div className="cart-actions-total">
                    <p>Total: <strong>${Math.round(totalPrice)} USD</strong></p>
                </div>
                    <button className="cart-actions-checkout">Finalizar compra</button>
            </div>
        </>
        )}
    </section>
    );
}
