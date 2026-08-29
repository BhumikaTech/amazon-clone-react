import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="back-top">
        Back to top
      </div>

      <div className="footer-content">

        <div className="footer-column">
          <h3>Get to Know Us</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Press Releases</p>
          <p>Amazon Science</p>
        </div>

        <div className="footer-column">
          <h3>Connect with Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>

        <div className="footer-column">
          <h3>Make Money with Us</h3>
          <p>Sell products on Amazon</p>
          <p>Sell apps</p>
          <p>Become an Affiliate</p>
          <p>Advertise Your Products</p>
        </div>

        <div className="footer-column">
          <h3>Let Us Help You</h3>
          <p>Your Account</p>
          <p>Your Orders</p>
          <p>Shipping Rates</p>
          <p>Help</p>
        </div>

      </div>


      <div className="footer-bottom">

        <div className="footer-logo"></div>

        <p>
          © 1996-2026, Amazon Clone Project. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;