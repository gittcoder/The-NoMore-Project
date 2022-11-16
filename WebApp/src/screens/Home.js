
import React from "react";
import '../designs/Home.css';
import DivOne from "../components/DivOne.jsx";
import DivTwo from "../components/DivTwo.jsx";
import DivThree from "../components/DivThree.jsx";
import Footer from "../components/Footer.jsx"


function App() {
  return (
    <div className="home-page">
     <DivOne />
     <DivTwo  />
     <DivThree />
     <Footer/>
    </div>
    
  );
}

export default App;
