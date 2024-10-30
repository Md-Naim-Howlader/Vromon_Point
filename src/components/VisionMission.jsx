import React from "react";

const VisionMission = () => {
  return (
    <section className="bg-default pt-5">
      <div className="container">
        <div className="section-title">
          <span className="title-info text-warning">Our Mission & Vision</span>
          <h2 className="title-heading text-primary">Discover Our Story</h2>
          <p className="title-paragraph text-dark">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an
            commodo ligula eget dolor. Aenean massa. Cum sociis the
          </p>
        </div>
        <div className="row mt-5 align-items-center">
          <div className="col-lg-6">
            <div className="mini-title">
              <h2>About Us</h2>
              <p>
                At Vromon Point, we believe travel should be easy, enjoyable,
                and unforgettable. Our dedicated team of experts is here to
                craft personalized trips that match your style and budget. From
                flights and hotels to guided tours, we handle it all—so you can
                focus on enjoying the journey. With years of experience and
                thousands of happy clients, we’re proud to be your trusted
                travel partner. Wherever you want to go, let us take you there!
              </p>
            </div>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <img src="/images/bus.png" alt="bus image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
