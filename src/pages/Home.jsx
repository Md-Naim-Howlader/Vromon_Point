import Destination from "../components/Destination";
import Hero from "../components/Hero";
import SearchDestinations from "../components/SearchDestinations";
import GetReady from "../components/GetReady";
import TravelReview from "../components/TravelReview";
import VisionMission from "../components/VisionMission";
import Blogs from "./Blogs";

const Home = () => {
  return (
    <div className="home-page">
      <div className="position-relative">
        <Hero />
        <SearchDestinations />
      </div>
      <Destination />
      <GetReady />
      <TravelReview />
      <VisionMission />
      <Blogs />
    </div>
  );
};

export default Home;
