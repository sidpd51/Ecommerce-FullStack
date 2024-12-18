import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem, { CartItemProps } from "../components/CartItem";
import { Link } from "react-router-dom";

const cartItems: CartItemProps[] = [
  {
    productId: "123",
    name: "MacBook Pro 16-inch",
    price: 90000,
    photo: "https://m.media-amazon.com/images/I/61CkOvTefvL._SL1500_.jpg",
    quantity: 40,
    stock: 10,
  },
  {
    productId: "124",
    name: "Apple iPhone 14 Pro",
    price: 110000,
    photo: "https://m.media-amazon.com/images/I/51lRv8lbOVL._SX679_.jpg",
    quantity: 15,
    stock: 25,
  },
  {
    productId: "125",
    name: "Samsung Galaxy S23",
    price: 85000,
    photo: "https://m.media-amazon.com/images/I/61+aq7q+FUL._SL1500_.jpg",
    quantity: 30,
    stock: 40,
  },
  {
    productId: "126",
    name: "Sony WH-1000XM4 Headphones",
    price: 20000,
    photo: "https://m.media-amazon.com/images/I/61vIICn1JOL._SL1500_.jpg",
    quantity: 50,
    stock: 20,
  },
  {
    productId: "127",
    name: "Kindle Paperwhite",
    price: 13000,
    photo: "https://m.media-amazon.com/images/I/51p4T50uacL._SX679_.jpg",
    quantity: 60,
    stock: 35,
  },
  {
    productId: "128",
    name: "Apple Watch Series 8",
    price: 40000,
    photo: "https://m.media-amazon.com/images/I/31+Eql2oQcL._SY300_SX300_.jpg",
    quantity: 20,
    stock: 50,
  },
  {
    productId: "129",
    name: "Nike Air Max 270",
    price: 8000,
    photo: "https://m.media-amazon.com/images/I/613fjQtsd2L._SY695_.jpg",
    quantity: 70,
    stock: 100,
  },
  {
    productId: "130",
    name: "Dell XPS 13 Laptop",
    price: 85000,
    photo: "https://m.media-amazon.com/images/I/41sAN4hhNzL._SX300_SY300_QL70_FMwebp_.jpg",
    quantity: 25,
    stock: 30,
  },
  {
    productId: "131",
    name: "Bose SoundLink Revolve+ Bluetooth Speaker",
    price: 25000,
    photo: "https://m.media-amazon.com/images/I/41osF6p2CaL._SX300_SY300_QL70_FMwebp_.jpg",
    quantity: 12,
    stock: 20,
  },
  {
    productId: "132",
    name: "Logitech MX Master 3 Wireless Mouse",
    price: 6000,
    photo: "https://m.media-amazon.com/images/I/61jFSvCTfpL._SX679_.jpg",
    quantity: 45,
    stock: 60,
  },
  {
    productId: "133",
    name: "Fitbit Charge 5 Fitness Tracker",
    price: 12000,
    photo: "https://m.media-amazon.com/images/I/41vrR0PUgGL._SX300_SY300_QL70_FMwebp_.jpg",
    quantity: 33,
    stock: 40,
  },
  {
    productId: "134",
    name: "Samsung 65-inch 4K Smart TV",
    price: 55000,
    photo: "https://m.media-amazon.com/images/I/81OmhFfS-hL._SX679_.jpg",
    quantity: 5,
    stock: 10,
  },
  {
    productId: "135",
    name: "Ninja Professional Blender",
    price: 12000,
    photo: "https://m.media-amazon.com/images/I/41C0o--vjnL._SX300_SY300_QL70_FMwebp_.jpg",
    quantity: 10,
    stock: 15,
  },
  {
    productId: "136",
    name: "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
    price: 8000,
    photo: "https://m.media-amazon.com/images/I/41VtfPX5JkL._SX300_SY300_QL70_FMwebp_.jpg",
    quantity: 20,
    stock: 30,
  },
  {
    productId: "137",
    name: "Sony Alpha a7 III Mirrorless Camera",
    price: 160000,
    photo: "https://m.media-amazon.com/images/I/31pgJ3UkojL._SX300_SY300_QL70_FMwebp_.jpg",
    quantity: 8,
    stock: 12,
  },
  {
    productId: "138",
    name: "GoPro HERO11 Black Action Camera",
    price: 40000,
    photo: "https://m.media-amazon.com/images/I/31dAVTXGFDL._SX300_SY300_QL70_FMwebp_.jpg",
    quantity: 18,
    stock: 25,
  },
  {
    productId: "139",
    name: "Razer BlackWidow V3 Mechanical Gaming Keyboard",
    price: 12000,
    photo: "https://m.media-amazon.com/images/I/41nRNJVqbhL._SY300_SX300_QL70_FMwebp_.jpg",
    quantity: 30,
    stock: 40,
  },
  {
    productId: "140",
    name: "Corsair K95 RGB Platinum XT Gaming Keyboard",
    price: 16000,
    photo: "https://m.media-amazon.com/images/I/41ZRnS3NeWL._SY300_SX300_QL70_FMwebp_.jpg",
    quantity: 22,
    stock: 35,
  },
];

const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const total = subtotal + tax + shippingCharges;
const discount = 423;

function Cart() {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      if (Math.random() > 0.2) setIsValidCouponCode(true);
      else setIsValidCouponCode(false)
    }, 1000)

    return () => {
      clearTimeout(timeOutID);d
      setIsValidCouponCode(false)
    }
  }, [couponCode]);


  return (
    <div className="cart">
      <main>
        { cartItems.length>0?
          cartItems.map((cartItem, index) => {
            const { productId, name, price, quantity, photo } = cartItem
            return <CartItem
              key={index}
              name={name}
              price={price}
              quantity={quantity}
              photo={photo}
              productId={productId} />
          }): <h1>No items added!</h1>
        }
      </main>
      <aside>
        <p>Subtotal: ₹{subtotal}</p>
        <p>Shipping: ₹{shippingCharges}</p>
        <p>Tax: ₹{tax}</p>
        <p>Discount: <em> - ₹{discount}</em></p>
        <p>Total: <b>₹{total}</b></p>
        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)} />
        {
          couponCode && (isValidCouponCode ?
            <span className="green">₹{discount} off using <code>{couponCode}</code></span> :
            <span className="red">Invalid Coupon <VscError /></span>)

        }

        {
          cartItems.length>0 && <Link to="/shipping">Shipping</Link>
        }
      </aside>
    </div>

  )
}

export default Cart