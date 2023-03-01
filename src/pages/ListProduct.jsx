import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Table, Button } from "react-bootstrap";

export default function ListProduct() {
  const [listProducts, setListProducts] = useState(null);

  const getListProduct = () => {
    const getProduct = JSON.parse(localStorage.getItem("getProduct"));

    setListProducts(getProduct);
  };

  useEffect(() => {
    getListProduct();
  }, []);

  const deleteListProduct = (id) => {
    const newList = listProducts.filter((item) => item.id !== id);
    localStorage.setItem("getProduct", JSON.stringify(newList));
    getListProduct();
  };

  const navigate = useNavigate();

  console.log(listProducts);

  return (
    <>
      <Container style={{ margin: "100px auto" }}>
        <h1 className="fw-bold" style={{ color: "#613D2B" }}>
          List Product
        </h1>
        <div className="w-75 m-auto ">
          <Table className="mt-5" bordered hover>
            <thead style={{ backgroundColor: "#e5e5e5" }}>
              <tr>
                <th>No</th>
                <th>Image</th>
                <th>Name</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {listProducts !== null &&
                listProducts.map((item, index) => {
                  return (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          src={item.image}
                          alt=""
                          style={{ width: "80px" }}
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.stock}</td>
                      <td>{item.price}</td>
                      <td>{item.description}</td>
                      <td className="d-flex justify-content-center">
                        <Button
                          style={{
                            backgroundColor: "#FF0742",
                            border: "none",
                          }}
                          onClick={() => deleteListProduct(item.id)}
                        >
                          Delete
                        </Button>
                        <Button
                          style={{
                            backgroundColor: "#0ACF83",
                            border: "none",
                          }}
                          className="ms-3"
                          onClick={() => {
                            navigate(`/update-product/${item.id}`);
                          }}
                        >
                          Update
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
}
