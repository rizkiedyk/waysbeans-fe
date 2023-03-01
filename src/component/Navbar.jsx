import {
  Navbar,
  Container,
  Nav,
  Button,
  NavDropdown,
  Badge,
} from "react-bootstrap";
import cssModules from "../modules/App.module.css";
import { Link, NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import LoginModal from "./FormLogin";
import RegisterModal from "./FormRegister";

function Header() {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const [loginUsers, setLoginUsers] = useState({});

  const handleShowLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };
  const handleCloseLogin = () => setShowLogin(false);

  const handleShowRegister = () => {
    setShowRegister(true);
    setShowLogin(false);
  };
  const handleCloseRegister = () => setShowRegister(false);

  // handle login user
  useEffect(() => {
    if (localStorage.getItem("loginUsers")) {
      setLoginUsers(JSON.parse(localStorage.getItem("loginUsers")));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loginUsers");
    setLoginUsers({});
    window.location.reload();
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className="shadow">
        <Container>
          <Navbar.Brand href="/">
            <img src="/img/Iconlogo.png" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-3 w-25 d-flex justify-content-end">
              {!loginUsers?.email ? (
                <>
                  <Link
                    to="#"
                    style={{
                      textDecoration: "none",
                    }}
                    onClick={handleShowLogin}
                  >
                    <Button
                      className={`${cssModules.buttonLogin} ps-4 pe-4`}
                      onClick={() => setShowLogin(true)}
                    >
                      Login
                    </Button>
                  </Link>
                  <Link
                    to="#"
                    style={{ textDecoration: "none" }}
                    onClick={handleShowRegister}
                  >
                    <Button
                      className={`${cssModules.buttonRegister} ps-4 pe-4`}
                    >
                      Register
                    </Button>
                  </Link>
                </>
              ) : loginUsers?.email === "admin@mail.com" ? (
                <>
                  <NavDropdown
                    title={
                      <img
                        src="/img/profile.png"
                        alt=""
                        style={{ width: "60px" }}
                      />
                    }
                  >
                    <NavDropdown.Item href="/add-product">
                      <img
                        src="/img/iconAddProduct.png"
                        alt=""
                        style={{ width: "20px" }}
                      />
                      <span className="ms-3 fw-bold">Add Product</span>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="list-product">
                      <img
                        src="/img/iconAddProduct.png"
                        alt=""
                        style={{ width: "20px" }}
                      />
                      <span className="ms-3 fw-bold">List Product</span>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={handleLogout} href="/">
                      {" "}
                      <img
                        src="/img/iconLogOut.png"
                        alt=""
                        style={{ width: "20px" }}
                      />
                      <span className="ms-3 fw-bold">Logout</span>
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <div
                    className="d-flex justify-content-between align-items-center"
                    style={{ width: "150px" }}
                  >
                    <NavLink to="/cart">
                      <img
                        src="/img/Vector.png"
                        alt=""
                        style={{ width: "35px", height: "32.26px" }}
                      />
                      <Badge
                        pill
                        className="bg-danger"
                        style={{
                          height: "16px",
                          width: "15px",
                          position: "absolute",
                          top: "34px",
                          right: "204px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: "9px",
                        }}
                      >
                        1
                      </Badge>
                    </NavLink>
                    <NavDropdown
                      title={
                        <img
                          src="/img/profile.png"
                          alt=""
                          style={{ width: "60px" }}
                        />
                      }
                    >
                      <NavDropdown.Item href="/my-transaction">
                        <img
                          src="/img/iconProfile.png"
                          alt=""
                          style={{ width: "20px" }}
                        />
                        <span className="ms-3 fw-bold">Profile</span>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={handleLogout} href="/">
                        <img
                          src="/img/iconLogOut.png"
                          alt=""
                          style={{ width: "20px" }}
                        />
                        <span className="ms-3 fw-bold">Logout</span>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <LoginModal
        show={showLogin}
        isLogin={setLogin}
        onHide={handleCloseLogin}
        switch={handleShowRegister}
      />
      <RegisterModal
        show={showRegister}
        onHide={handleCloseRegister}
        switch={handleShowLogin}
      />
    </>
  );
}

export default Header;

// {`${
//   loginUsers.email === "admin@mail.com" ? "/admin-dashboard" : "/"
// }`}
