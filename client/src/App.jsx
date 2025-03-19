import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./pages/navbar/Navbar";
import Login from "./pages/accounts/Login";

function App() {
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/register"]; // Add other pages if needed

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
