import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./PublicFolder/Navbar";
import Signup from "./Pages/Authentication/Signup";
import Login from "./Pages/Authentication/Login"; // Create this file
import Homescreen from "./Pages/Homescreen";
import Contact from "./PublicFolder/Contact";
import Adminlog from "./Component/AdminDashboards/Adminlog";
import Team from "./Pages/Team";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Creative from "./Pages/Creative";
import ADA from "./Pages/ADA";
import Development from "./Pages/Development";
import Digital from "./Pages/Digital";
import DigitalMarketing from "./Pages/DigitalMarketing";


function App() {

 
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homescreen />} /> 
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Adminlog />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/Creative" element={<Creative />} />
          <Route path="/ADA" element={<ADA />} />
          <Route path="/Development" element={<Development />} />
          <Route path="/Digital" element={<Digital />} />
          <Route path="/DigitalMarketing" element={<DigitalMarketing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;