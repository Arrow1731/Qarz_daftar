import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Login />} />        
        <Route path="/about" element={<About />} />        
        {/* 404 sahifa uchun */}
        <Route path="*" element={<NotFound />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
