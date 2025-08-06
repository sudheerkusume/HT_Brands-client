import { FaGem, FaTruck, FaShippingFast, FaHeadset } from "react-icons/fa";

const FeaturesRow = () => {
  return (
    <div style={{
      display: "flex",
      gap: "30px",
      margin: "30px 0",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
      <div style={{ textAlign: "center" }}>
        <FaGem size={30} color="#B71C1C" />
        <div style={{ fontSize: "14px", marginTop: "5px" }}>Premium Quality</div>
      </div>

      <div style={{ textAlign: "center" }}>
        <FaTruck size={30} color="#B71C1C" />
        <div style={{ fontSize: "14px", marginTop: "5px" }}>Fast Shipping</div>
      </div>

      <div style={{ textAlign: "center" }}>
        <FaShippingFast size={30} color="#B71C1C" />
        <div style={{ fontSize: "14px", marginTop: "5px" }}>Free Shipping</div>
      </div>

      <div style={{ textAlign: "center" }}>
        <FaHeadset size={30} color="#B71C1C" />
        <div style={{ fontSize: "14px", marginTop: "5px" }}>Customer Support</div>
      </div>
    </div>
  );
};

export default FeaturesRow;
