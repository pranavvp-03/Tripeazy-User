import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./pages/navbar/Navbar";
import Login from "./pages/accounts/Login";
import Register from "./pages/accounts/Register";
import TermsAndConditions from "./pages/accounts/TermsAndConditions";
import { Toaster } from 'react-hot-toast';
import AgencyList from "./pages/Agencies/AgencyList";
import  ProtectedRoute from "./utils/ProtectRoute"
import Packages from "./pages/packages/package";
import BlogList from "./pages/Blog/BlogList";
import AboutUs from "./pages/aboutus/Aboutus";




function App() {
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/register","/terms-and-conditions"]; // Add other pages if needed

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      
      <Routes>
        <Route path="/login" element={<ProtectedRoute><Login /></ProtectedRoute>} />
        <Route path="/register" element={<ProtectedRoute><Register/></ProtectedRoute>}/>
        <Route path="/terms-and-conditions" element={<TermsAndConditions/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/agencies" element={<AgencyList/>}/>
        <Route path="/packages" element={<Packages/>}/>
        <Route path="/blogs" element={<BlogList/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
       

      </Routes>
    </>
  );
}

export default App;
