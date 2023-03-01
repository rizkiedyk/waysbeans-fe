import { Form, Button, Modal } from "react-bootstrap";
import cssModules from "../modules/App.module.css";
import { Link } from "react-router-dom";

export default function RegisterModal(props) {
  let user = {
    email: "",
    password: "",
    fullName: "",
  };

  const handleRegister = () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    props.onHide(true);
  };

  return (
    <Modal show={props.show} onHide={props.onHide} centered>
      <Modal.Title style={{ color: "#613D2B", padding: "20px 20px 0" }}>
        Register
      </Modal.Title>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Control
              type="email"
              placeholder="Enter email"
              id="email"
              size="lg"
              className={cssModules.formControl}
              onChange={(e) => (user.email = e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mt-4">
            <Form.Control
              type="password"
              placeholder="Enter password"
              id="password"
              size="lg"
              className={cssModules.formControl}
              onChange={(e) => (user.password = e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mt-4">
            <Form.Control
              type="text"
              placeholder="Full Name"
              id="name"
              size="lg"
              className={cssModules.formControl}
              onChange={(e) => (user.fullName = e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className={`${cssModules.buttonSubmit} btn btn-secondary w-100`}
          size="lg"
          onClick={handleRegister}
        >
          Register
        </Button>
        <div className="d-flex justify-content-center mt-3 w-100">
          <p>
            Already have an account? Click{" "}
            <Link to="#" onClick={props.switch} className={cssModules.textHere}>
              Here
            </Link>
          </p>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
