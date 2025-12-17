import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homes from "./Pages/Home.jsx";
import Lists from "./Pages/List_Qarz.jsx";
import Profile from "./Pages/Profile_admin.jsx";
import Login from "./Pages/Login.jsx";
import Registering from "./Pages/Register.jsx";
import Reset_pass from "./Pages/Reset_pass.jsx";
import Loan_alert from "./Pages/Loan_alerts.jsx";
import NotFound from "./Pages/NotFound.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Registering />} />
        <Route path="/Reset_pass" element={<Reset_pass />} />
        <Route path="/Home" element={<Homes />} />
        <Route path="/List_Qarz" element={<Lists />} />
        <Route path="/Loan_alerts" element={<Loan_alert />} />
        <Route path="/Profile_admin" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;