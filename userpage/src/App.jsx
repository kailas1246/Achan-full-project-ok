import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import AddProduct from "./Pages/AddProduct";
import Login from "./Pages/Login";
import AllOrders from "./Pages/AllOrders";
import Unsold from './Pages/Unsold';
import Sold from "./Pages/Sold";

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";

  return (
    <div className="flex">
      {!isLoginPage && <Sidebar />}
      <div className={`flex-1 ${!isLoginPage ? "md:ml-64 pt-16" : ""} min-h-screen bg-gray-100 p-4`}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/orders" element={<AllOrders />} />
          <Route path="/unsold" element={<Unsold />} />
          <Route path="/sold" element={<Sold />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
