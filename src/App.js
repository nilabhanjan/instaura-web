import BelowNav from "./mainComponents/BelowNav";
import Navbar from "./mainComponents/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import Home from "./mainComponents/Home";
import Contact from "./mainComponents/Contact";

function App() {

  // item object for below navbar
  let Links = [
    { name: "SERVICES", link: "/" },
    { name: "BRIDAL", link: "/" },
    { name: "GALLERY", link: "/" },
    { name: "SHOP", link: "/" },
    { name: "ABOUT US", link: "/" },
    { name: "BOOK AN APPOINMENT", link: "/" },
  ];
  return (
    <>
      <Router>
        <Navbar />
        <BelowNav Links={Links} />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
