import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";  
import "./Cart.css";

export default function Cart() {
    const { cart, clearCart, removeFromCart } = useContext(CartContext);

    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleClearCart = () => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "Se eliminarán todos los productos del carrito",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ff9f01",
            cancelButtonColor: "#6132d0",
            confirmButtonText: "Confirmar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                clearCart();
                Swal.fire("¡Aquí no hay nada!", "Todos los productos fueron eliminados", "success");
            }
        });
    };

    const handleRemoveItem = (id) => {
        removeFromCart(id);
    };

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
                            <button className="cart-item-remove" onClick={() => handleRemoveItem(item.id)}>🗑️</button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="cart-actions">
                <button className="cart-actions-clear" onClick={handleClearCart}>
                    Vaciar carrito
                </button>
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
