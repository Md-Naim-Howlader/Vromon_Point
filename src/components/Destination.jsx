import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import "../styles/destination.css";

const Destination = () => {
  return (
    <section className="destination bg-default">
      <div className="container">
        <div className="section-title">
          <span className="title-info text-warning">let&apos;s go now</span>
          <h2 className="title-heading text-primary">Destinations</h2>
          <p className="title-paragraph text-dark">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an
            commodo ligula eget dolor. Aenean massa. Cum sociis the
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="circle-image position-relative">
              <img src="/images/destination/sajek.png" alt="Sajek Valley" />
              <span>Bangladesh</span>
            </div>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="rectangle-image position-relative">
              <img src="/images/destination/cox'sbazar.jpg" alt="Cox's Bazar" />
              <div className="caption">
                <div>
                  <h5>Cox&apos;s Bazar</h5>
                  <div className="mt-2">
                    <span className="icon text-warning">
                      <FaStarHalfAlt />
                    </span>
                    <span className="review ms-3">5.0 Good</span>
                  </div>
                </div>
                <div>
                  <span className="review position-relative">Tk.2599</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-4">
            <div className="rectangle-image position-relative">
              <img
                src="/images/destination/boat.jpg"
                alt="Sundarbans Mangrove Forest"
              />
              <div className="caption">
                <div>
                  <h5>Sundarbans Mangrove Forest</h5>
                  <div className="mt-2">
                    <span className="icon text-warning">
                      <FaStar />
                    </span>
                    <span className="review ms-3">9.5 Good</span>
                  </div>
                </div>
                <div>
                  <span className="review position-relative">Tk.3599</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-4">
            <div className="rectangle-image position-relative">
              <img
                src="/images/destination/sea-side.jpg"
                alt="St. Martin's Island"
              />
              <div className="caption">
                <div>
                  <h5>St. Martin&apos;s Island</h5>
                  <div className="mt-2">
                    <span className="icon text-warning">
                      <FaStar />
                    </span>
                    <span className="review ms-3">9.5 Good</span>
                  </div>
                </div>
                <div className="">
                  <span className="review position-relative">Tk.4599</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 text-center border-0">
          <button
            className="btn btn-lg btn-primary px-5 py-3"
            title="Browse More"
          >
            Browse More{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Destination;
