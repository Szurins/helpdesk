import axios from "axios";
import { useEffect } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
const Home = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <h1>This is home page</h1>
      <Footer />
    </div>
  );
};

export default Home;
