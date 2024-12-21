import { useState } from "react"
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

type ShippingInfoType = {
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  pinCode: string;
}

function Shipping() {

  const [shippingInfo, setShippingInfo] = useState<ShippingInfoType>({} as ShippingInfoType);
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setShippingInfo(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const navigate = useNavigate();

  return (
    <div className="shipping">
      <button
        className="back-btn"
        onClick={() => {
          navigate('/cart')
        }}>
        <BiArrowBack />
      </button>

      <form>
        <h1>Shipping Address
        </h1>
        <input
          type="text"
          placeholder="Address"
          name="address"
          value={shippingInfo.address}
          onChange={changeHandler}
        ></input>
        <input
          type="text"
          placeholder="City"
          name="city"
          value={shippingInfo.city}
          onChange={changeHandler}
        ></input>
        <input
          type="text"
          placeholder="State"
          name="state"
          value={shippingInfo.state}
          onChange={changeHandler}
        ></input>
        <select name="country" required value={shippingInfo.country} onChange={changeHandler}>
          <option value="">Choose Country</option>
          <option value="india">India</option>
          <option value="russia">Russia</option>
        </select>
        <input
          type="number"
          placeholder="Pin code"
          name="pinCode"
          value={shippingInfo.pinCode}
          onChange={changeHandler}
        ></input>
        <button type="button">Pay Now</button>
      </form>
    </div>
  )
}

export default Shipping