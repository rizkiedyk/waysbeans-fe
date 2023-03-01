import { Form, Button, Modal } from "react-bootstrap";
import cssModules from "../modules/App.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function LoginModal(props) {
  // const { state, functionHandler } = useContext(GlobalContext);

  // const { isLogin, setLogin, user, setUser, setShowLogin, showLogin } = state;
  // const { HandleInput, HandleLogin } = functionHandler;

  let data = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const handleLogin = () => {
    let users = JSON.parse(localStorage.getItem("users"));
    let user = users.find(
      (user) => user.email === data.email && user.password === data.password
    );
    if (!user) {
      alert("user not found");
    } else {
      localStorage.setItem("loginUsers", JSON.stringify(user));
      props.isLogin(true);
      props.onHide(true);
      if (user.email === "admin@mail.com") {
        navigate("/admin-dashboard");
      } else {
        navigate("/");
      }
      window.location.reload();
    }
  };
  return (
    <>
      <Modal show={props.show} onHide={props.onHide} centered>
        <Modal.Title style={{ color: "#613D2B", padding: "20px 20px 0" }}>
          Login
        </Modal.Title>
        <Modal.Body>
          <Form onSubmit={handleLogin}>
            <Form.Group>
              <Form.Control
                type="email"
                placeholder="Enter email"
                id="email"
                name="email"
                size="lg"
                className={cssModules.formControl}
                onChange={(e) => (data.email = e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Control
                type="password"
                placeholder="Enter password"
                id="password"
                size="lg"
                name="password"
                className={cssModules.formControl}
                onChange={(e) => (data.password = e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className={`${cssModules.buttonSubmit} btn btn-secondary w-100`}
            size="lg"
            onClick={handleLogin}
          >
            Login
          </Button>
          <div className="d-flex justify-content-center mt-3 w-100">
            <p>
              Don't have an account? Click &nbsp;
              <Link
                to="#"
                onClick={props.switch}
                className={cssModules.textHere}
              >
                Here
              </Link>
            </p>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
