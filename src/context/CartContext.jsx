import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        let productAdded = false;
        
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            let newCart;

            if (existingProduct) {
                const newQuantity = existingProduct.quantity + product.quantity;

                if (newQuantity > 5) {
                    toast.error("Producto sin stock", {
                        position: "top-right",
                        autoClose: 2000,
                        theme: "dark",
                    });
                    return prevCart;
                }

                productAdded = true;
                newCart = prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: newQuantity } : item
                );
            } else {
                if (product.quantity > 5) {
                    toast.error("Producto sin stock", {
                        position: "top-right",
                        autoClose: 2000,
                        theme: "dark",
                    });
                    return prevCart;
                }

                productAdded = true;
                newCart = [...prevCart, product];
            }

            return newCart;
        });

        setTimeout(() => {
            if (productAdded) {
                toast.success(`${product.title} x${product.quantity} agregado al carrito`, {
                    position: "top-right",
                    autoClose: 2000,
                    theme: "dark",
                });
            }
        }, 0);
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}
