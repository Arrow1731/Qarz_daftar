// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";
// import Lists from "./Pages/List_Qarz";
// import Profile from "./Pages/Profile_admin";
// import NotFound from "./Pages/NotFound";
// import Login from "./Pages/Login";
// import Register from "./Pages/Register";
// import Reset_pass from "./Pages/Reset_pass";
// import Loan_alert from "./Pages/Loan_alerts";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* <Route path="/" element={<Home />} /> */}
//         <Route path="/Login" element={<Login/>}/>
//         <Route path="/Register" element={<Register />} />
//         <Route path="/Reset_pass" element={<Reset_pass/>}/>
//         <Route path="/Home" element={<Home />} />
//         <Route path="/List_Qarz" element={<Lists />} />  
//         <Route path="/Loan_alerts" element={<Loan_alert/>}/>      
//         <Route path="/Profile_admin" element={<Profile />} />

//         {/* 404 page */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;








import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
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
        <Route path="/Home" element={<Home />} />
        <Route path="/List_Qarz" element={<Lists />} />
        <Route path="/Loan_alerts" element={<Loan_alert />} />
        <Route path="/Profile_admin" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;