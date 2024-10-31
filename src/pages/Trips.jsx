import { useEffect } from "react";

const Trips = () => {
  useEffect(() => {
    document.title = "Trips | Vromon Point";
  });
  return <div>Trips</div>;
};

export default Trips;
