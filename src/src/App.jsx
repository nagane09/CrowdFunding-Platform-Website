import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import Signup from "./Signup";
import Explore from "./Explore";
import CampaignDetails from "./CampaignDetails";
import CreateCampaign from "./CreateCampaign";
import Dashboard from "./Dashboard";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

const App = () => {
  return (
    <>
      <Navbar />  {/* Navbar is separate */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/campaign/:id" element={<CampaignDetails />} />
        <Route path="/create-campaign" element={<CreateCampaign />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
