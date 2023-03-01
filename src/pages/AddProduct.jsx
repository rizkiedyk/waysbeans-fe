import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function AddProduct() {
  const [imageUrl, setImageUrl] = useState();
  const handleImage = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
  };

  const navigate = useNavigate();

  const [dataProduct, setDataProduct] = useState({
    id: new Date().getTime(),
    name: "",
    stock: "",
    price: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setDataProduct({
      ...dataProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      ...dataProduct,
      id: new Date().getTime(),
      image: imageUrl,
    };

    const getProduct = JSON.parse(localStorage.getItem("getProduct"));

    if (getProduct === null) {
      localStorage.setItem("getProduct", JSON.stringify([newProduct]));
    } else {
      getProduct.push(newProduct);
      localStorage.setItem("getProduct", JSON.stringify(getProduct));
    }
    navigate("/list-product");
  };

  return (
    <>
      <div className="d-flex justify-content-between w-75 m-auto mt-5 mb-5">
        <div style={{ width: "50%" }} className="mt-4">
          <h1 className="fw-bold" style={{ color: "#613D2B" }}>
            Add Product
          </h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mt-4">
              <Form.Control
                type="text"
                placeholder="Name"
                size="lg"
                style={{
                  border: "2px solid #613D2B",
                  backgroundColor: "rgba(97, 61, 43, 0.25)",
                }}
                name="name"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Control
                type="number"
                placeholder="stock"
                size="lg"
                style={{
                  border: "2px solid #613D2B",
                  backgroundColor: "rgba(97, 61, 43, 0.25)",
                }}
                name="stock"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Control
                type="number"
                placeholder="Price"
                size="lg"
                style={{
                  border: "2px solid #613D2B",
                  backgroundColor: "rgba(97, 61, 43, 0.25)",
                }}
                name="price"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Control
                as="textarea"
                placeholder="Description Product"
                size="lg"
                style={{
                  border: "2px solid #613D2B",
                  resize: "none",
                  height: "150px",
                  backgroundColor: "rgba(97, 61, 43, 0.25)",
                }}
                name="description"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label
                style={{
                  border: "2px solid #613D2B",
                  width: "50%",
                  backgroundColor: "rgba(97, 61, 43, 0.25)",
                }}
                className="rounded"
              >
                <div className="d-flex justify-content-between align-items-center py-2 px-3">
                  <div
                    className="d-flex align-items-center"
                    style={{ width: "80%" }}
                  >
                    <p
                      className="m-0"
                      style={{ fontSize: "20px", color: "grey" }}
                    >
                      Photo Product
                    </p>
                  </div>
                  <div style={{ width: "30px" }}>
                    <Form.Control
                      type="file"
                      onChange={handleImage}
                      name="image"
                      hidden
                    />
                    <img src="/img/Thumbnailuploadproduct.png" alt="" />
                  </div>
                </div>
              </Form.Label>
            </Form.Group>
            <div className="d-flex justify-content-center mt-5">
              <Button
                type="submit"
                style={{
                  backgroundColor: "#613D2B",
                  border: "none",
                  padding: "5px 80px",
                }}
              >
                Add Product
              </Button>
            </div>
          </Form>
        </div>
        <div style={{ width: "436px" }}>
          <img src={imageUrl} alt="" style={{ width: "100%" }} />
        </div>
      </div>
    </>
  );
}
