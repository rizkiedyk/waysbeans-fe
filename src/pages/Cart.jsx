import { useState } from "react";
import { Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

export default function Cart() {
  const [count, setCount] = useState(0);
  // let data = {
  //   id: "",
  //   name: "",
  //   price: "",
  //   image: "",
  //   qty: 1,
  // };

  // const handleCart = () => {
  //   let dataCart = JSON.parse(localStorage.getItem("dataCart")) || [];
  //   dataCart.push(data);
  //   localStorage.setItem("users", JSON.stringify(dataCart));
  // };

  const Add = () => {
    if (count === 10) return;
    setCount(count + 1);
  };

  const Less = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  return (
    <>
      <div className="w-75 m-auto mt-5" style={{ color: "#613D2B" }}>
        <h3 style={{ fontWeight: "bold" }}>My Cart</h3>
        <h6 className="mt-5">Review Your Order</h6>
        <div className="d-flex justify-content-between">
          <div
            style={{
              padding: "15px 0",
              borderTop: "1px solid #613D2B",
              borderBottom: "1px solid #613D2B",
              display: "flex",
              width: "60%",
              height: "180px",
            }}
          >
            <div style={{ width: "17%" }}>
              <img style={{ width: "100%" }} src="/img/product4.png" alt="" />
            </div>
            <div className="ms-3 my-auto">
              <h6 style={{ fontWeight: "bold" }}>GUETAMALA Beans</h6>
              <div className="d-flex pt-3 gap-2" style={{ fontSize: "15px" }}>
                <button
                  style={{
                    fontWeight: "bold",
                    marginBottom: "15px",
                    border: "none",
                  }}
                  onClick={Less}
                >
                  -
                </button>
                <p style={{ backgroundColor: "#F6E6DA", padding: "0 13px" }}>
                  {count}
                </p>
                <button
                  style={{
                    fontWeight: "bold",
                    marginBottom: "15px",
                    border: "none",
                  }}
                  onClick={Add}
                >
                  +
                </button>
              </div>
            </div>
            <div className="ms-auto my-auto">
              <p>Rp.300.000</p>
              <div className="d-flex justify-content-end">
                <img src="/img/Vectorcartlogosampah.png" alt="" />
              </div>
            </div>
          </div>
          <div style={{ padding: "15px 0", width: "30%" }}>
            <div
              style={{
                borderTop: "1px solid #613D2B",
                borderBottom: "1px solid #613D2B",
              }}
            >
              <div className="d-flex justify-content-between mt-2">
                <p>Subtotal</p>
                <p>300.900</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Qty</p>
                <p>2</p>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-3">
              <p>Total</p>
              <p>300.900</p>
            </div>

            <div className="ms-auto mt-5 d-flex justify-content-end w-75">
              <Button
                style={{
                  width: "100%",
                  backgroundColor: "#613D2B",
                  border: "none",
                }}
              >
                Pay
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
