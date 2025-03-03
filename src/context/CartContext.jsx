import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);

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

                const updatedCart = prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: newQuantity }
                        : item
                );

                toast.success(`${product.title} x${product.quantity} agregado al carrito`, {
                    position: "top-right",
                    autoClose: 2000,
                    theme: "dark",
                });

                return updatedCart;
            } else {
                if (product.quantity > 5) return prevCart;
                
                const newCart = [...prevCart, product];

                toast.success(`${product.title} x${product.quantity} agregado al carrito`, {
                    position: "top-right",
                    autoClose: 2000,
                    theme: "dark",
                });

                return newCart;
            }
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}
