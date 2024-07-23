import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";

const Home = () => {
  const addToCartHandler = () => {};
  return (
    <div className="home">
      <section></section>

      <h3>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h3>

      <main>
        <ProductCard
          productId="01"
          name="MacBook"
          price={44544}
          stock={435}
          handler={addToCartHandler}
          photo="https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg"
        />
      </main>
    </div>
  );
};

export default Home;
