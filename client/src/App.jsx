import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./pages/navbar/Navbar";
import Login from "./pages/accounts/Login";
import Register from "./pages/accounts/Register";
import TermsAndConditions from "./pages/accounts/TermsAndConditions";
import { Toaster } from 'react-hot-toast';
import AgencyPage from "./pages/Agencies/AgencyPage";


function App() {
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/register","/terms-and-conditions"]; // Add other pages if needed

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/terms-and-conditions" element={<TermsAndConditions/>}/>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
