import Navbar from "./Navbar";
import NavBottom from "./Navbottom";
import Hero from "./Hero";
import Shop from "./Shop";
import ProductSlider from "./Productslider";
import Footer from "./Footer";


function Home({ cartItems, search, setSearch, addToCart }) {

  return (
    <>
      <Navbar
        cartItems={cartItems}
        search={search}
        setSearch={setSearch}
      />

      <NavBottom />

      <Hero />

      <Shop search={search} />

      <ProductSlider
        search={search}
        addToCart={addToCart}
      />

      <Footer />
    </>
  );
}

export default Home;