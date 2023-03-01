import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
// import Login from "./pages/formLogin";
// import Register from "./pages/formRegister";
import Detail from "./pages/DetailProduct";
import Cart from "./pages/Cart";
import MyTransaction from "./pages/MyTransaction";
import AddProduct from "./pages/AddProduct";
import AdminDashboard from "./pages/AdminDashboard";
import ListProduct from "./pages/ListProduct";
import Header from "./component/Navbar";
import UpdateProduct from "./pages/updateProduct";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
        <Route path="/detail-product/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/my-transaction" element={<MyTransaction />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/list-product" element={<ListProduct />} />
        <Route path="/update-product/:id" element={<UpdateProduct />} />
      </Routes>
    </>
  );
}

export default App;
