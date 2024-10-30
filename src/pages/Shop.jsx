import HeroSmall from "../components/HeroSmall";

const Shop = () => {
  const heroValues = {
    info: "Amazing tour",
    heading: "Shop",
    sliderNo: "hero-slider hero-2",
    headingColor: "text-white title-heading ",
    paragraph: "",
  };
  return (
    <>
      <HeroSmall heroValues={heroValues} />
    </>
  );
};

export default Shop;
