import BelowNav from "./mainComponents/BelowNav";
import Navbar from "./mainComponents/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import Home from "./mainComponents/Home";
import Contact from "./mainComponents/Contact";
import Footer from "./mainComponents/Footer";
import Location from "./mainComponents/Location";

function App() {
  //   items object for navbar
  let sections = [
    { name: "CONTACT", link: "/contact" },
    { name: "SIGN IN", link: "/" },
    { name: "OUR LOCATION", link: "/location" },
  ];

  // item object for below navbar
  let links = [
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
        <div className="flex flex-col h-screen justify-between ">
          
        <header>
        <Navbar sections={sections} links={links} />
        <BelowNav links={links} />
        </header>

        <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/location" element={<Location/>} />
        </Routes>
        </main>
        
        <footer>
        <Footer/>
        </footer>
        </div>

      </Router>
    </>
  );
}

export default App;
