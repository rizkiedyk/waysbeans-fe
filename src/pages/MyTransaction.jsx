export default function MyTransaction() {
  const getUser = JSON.parse(localStorage.getItem("loginUsers"));
  return (
    <>
      <div>
        <div
          className="d-flex justify-content-between m-auto mt-5"
          style={{
            width: "85%",
            color: "#613D2B",
          }}
        >
          <div style={{ width: "600px" }}>
            <h3 className="fw-bold">My Profile</h3>
            <div className="d-flex mt-4">
              <div style={{ width: "180px" }}>
                <img
                  src="/img/Rectangle12.png"
                  alt=""
                  style={{ width: "100%", borderRadius: "5px" }}
                />
              </div>
              <div className="ms-4">
                <h6 className="fw-bold">Full Name</h6>
                <p>{getUser.fullName}</p>
                <h6 className="fw-bold">Email</h6>
                <p>{getUser.email}</p>
              </div>
            </div>
          </div>
          <div style={{ width: "600px" }}>
            <h3 className="fw-bold">My Transaction</h3>
            <div
              className="d-flex mt-4"
              style={{ backgroundColor: "#F6E6DA", padding: "15px 30px" }}
            >
              <div style={{ width: "27%" }}>
                <img src="/img/product1.png" alt="" style={{ width: "100%" }} />
              </div>
              <div className="my-auto ms-3">
                <h5 style={{ marginBottom: "8px" }} className="fw-bold">
                  GETAMALA Beans
                </h5>
                <div style={{ display: "flex" }}>
                  <p className="fw-bold me-1" style={{ fontSize: "14px" }}>
                    Saturday,
                  </p>
                  <p style={{ fontSize: "14px" }}>5 March 2000</p>
                </div>
                <div>
                  <p style={{ marginBottom: "0", fontSize: "14px" }}>
                    Price : Rp.300.900
                  </p>
                  <p
                    style={{
                      marginBottom: "0",
                      fontSize: "14px",
                    }}
                  >
                    Qty : 2
                  </p>
                  <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                    Sub Total : 601.800
                  </p>
                </div>
              </div>
              <div className="ms-auto my-auto">
                <div className="d-flex justify-content-center mb-3">
                  <img
                    src="/img/iconlogo.png"
                    alt=""
                    style={{
                      width: "80px",
                    }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-3">
                  <img src="/img/Groupbarcode.png" alt="" />
                </div>
                <div
                  className="d-flex justify-content-center"
                  style={{ backgroundColor: "#f4e1c1", width: "135px" }}
                >
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#FF9900",
                    }}
                  >
                    Waiting Approve
                  </span>
                </div>
              </div>
            </div>
            <div
              className="d-flex mt-3"
              style={{ backgroundColor: "#F6E6DA", padding: "15px 30px" }}
            >
              <div style={{ width: "27%" }}>
                <img src="/img/product1.png" alt="" style={{ width: "100%" }} />
              </div>
              <div className="my-auto ms-3">
                <h5 style={{ marginBottom: "8px" }} className="fw-bold">
                  GETAMALA Beans
                </h5>
                <div style={{ display: "flex" }}>
                  <p className="fw-bold me-1" style={{ fontSize: "14px" }}>
                    Saturday,
                  </p>
                  <p style={{ fontSize: "14px" }}>5 March 2000</p>
                </div>
                <div>
                  <p style={{ marginBottom: "0", fontSize: "14px" }}>
                    Price : Rp.300.900
                  </p>
                  <p
                    style={{
                      marginBottom: "0",
                      fontSize: "14px",
                    }}
                  >
                    Qty : 2
                  </p>
                  <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                    Sub Total : 601.800
                  </p>
                </div>
              </div>
              <div className="ms-auto my-auto">
                <div className="d-flex justify-content-center mb-3">
                  <img
                    src="/img/iconlogo.png"
                    alt=""
                    style={{
                      width: "80px",
                    }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-3">
                  <img src="/img/Groupbarcode.png" alt="" />
                </div>
                <div
                  className="d-flex justify-content-center"
                  style={{ backgroundColor: "#e6e8c1", width: "135px" }}
                >
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#8FFF00",
                    }}
                  >
                    Succes
                  </span>
                </div>
              </div>
            </div>
            <div
              className="d-flex mt-3"
              style={{ backgroundColor: "#F6E6DA", padding: "15px 30px" }}
            >
              <div style={{ width: "27%" }}>
                <img src="/img/product1.png" alt="" style={{ width: "100%" }} />
              </div>
              <div className="my-auto ms-3">
                <h5 style={{ marginBottom: "8px" }} className="fw-bold">
                  GETAMALA Beans
                </h5>
                <div style={{ display: "flex" }}>
                  <p className="fw-bold me-1" style={{ fontSize: "14px" }}>
                    Saturday,
                  </p>
                  <p style={{ fontSize: "14px" }}>5 March 2000</p>
                </div>
                <div>
                  <p style={{ marginBottom: "0", fontSize: "14px" }}>
                    Price : Rp.300.900
                  </p>
                  <p
                    style={{
                      marginBottom: "0",
                      fontSize: "14px",
                    }}
                  >
                    Qty : 2
                  </p>
                  <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                    Sub Total : 601.800
                  </p>
                </div>
              </div>
              <div className="ms-auto my-auto">
                <div className="d-flex justify-content-center mb-3">
                  <img
                    src="/img/iconlogo.png"
                    alt=""
                    style={{
                      width: "80px",
                    }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-3">
                  <img src="/img/Groupbarcode.png" alt="" />
                </div>
                <div
                  className="d-flex justify-content-center"
                  style={{ backgroundColor: "#613D2B", width: "135px" }}
                >
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#FFFFFF",
                    }}
                  >
                    Completed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
