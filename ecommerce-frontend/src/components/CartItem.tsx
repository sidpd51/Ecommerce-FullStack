import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

export type CartItemProps  = {
  productId: string;  // Unique identifier for the product
  name: string;       // Name of the product
  price: number;      // Price of the product (in cents, for precision)
  photo: string;      // URL to the product image
  quantity: number;   // Quantity of the product added to the cart
  stock?: number;      // Available stock for the product
}

function CartItem({ productId ,name, price, quantity, photo}: CartItemProps) {
  return (
    <div className="cart-item">
      <img src={photo} alt={name}/>
      <article>
        <Link to={`/product/${productId}`}>{name}</Link>
        <span>₹{price}</span>
      </article>
      <div>
        <button>-</button>
        <p>{quantity}</p>
        <button>+</button>

      </div>
      <button><FaTrash /></button>
    </div>
  )
}

export default CartItem