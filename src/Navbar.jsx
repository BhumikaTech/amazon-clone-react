import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar({ cartItems = [], search, setSearch }) {
  const handleSearch = () => {
    alert(`Searching for: ${search}`);
  };

  return (
    <div className="navbar">

      {/* Logo */}
      <div className="nav-logo">
        <img
          src="/amazon_logo.png"
          alt="Amazon"
          className="logo"
        />
      </div>

      {/* Address */}
      <div className="nav-address">
        <p className="add-first">Deliver to</p>

        <div className="add-icon">
          <i className="fa-solid fa-location-dot"></i>
          <p className="add-second">India</p>
        </div>
      </div>

      {/* Search */}
      <div className="nav-search">
        <select className="search-select">
          <option>All</option>
        </select>

        <input
          type="text"
          placeholder="Search Amazon"
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="search-icon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>

      {/* Language */}
      <div className="nav-lan">
        <img
          src="/images/us_flag.png"
          width="25"
          alt="US Flag"
        />

        <p>EN</p>

        <img
          src="/images/dropdown_icon.png"
          width="8"
          alt="Dropdown"
        />
      </div>

      {/* Account */}
      <div className="nav-text">
        <p>
          <Link to="/signin">
            Hello, Sign in
          </Link>
        </p>

        <h1>
          Account & Lists{" "}
          <img
            src="/images/dropdown_icon.png"
            width="8"
            alt="Dropdown"
          />
        </h1>
      </div>

      {/* Orders */}
      <div className="nav-text">
        <p>
          Returns
        </p>

        <h1>
          & Orders
        </h1>
      </div>

      {/* Mobile User */}
      <Link
        to="/signin"
        className="mobile-user-icon"
        style={{ display: "none" }}
      >
        <img
          src="/images/user.png"
          alt="User"
        />
      </Link>

      {/* Cart */}
      <Link
        to="/cart"
        className="nav-cart"
      >
        <img
          src="/images/cart_icon.png"
          width="35"
          alt="Cart"
        />

        <h4>
          Cart {cartItems.length}
        </h4>
      </Link>

    </div>
  );
}

export default Navbar;