import Destination from "../components/Destination";
import Hero from "../components/Hero";
import SearchDestinations from "../components/SearchDestinations";

const Home = () => {
  return (
    <>
      <div className="position-relative">
        <Hero />
        <SearchDestinations />
      </div>
      <Destination />
    </>
  );
};

export default Home;
