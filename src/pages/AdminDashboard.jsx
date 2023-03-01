import { Container, Table } from "react-bootstrap";

export default function AdminDashboard() {
  return (
    <>
      <Container style={{ margin: "100px auto" }}>
        <h1>Income Transaction</h1>
        <div className="w-75 m-auto">
          <Table className="mt-5" bordered hover>
            <thead style={{ backgroundColor: "#e5e5e5" }}>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Address</th>
                <th>Post Code</th>
                <th>Products Order</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Sugeng No Pants</td>
                <td>Cileungsi</td>
                <td>16580</td>
                <td>RWANDA Beans</td>
                <td>Waiting Approve</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Sugeng No Pants</td>
                <td>Cileungsi</td>
                <td>16580</td>
                <td>RWANDA Beans</td>
                <td>Waiting Approve</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Sugeng No Pants</td>
                <td>Cileungsi</td>
                <td>16580</td>
                <td>RWANDA Beans</td>
                <td>Waiting Approve</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Sugeng No Pants</td>
                <td>Cileungsi</td>
                <td>16580</td>
                <td>RWANDA Beans</td>
                <td>Waiting Approve</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
}
