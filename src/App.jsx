import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Lists from "./Pages/List_Qarz";
import Profile from "./Pages/Profile_admin";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Login />} />  
        <Route path="home" element={<Home />} />  
        <Route path="/List_Qarz" element={<Lists />} />        
        {/* 404 sahifa uchun */}
        <Route path="*" element={<NotFound />} />
        <Route path="/Profile_admin" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
