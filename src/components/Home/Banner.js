/* eslint-disable @next/next/no-img-element */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Banner.module.css";
// You can also use <link> for styles
import "swiper/css";
import "swiper/css/navigation";
// ..

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
const Banner = () => {
  return (
    <div className="mb-10 flex z-0 lg:space-x-4 space-x-2">
      <div className="w-9/12 h-1/5">
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="relative"
              src="https://img.freepik.com/premium-photo/creative-designer-desktop-with-black-computer-screen_670147-9534.jpg?w=740"
              alt=""
            />
            <div className="absolute bottom-16 hidden lg:block">
              <h1 class="text-4xl mb-3 font-bold text-white">
                Tech Haven: Your One-Stop Shop for Cutting-Edge Computers Online
              </h1>
              <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-red-500 hover:via-pink-500 hover:to-purple-500 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 my-4">
                Get Started
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="relative"
              src="https://img.freepik.com/free-photo/modern-monitor-elegant-table_23-2150706457.jpg?size=626&ext=jpg&ga=GA1.1.832354014.1675511612&semt=ais"
              alt=""
            />
            <div className="absolute bottom-16 hidden lg:block">
              <h1 class="text-4xl mb-3 font-bold text-white">
                Browse, Compare, and Buy: Unleash the Power of Online Computing.
              </h1>
              <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-red-500 hover:via-pink-500 hover:to-purple-500 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 my-4">
                Get Started
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="relative"
              src="https://img.freepik.com/premium-photo/modern-monitor-elegant-table_23-2150706473.jpg?w=740"
              alt=""
            />
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="absolute bottom-16 hidden lg:block "
            >
              <h1 class="text-4xl mb-3 font-bold text-white">
                Elevate Your Digital Experience: Shop Computers Online with
                Confidence
              </h1>
              <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-red-500 hover:via-pink-500 hover:to-purple-500 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 my-4">
                Get Started
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="h-1/6 lg:my-3">
        <img
          src="https://img.freepik.com/premium-photo/mega-sale-sticker-with-percent-price-off-announcement-limited-time-mega-sale-discount-web-banner-bri_419341-2186.jpg"
          alt=""
        />
        <img
          className="lg:my-3 my-2"
          src="https://img.freepik.com/premium-photo/cyber-monday-biggest-online-shopping-generative-ai_10221-21988.jpg"
          alt=""
        />
        <img
          className=" lg:h-60 w-full"
          src="https://img.freepik.com/free-photo/3d-view-personal-computer-with-vegetation_23-2150714143.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
