import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

export default function Detail() {
  const params = useParams();
  const id = parseInt(params.id);
  const products = JSON.parse(localStorage.getItem("getProduct"));
  const detail = products[id];

  const navigate = useNavigate();

  // const [cart, setCart] = useState(
  //   JSON.parse(localStorage.getItem("cart")) || []
  // );

  const handleSubmit = () => {
    // const existingItem = cart.find((item) => item.id === detail.id);
    // if (existingItem) {
    //   existingItem.quantity += 1;
    //   setCart([...cart]);
    // } else {
    //   setCart([...cart, { ...detail, quantity: 1 }]);
    // }
    // localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  return (
    <>
      <Container>
        <div
          className="w-75 d-flex justify-content-between"
          style={{ margin: "70px auto" }}
        >
          <div style={{ width: "40%" }}>
            <img
              src={detail.image}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div style={{ width: "55%", marginTop: "35px" }}>
            <h1
              style={{
                fontWeight: "bold",
                color: "#613D2B",
              }}
            >
              {detail.name}
            </h1>
            <h6
              className="mt-3"
              style={{
                color: "#974A4A",
              }}
            >
              Stock : {detail.stock}
            </h6>
            <p
              className="mt-5"
              style={{
                textAlign: "justify",
              }}
            >
              {detail.description}
            </p>
            <h5
              className="mt-4 d-flex justify-content-end"
              style={{
                color: "#974A4A",
                fontWeight: "bold",
              }}
            >
              Rp.{detail.price}
            </h5>
            <Button
              style={{
                width: "100%",
                background: "#613D2B",
                border: "none",
              }}
              className="mt-5"
              type="submit"
              onClick={handleSubmit}
            >
              Add Cart
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}

// import { Container, Button } from "react-bootstrap";
// import { useParams, useNavigate } from "react-router-dom";

// export default function Detail() {
//   const params = useParams();
//   const id = parseInt(params.id);
//   const detail = JSON.parse(localStorage.getItem("getProduct"));

//   const navigate = useNavigate();

//   // // handle badge
//   // const getProduct = JSON.parse(localStorage.getItem("getProduct"));
//   // const findProduct = getProduct.find((product) => product.id === id);

//   const handleSubmit = () => {
//     navigate("/cart");
//   };

//   return (
//     <>
//       <Container>
//         <div
//           className="w-75 d-flex justify-content-between"
//           style={{ margin: "70px auto" }}
//         >
//           <div style={{ width: "40%" }}>
//             <img
//               src={detail[id].image}
//               alt=""
//               style={{ width: "100%", height: "100%" }}
//             />
//           </div>
//           <div style={{ width: "55%", marginTop: "35px" }}>
//             <h1
//               style={{
//                 fontWeight: "bold",
//                 color: "#613D2B",
//               }}
//             >
//               {detail[id].name}
//             </h1>
//             <h6
//               className="mt-3"
//               style={{
//                 color: "#974A4A",
//               }}
//             >
//               Stock : {detail[id].stock}
//             </h6>
//             <p
//               className="mt-5"
//               style={{
//                 textAlign: "justify",
//               }}
//             >
//               {detail[id].description}
//             </p>
//             <h5
//               className="mt-4 d-flex justify-content-end"
//               style={{
//                 color: "#974A4A",
//                 fontWeight: "bold",
//               }}
//             >
//               Rp.{detail[id].price}
//             </h5>
//             <Button
//               style={{
//                 width: "100%",
//                 background: "#613D2B",
//                 border: "none",
//               }}
//               className="mt-5"
//               type="submit"
//               onClick={handleSubmit}
//             >
//               Add Cart
//             </Button>
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// }
