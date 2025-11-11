import Footer from "../Components/Footer";
import Header from "../Components/Header";
const Home = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <div className="flex justify-center text-center items-center bg-linear-to-r from-gray-800 to-gray-700 h-full flex-col gap-5">
        <p className="text-6xl text-gray-200">Helpdesk</p>
        <p className="text-2xl text-gray-200">Manage IT and service requests easily with Helpdesk — a fast, secure, <br />and user-friendly platform for handling tickets, tracking issues, and improving communication across teams.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
