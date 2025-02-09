import './NavBar.css';

export default function CartWidget() {
    return (
      <div className="cart-widget">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png"
          alt="Cart"
          className="cart-icon"
        />
        <span className="cart-counter">3</span>
      </div>
    );
  }
  