import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CartReducerInitialState } from "../types/reducer-types";
import axios from "axios";
import { server } from "../redux/store";
import toast from "react-hot-toast";
import { saveShippingInfo } from "../redux/reducer/cartReducer";

const Shipping = () => {
  const { cartItems, total } = useSelector(
    (state: { cartReducer: CartReducerInitialState }) => state.cartReducer
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
  });

  const changeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setShippingInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(saveShippingInfo(shippingInfo));
    try {
      const { data } = await axios.post(
        `${server}/api/v1/payment/create`,
        {
          amount: total,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/pay", {
        state: data.clientSecret,
      });
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  useEffect(() => {
    if (cartItems.length <= 0) return navigate("/cart");
  }, [cartItems]);

  return (
    <div className="shipping">
      <button className="back-btn" onClick={() => navigate("/cart")}>
        <BiArrowBack />
      </button>

      <form onSubmit={submitHandler}>
        <h1>Shipping Address</h1>
        <input
          required
          type="text"
          placeholder="Address"
          name="address"
          value={shippingInfo.address}
          onChange={changeHandler}
        />

        <input
          required
          type="text"
          placeholder="City"
          name="city"
          value={shippingInfo.city}
          onChange={changeHandler}
        />

        <input
          required
          type="text"
          placeholder="State"
          name="state"
          value={shippingInfo.state}
          onChange={changeHandler}
        />

        <select
          name="country"
          required
          value={shippingInfo.country}
          onChange={changeHandler}
        >
          <option value="">Choose Country</option>
          <option value="india">India</option>
          <option value="pakistan">Pakistan</option>
          <option value="china">China</option>
          <option value="bhutan">Bhutan</option>
          <option value="nepal">Nepal</option>
          <option value="bangladesh">Bangladesh</option>
          <option value="afghanistan">Afghanistan</option>
          <option value="sri lanka">Sri Lanka</option>
          <option value="myanmar">Myanmar</option>
          <option value="uae">UAE</option>
          <option value="malaysia">Malaysia</option>
          <option value="indonesia">Indonesia</option>
          <option value="iraq">Iraq</option>
          <option value="yemen">Yemen</option>
          <option value="malaysia">Malaysia</option>
          <option value="turkey">Turkey</option>
          <option value="thailand">Thailand</option>
          <option value="singapore">Singapore</option>
          <option value="oman">Oman</option>
          <option value="qatar">Qatar</option>
          <option value="cyprus">Cyprus</option>
          <option value="bahrain">Bahrain</option>
          <option value="brunei">Brunei</option>
          <option value="armenia">Armenia</option>
          <option value="mongolia">Mongolia</option>
          <option value="georgia">Georgia</option>
          <option value="lebanon">Lebanon</option>
          <option value="turkmenistan">Turkmenistan</option>
          <option value="laos">Laos</option>
          <option value="tajikistan">Tajikistan</option>
          <option value="azerbaijan">Azerbaijan</option>
          <option value="jordan">Jordan</option>
          <option value="cambodia">Cambodia</option>
          <option value="syria">Syria</option>
          <option value="north korea">North Korea</option>
        </select>

        <input
          required
          type="number"
          placeholder="Pin Code"
          name="pinCode"
          value={shippingInfo.pinCode}
          onChange={changeHandler}
        />

        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Shipping;
