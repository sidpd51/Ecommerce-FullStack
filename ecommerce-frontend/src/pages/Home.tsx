import { Link } from "react-router-dom"
import ProductCard from "../components/ProductCard"

function Home() {
  const addToCartHandler = () =>{}
  return (
    <div className="home"><section></section>
    <h1>Latest Product<Link to={"/search"} className="findmore">More</Link></h1>
    <main>
      <ProductCard productId="123" name="macbook" price={90000} photo="https://m.media-amazon.com/images/I/61CkOvTefvL._SL1500_.jpg" handler={addToCartHandler} stock={123}></ProductCard>
    </main>
    </div>
  )
}

export default Home