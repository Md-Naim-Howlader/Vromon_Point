import Destination from "../components/Destination";
import Hero from "../components/Hero";
import SearchDestinations from "../components/SearchDestinations";
import GetReady from "../components/GetReady";
import TravelReview from "../components/TravelReview";

const Home = () => {
  return (
    <>
      <div className="position-relative">
        <Hero />
        <SearchDestinations />
      </div>
      <Destination />
      <GetReady />
      <TravelReview />
    </>
  );
};

export default Home;
