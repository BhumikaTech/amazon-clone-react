import { useNavigate } from "react-router-dom";
import "./cart.css";

function Cart({
  cartItems = [],
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) {
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.productId.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="cart-page">

      <div className="cart-container">

        {/* LEFT SIDE */}
        <div className="cart-left">

          <h1>Shopping Cart</h1>

          {cartItems.length === 0 ? (

            <div className="empty-cart">
              <h2>Your Amazon Cart is empty.</h2>

              <button
                onClick={() => navigate("/")}
              >
                Continue Shopping
              </button>
            </div>

          ) : (

            <>
              <div className="cart-items">

                {cartItems.map((item) => {

                  const product = item.productId;

                  return (
                    <div
                      className="cart-item"
                      key={product._id}
                    >

                      {/* PRODUCT IMAGE */}
                      <div className="cart-image-container">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="cart-image"
                        />
                      </div>

                      {/* PRODUCT INFORMATION */}
                      <div className="cart-item-details">

                        <h2>
                          {product.title}
                        </h2>

                        {product.rating && (
                          <p className="cart-rating">
                            ⭐ {product.rating}
                          </p>
                        )}

                        <p className="cart-stock">
                          In Stock
                        </p>

                        <p className="cart-price">
                          ₹{product.price}
                        </p>

                        {/* QUANTITY CONTROLS */}
                        <div className="cart-actions">

                          <button
                            onClick={() =>
                              decreaseQuantity(
                                product._id
                              )
                            }
                          >
                            −
                          </button>

                          <span>
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              increaseQuantity(
                                product._id
                              )
                            }
                          >
                            +
                          </button>

                          <button
                            className="remove-button"
                            onClick={() =>
                              removeFromCart(
                                product._id
                              )
                            }
                          >
                            Delete
                          </button>

                        </div>

                      </div>

                      {/* ITEM TOTAL */}
                      <div className="cart-item-total">

                        <strong>
                          ₹
                          {product.price *
                            item.quantity}
                        </strong>

                      </div>

                    </div>
                  );
                })}

              </div>

              <div className="cart-bottom-total">
                Subtotal ({totalItems} items):
                <strong>
                  ₹{totalPrice}
                </strong>
              </div>
            </>

          )}

        </div>

        {/* RIGHT SIDE */}
        {cartItems.length > 0 && (

          <div className="cart-summary">

            <p className="free-delivery">
              Your order qualifies for FREE Delivery.
            </p>

            <h2>
              Subtotal ({totalItems} items):
              <strong>
                ₹{totalPrice}
              </strong>
            </h2>

            <label className="gift-option">
              <input
                type="checkbox"
              />
              This order contains a gift
            </label>

            <button
              className="checkout-button"
              onClick={() =>
                navigate("/checkout")
              }
            >
              Proceed to Buy
            </button>

          </div>

        )}

      </div>

    </div>
  );
}

export default Cart;