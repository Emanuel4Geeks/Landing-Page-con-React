import React from "react";
import CardGroup from "./cardGroup.jsx";
import Footer from "./footer.jsx";
import Jumbotron from "./jumbotron.jsx";
import Navbar from "./navbar.jsx";

//create your first component
const Home = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <Jumbotron />
        <CardGroup />
      </main>
      <Footer />
    </>
  );
};

export default Home;
