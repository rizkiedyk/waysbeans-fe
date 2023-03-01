// import listProduct from "../product/Product.json";
import { Card, Container } from "react-bootstrap";
import cssModules from "../modules/App.module.css";
import { Link } from "react-router-dom";

function Product() {
  const getProduct = JSON.parse(localStorage.getItem("getProduct"));

  return (
    <>
      <Container
        className={`${cssModules.containerCard} d-flex justify-content-center`}
      >
        <div
          className="d-flex flex-wrap justify-content-start gap-4"
          style={{ width: "83%" }}
        >
          {getProduct !== null &&
            getProduct.map((item, id) => {
              return (
                <Card
                  key={id}
                  style={{
                    width: "241px",
                    backgroundColor: "#F6E6DA",
                  }}
                  className="rounded-0"
                >
                  <Link to={`/detail-product/${id}`}>
                    <Card.Img
                      variant="top"
                      src={item.image}
                      className="rounded-0"
                    />
                  </Link>
                  <Link
                    to={`/detail-product/${id}`}
                    className="text-decoration-none"
                  >
                    <Card.Body
                      style={{
                        color: "#613D2B",
                      }}
                    >
                      <Card.Title className="fw-bold ">{item.name}</Card.Title>
                      <Card.Text style={{ margin: "0" }}>
                        Rp.{item.price}
                      </Card.Text>
                      <Card.Text style={{ margin: "0" }}>
                        Stock : {item.stock}
                      </Card.Text>
                    </Card.Body>
                  </Link>
                </Card>
              );
            })}
        </div>
      </Container>
    </>
  );
}

export default Product;
