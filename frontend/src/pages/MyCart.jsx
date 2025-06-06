import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import RenderCart from "./components/RenderCart";
import { formatPrice, calculateGrandTotal } from "./components/helpers";
import { useEffect } from "react"

const MyCart = ({ cart, addToCart, setMonetaryTotal }) => {
  const navigate = useNavigate();

  const grandTotal = calculateGrandTotal(cart);

  return (
    <>
      <Navbar cart={cart} />
      <div className="container mt-3">
        <button className="btn btn-secondary" onClick={() => navigate("/")}>
          ← Back to Home
        </button>
      </div>
      <RenderCart cart={cart} addToCart={addToCart} grandTotal={grandTotal} />
    </>
  );
};

export default MyCart;
