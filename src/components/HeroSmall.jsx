import "../styles/hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const HeroSmall = ({ heroValues }) => {
  const { info, heading, sliderNo, headingColor, paragraph } = heroValues;
  return (
    <section className="hero-section">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 2000 }}
        speed={1500}
        loop={true}
      >
        <SwiperSlide>
          <div className={sliderNo}>
            <div className="twin-button">
              <button>See Discount</button>
              <button className="mt-3">Book Now</button>
            </div>
            <div className="container">
              <div className="section-title second">
                <span className="title-info">{info}</span>
                <h2 className={headingColor}>{heading}</h2>
                <p className="title-paragraph text-white">{paragraph}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={sliderNo}>
            <div className="twin-button">
              <button>See Discount</button>
              <button className="mt-3">Book Now</button>
            </div>
            <div className="container">
              <div className="section-title second">
                <span className="title-info ">{info}</span>
                <h2 className={headingColor}>{heading}</h2>
                <p className="title-paragraph text-white">{paragraph}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSmall;
