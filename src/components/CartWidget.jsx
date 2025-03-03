import { useContext } from "react";
import { Link } from "react-router-dom"; 
import { CartContext } from "../context/CartContext"; 
import './NavBar.css';

export default function CartWidget() {
  const { cart } = useContext(CartContext); 
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0); 

  return (
    <Link to="/cart" className="cart-widget"> 
      <img
        src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png"
        alt="Cart"
        className="cart-icon"
      />
      {totalItems > 0 && <span className="cart-counter">{totalItems}</span>}
    </Link>
  );
}
