// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
import "swiper/css/virtual";
// import required modules
import { Navigation } from "swiper/modules";
import style from "./carousel.module.css";

import Image from "next/image";

const shows = [
  {
    title: "Vallahala",
    imgUrl: "/vallhala.jpg",
  },
  {
    title: "Marcella",
    imgUrl: "/marcella.jpg",
  },
  {
    title: "Last Kingdom",
    imgUrl: "/lastkingdom.jpeg",
  },
];
const Carousel = () => {
  const { swiper_slide, swiper1, banner } = style;
  return (
    <div>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={true}
        modules={[Navigation]}
        className={swiper1}
        autoplay={true}
      >
        {shows.map((show) => (
          <SwiperSlide className={swiper_slide}>
            <div className={banner}>
              <Image
                src={show?.imgUrl}
                alt={show.title}
                width={600}
                height={200}
              />
              <h3>{show.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Carousel;
