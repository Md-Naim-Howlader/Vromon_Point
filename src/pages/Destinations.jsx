import Destination from "../components/Destination";
import GetReady from "../components/GetReady";
import HeroSmall from "../components/HeroSmall";

const Destinations = () => {
  const heroValues = {
    info: "Pick Your Dream Destination",
    heading: "Create memories in Bangladesh",
    sliderNo: "hero-slider hero-1",
    headingColor: "text-primary title-heading heading-small",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene ancommodo ligula eget dolor. Aenean massa. Cum sociis the",
  };
  return (
    <>
      <HeroSmall heroValues={heroValues} />
      <Destination />
      <GetReady />
    </>
  );
};

export default Destinations;
