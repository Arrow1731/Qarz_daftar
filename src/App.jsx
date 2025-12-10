import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Lists from "./Pages/List_Qarz";
import Profile from "./Pages/Profile_admin";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";
import Register from "./Pages/register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />  
        <Route path="/list_qarz" element={<Lists />} />        
        <Route path="/profile_admin" element={<Profile />} />

        {/* 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;