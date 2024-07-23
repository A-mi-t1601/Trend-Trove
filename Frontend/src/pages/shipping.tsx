import { ChangeEvent, useState } from "react";
import { BiArrowBack } from "react-icons/bi";

const Shipping = () => {
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

  return (
    <div className="shipping">
      <button>
        <BiArrowBack />
      </button>

      <form>
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
