import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SectionOne from "./components/Section_1";
import SectionTwo from "./components/Section_2";
import SectionThree from "./components/Section_3";
import SectionFour from "./components/Section_4";
import "./index.css";

// import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
