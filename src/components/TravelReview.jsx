import React from "react";
import { FaStar } from "react-icons/fa";
import "../styles/travelReview.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const TravelReview = () => {
  return (
    <section className="pt-5 bg-default travelReview">
      <div className="container">
        <div className="section-title">
          <span className="title-info text-warning">Read The Top</span>
          <h2 className="title-heading text-primary">Travel Reviews</h2>
          <p className="title-paragraph text-dark">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean an
            commodo ligula eget dolor. Aenean massa. Cum sociis the
          </p>
        </div>

        <div className="reviews ">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={25}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            speed={1000}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              1200: {
                slidesPerView: 3,
              },

              576: {
                slidesPerView: 1,
              },
            }}
            className="custom-swiper"
          >
            {[...Array(4)].map((_, index) => (
              <SwiperSlide key={index}>
                <div className="review-item d-flex align-items-center">
                  <img src="/images/reviewUser.png" alt="Rafi Ahmed" />
                  <div className="review-details ms-2">
                    <h4>Rafi Ahmed</h4>
                    <ul className="nav my-2">
                      <li className="text-warning">
                        <FaStar />
                      </li>
                      <li className="text-warning ms-1">
                        <FaStar />
                      </li>
                      <li className="text-warning ms-1">
                        <FaStar />
                      </li>
                      <li className="text-warning ms-1">
                        <FaStar />
                      </li>
                      <li className="text-warning ms-1">
                        <FaStar />
                      </li>
                    </ul>
                    <p>
                      "I got the best package for my family trip. After a lot of
                      research, I chose this agency, and I wasn’t disappointed
                      at all."
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TravelReview;
