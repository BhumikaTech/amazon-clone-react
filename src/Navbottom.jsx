import "./NavBottom.css";

function NavBottom() {
  return (
    <div className="nav-bottom">
      <div className="nav-bottom-all">
        <img src="/images/menu_icon.png" width="20" alt="Menu" />
        <p>All</p>
      </div>

      <p>Today's Deals</p>
      <p>Customer Service</p>
      <p>Registry</p>
      <p>Gift Cards</p>
      <p>Sell</p>
    </div>
  );
}

export default NavBottom;