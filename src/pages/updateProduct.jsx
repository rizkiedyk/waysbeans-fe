import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function UpdateProduct() {
  const params = useParams();
  const id = parseInt(params.id);
  const [imageUrl, setImageUrl] = useState();

  const [dataUpdate, setDataUpdate] = useState({
    name: "",
    stock: "",
    price: "",
    description: "",
    image: "",
  });

  const handleImageUpdate = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
  };

  const fetchProduct = () => {
    const getProduct = JSON.parse(localStorage.getItem("getProduct"));
    const findProduct = getProduct.find((product) => product.id === id);
    setDataUpdate({
      ...findProduct,
    });
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setDataUpdate({
      ...dataUpdate,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let updateImage = {
      ...dataUpdate,
      image: imageUrl,
    };
    const dataProduct = JSON.parse(localStorage.getItem("getProduct"));

    const indexProduct = dataProduct.findIndex((item) => item.id === id);
    dataProduct[indexProduct] = updateImage;
    localStorage.setItem("getProduct", JSON.stringify(dataProduct));
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
                value={dataUpdate.name}
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
                value={dataUpdate.stock}
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
                value={dataUpdate.price}
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
                value={dataUpdate.description}
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
                      onChange={handleImageUpdate}
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
                Update Product
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
