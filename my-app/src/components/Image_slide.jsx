import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Image_slide() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);

  const data = [
    {
      id:1,
      img:"shivam.jpg",
      deg:"",
      name:"Shivam Pundhir",
      alt:""

    },
    {
      id:2,
      img:"Bharat_2.jpg",
      deg:"",
      name:"Bharat gautam",
      alt:""

    },
    {
      id:3,
      img:"Manoj_2.jpg",
      deg:"",
      name:"Manoj",
      alt:""

    },
    {
      id:4,
      img:"Deepak_pathak.jpg",
      deg:"",
      name:"Deepak Pathak",
      alt:""

    },
    {
      id:5,
      img:"shyam_s_sharma.jpg",
      deg:"",
      name:"Shyam Sundar Sharma",
      alt:""

    },
    {
      id:6,
      img:"kamal_p.jpg",
      deg:"",
      name:"Kamal Prakash",
      alt:""

    },
    {
      id:7,
      img:"nutan_rana.jpg",
      deg:"",
      name:"Nutan Rana",
      alt:""

    },
    {
      id:8,
      img:"Gopal_pathak.jpg",
      deg:"",
      name:"Gopal Pathak",
      alt:""

    },
    {
      id:9,
      img:"rajat_kausik.jpg",
      deg:"",
      name:"Rajat Kausik",
      alt:""

    },
    {
      id:10,
      img:"Alok.jpg",
      deg:"",
      name:"Alok Kumar",
      alt:""

    },
    {
      id:11,
      img:"sanjeev.jpg",
      deg:"",
      name:"Sanjeev Parihar",
      alt:""

    },
    {
      id:12,
      img:"govind.jpg",
      deg:"",
      name:"Govind Yadav",
      alt:""

    },
    {
      id:13,
      img:"narendra.jpg",
      deg:"",
      name:"Narendra Rajput",
      alt:""

    },
    
  ]

  return (
    <div className="flex flex-col items-center px-2">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={15}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        onSwiper={(swiper) => setTotalSlides(swiper.slides.length - swiper.loopedSlides * 2)}
        onSlideChange={(swiper) => {
          let realIndex = swiper.realIndex + 1;
          setCurrentSlide(realIndex);
        }}
        breakpoints={{
          320: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="w-full "
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
         
            <img
              src={item.img}
              alt={`slide_${i}`}
              className="rounded-lg mx-auto w-full shadow-lg border border-gray-300  object-cover aspect-1/1"
            />
           

            <div className="mt-2 text-white">
            <p className="text-center text-sm md:text-base">{item.name} </p>
            <p className="text-center text-sm md:text-base">{item.deg}</p>
            </div>

            
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Navigation buttons & slide indicator */}
      <div className="md:flex items-center justify-center gap-6 mt-4 hidden">
        <button className="custom-prev bg-gray-800 text-white px-3 py-2 rounded-full hover:bg-gray-600 transition text-sm md:text-base">
          ◀
        </button>

        <div className="text-xs sm:text-sm md:text-base font-semibold text-gray-700">
          {/* Slide {currentSlide} / {totalSlides} */}
        </div>

        <button className="custom-next bg-gray-800 text-white px-3 py-2 rounded-full hover:bg-gray-600 transition text-sm md:text-base">
           ▶
        </button>
      </div>
    </div>
  );
}