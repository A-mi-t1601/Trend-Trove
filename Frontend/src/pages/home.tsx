import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";
import { useLatestProductQuery } from "../redux/api/productAPI";
import toast from "react-hot-toast";
import { Skeleton } from "../components/loader";

const Home = () => {
  const { data, isLoading, isError } = useLatestProductQuery("");

  const addToCartHandler = () => {};
  if (isError) toast.error("Cannot Fetch The Products");
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
        {isLoading ? (
          <Skeleton width="80vw" />
        ) : (
          data?.products.map((i) => (
            <ProductCard
              key={i._id}
              productId={i._id}
              name={i.name}
              price={i.price}
              stock={i.stock}
              handler={addToCartHandler}
              photo={i.photo}
            />
          ))
        )}
      </main>
    </div>
  );
};

export default Home;
