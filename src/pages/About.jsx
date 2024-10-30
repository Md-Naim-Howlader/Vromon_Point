import HeroSmall from "../components/HeroSmall";
import TravelReview from "../components/TravelReview";
import VisionMission from "../components/VisionMission";

const About = () => {
  const heroValues = {
    info: "Amazing",
    heading: "About Us",
    sliderNo: "hero-slider hero-2",
    headingColor: "text-white title-heading ",
    paragraph: "",
  };
  return (
    <>
      <HeroSmall heroValues={heroValues} />
      <VisionMission />
      <TravelReview />
    </>
  );
};

export default About;
