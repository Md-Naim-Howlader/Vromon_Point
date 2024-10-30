import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "../styles/getReady.css";

const GetReady = () => {
  return (
    <section className="get-ready bg-default pt-5">
      <div className="container">
        <div className="section-title">
          <span className="title-info text-warning">Get Ready</span>
          <h2 className="title-heading text-primary">Pack Up and Go</h2>
          <p className="title-paragraph text-dark">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an
            commodo ligula eget dolor. Aenean massa. Cum sociis the
          </p>
        </div>
      </div>

      <div className="slider-items">
        <div>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 1000 }}
            speed={1000}
            loop={true}
            breakpoints={{
              1200: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 3,
              },
              576: {
                slidesPerView: 3,
              },
            }}
            className="custom-swiper container"
          >
            <SwiperSlide>
              <img
                src="/images/getReady/city-night.png"
                alt="get ready image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/getReady/ifelTower.png" alt="get ready image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/getReady/arcitech.png" alt="get ready image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/getReady/london.png" alt="get ready image" />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/getReady/city-night.png"
                alt="get ready image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/getReady/ifelTower.png" alt="get ready image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/getReady/arcitech.png" alt="get ready image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/getReady/london.png" alt="get ready image" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default GetReady;
