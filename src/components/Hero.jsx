// import "../styles/hero.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation, Autoplay } from "swiper";
// const Hero = () => {
//   return (
//     <section className="hero-section">
//       <Swiper
//         modules={[Pagination, Navigation, Autoplay]}
//         spaceBetween={30}
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//         navigation
//         autoplay={{ delay: 3000 }}
//         loop={true}
//       >
//         <SwiperSlide>
//           <div className="hero-slider hero-1">
//             <div className="twin-button">
//               <button>Discount</button>
//               <button className="mt-3">Book Now</button>
//             </div>
//             <div className="container ">
//               <div className="section-title">
//                 <span className="title-info text-white">let&apos;s go now</span>
//                 <h2 className="title-heading text-white">Destinations</h2>
//                 <p className="title-paragraph text-white">
//                   Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene
//                   an commodo ligula eget dolor. Aenean massa. Cum sociis the
//                 </p>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="hero-slider hero-1">
//             <div className="twin-button">
//               <button>Discount</button>
//               <button className="mt-3">Book Now</button>
//             </div>
//             <div className="container ">
//               <div className="section-title">
//                 <span className="title-info text-white">let&apos;s go now</span>
//                 <h2 className="title-heading text-white">Destinations</h2>
//                 <p className="title-paragraph text-white">
//                   Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene
//                   an commodo ligula eget dolor. Aenean massa. Cum sociis the
//                 </p>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="hero-slider hero-1">
//             <div className="twin-button">
//               <button>Discount</button>
//               <button className="mt-3">Book Now</button>
//             </div>
//             <div className="container ">
//               <div className="section-title">
//                 <span className="title-info text-white">let&apos;s go now</span>
//                 <h2 className="title-heading text-white">Destinations</h2>
//                 <p className="title-paragraph text-white">
//                   Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene
//                   an commodo ligula eget dolor. Aenean massa. Cum sociis the
//                 </p>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </section>
//   );
// };

// export default Hero;

// =====================================

import "../styles/hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const Hero = () => {
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
          <div className="hero-slider hero-1">
            <div className="twin-button">
              <button>Discount</button>
              <button className="mt-3">Book Now</button>
            </div>
            <div className="container">
              <div className="section-title">
                <span className="title-info text-white">let&apos;s go now</span>
                <h2 className="title-heading text-white">Destinations</h2>
                <p className="title-paragraph text-white">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene
                  an commodo ligula eget dolor. Aenean massa. Cum sociis the
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-slider hero-2">
            <div className="twin-button">
              <button>Discount</button>
              <button className="mt-3">Book Now</button>
            </div>
            <div className="container">
              <div className="section-title">
                <span className="title-info text-white">let&apos;s go now</span>
                <h2 className="title-heading text-white">Destinations</h2>
                <p className="title-paragraph text-white">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene
                  an commodo ligula eget dolor. Aenean massa. Cum sociis the
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
