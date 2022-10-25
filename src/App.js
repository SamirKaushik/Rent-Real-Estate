import React from "react";
import Navbar from "./NavBar";
import MainBody from "./MainBody";
import Footer from "./footer";
const App = () => {
  return (
    <div id="page-container">
      <div id="content-wrap">
        <Navbar />
        <MainBody />
      </div>
      <Footer />
    </div>
  );
}

export default App;
