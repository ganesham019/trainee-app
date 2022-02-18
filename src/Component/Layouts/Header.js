import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { connect } from "react-redux";
function Header(cart) {
  const [cartcount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });
    setCartCount(count);
    console.log(count);
  }, [cart, cartcount]);

  return (
    <div className="d-flex  p-2 flex-direction-column shadow">
      <div className="  mr-auto">
        <Link to="/">
          <p
            className="text-dark text-decoration-none mb-0"
            style={{ fontSize: "25px", fontWeight: "bold" }}
          >
            Ecommerce
          </p>
        </Link>
      </div>
      <div className="ml-auto my-auto">
        <Link to="/cart">
          <p className="text-dark text-decoration-none mb-0">
            <GiShoppingCart style={{ fontSize: "28px" }} /> {cartcount}
          </p>
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};
export default Header;
