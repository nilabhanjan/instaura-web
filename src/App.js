import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import BelowNav from "./mainComponents/BelowNav";
import Navbar from "./mainComponents/Navbar";
import Home from "./mainComponents/Home";
import Contact from "./mainComponents/Contact";
import Footer from "./mainComponents/Footer";
import Location from "./mainComponents/Location";
import BackToTop from "./Utilities/BackToTop";


function App() {
  //   items object for navbar
  let sections = [
    { name: "CONTACT", link: "/contact" },
    { name: "SIGN IN", link: "/signin" },
    { name: "OUR LOCATION", link: "/location" },
  ];

  // item object for below navbar
  let links = [
    { name: "SERVICES", link: "/services" },
    { name: "BRIDAL", link: "/bridal" },
    { name: "GALLERY", link: "/gallery" },
    { name: "SHOP", link: "/shop" },
    { name: "ABOUT US", link: "/aboutus" },
    { name: "BOOK AN APPOINMENT", link: "/bookapoinment" },
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
        <BackToTop/>
        </div>

      </Router>
    </>
  );
}

export default App;
