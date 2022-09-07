import BelowNav from "./BelowNav";
import Navbar from "./Navbar";


function App() {
  let Links =[
    {name:"SERVICES",link:"/"},
    {name:"BRIDAL",link:"/"},
    {name:"GALLERY",link:"/"},
    {name:"SHOP",link:"/"},
    {name:"ABOUT US",link:"/"},
    {name:"BOOK AN APPOINMENT",link:"/"},
  ];
  return (
    <div>
    <Navbar/>
    <BelowNav Links={Links}/>
    </div>
  );
}

export default App;
