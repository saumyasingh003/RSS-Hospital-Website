import Navbar from "./Components/navbar/Navbar";
import SecondNavbar from "./Components/navbar/SecondNavbar";
import Home from "./Components/Home";
// import './App.css'

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className=" ">

    <BrowserRouter>
      <Navbar />
      <SecondNavbar />
      <Routes>
   
        <Route path="/" element={<Home />} />
  
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
