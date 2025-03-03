import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);

            if (existingProduct) {
                const newQuantity = existingProduct.quantity + product.quantity;
                
                if (newQuantity > 5) {
                    alert("PRODUCTO SIN STOCK");
                    return prevCart; 
                }

                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: newQuantity }
                        : item
                );
            } else {
                return product.quantity <= 5 ? [...prevCart, product] : prevCart;
            }
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}
