import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import img1 from "../../../assets/images/banner1.jpg";
import img2 from "../../../assets/images/banner2.jpg";
import img3 from "../../../assets/images/banner3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
    const [days, setDays] = useState(15);
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(47);

  useEffect(() => {
    const interval = setInterval(() => {
      // Decrease seconds
      setSeconds(prevSeconds => (prevSeconds > 0 ? prevSeconds - 1 : 59));

      if (seconds === 0) {
        setMinutes(prevMinutes => (prevMinutes > 0 ? prevMinutes - 1 : 59));

        if (minutes === 0) {
          setHours(prevHours => (prevHours > 0 ? prevHours - 1 : 23));

          if (hours === 0) {
            setDays(prevDays => (prevDays > 0 ? prevDays - 1 : 0));
          }
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [days, hours, minutes, seconds]);
  
    useEffect(() => {
      AOS.init();
    }, []);
  return (
    <div className="">
      <Swiper 
     modules={[Navigation, Pagination, Scrollbar, Autoplay]}
    //  modules={[Navigation, Pagination, Scrollbar]}
     spaceBetween={50}
     slidesPerView={1}
     navigation
     pagination={{ clickable: true }}
     scrollbar={{ draggable: true }}
     autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        <SwiperSlide 
    //    data-aos="zoom-in"
        // data-aos-duration="1000"
        >
          <div>
            <img className="w-full h-full " src={img1} alt="" />
            <div className="fixed top-24 md:top-[25%] left-28 md:left-[40%]">
                <h1
                 data-aos="fade-up-right"
                 data-aos-duration="3000"
                className="font-teko text-4xl md:text-7xl text-white">Make your <span className="text-green-600 font-semibold">summer </span> </h1>
                <p
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="3000"
                className="text-3xl md:text-5xl font-agbalumo text-center text-white">Unforgotable !</p>
               
            </div>
            <div className="fixed top-44 left-40 md:top-[42%] md:left-[48%] ">
            <button data-aos="flip-left" 
            data-aos-duration="3000"
            className=" text-white font-teko text-xl text-center bg-red-600 opacity-70 px-3 md:px-7 md:py-2 hover:shadow-[4px_4px_4px_rgb(255,0,0)] hover:text-red-600 rounded-full hover:bg-transparent">Enroll Now</button>
            </div>
            
          </div>
        </SwiperSlide>
        <SwiperSlide
    //    data-aos="zoom-in"
    //      data-aos-duration="1000"
        >
        <div>
            <img className="w-full h-full" src={img2} alt="" />
            <div className="fixed top-12 md:top-[28%] font-bold left-32 md:left-[43%]">
            <h1 className="font-agbalumo text-center text-green-700 text-2xl ">The best</h1>
                <h1
                 data-aos="fade-up-right"
                 data-aos-duration="3000"
                className="font-teko text-center text-green-700 text-4xl md:text-7xl ">summer Camp</h1>
                <h1 className="font-agbalumo text-green-700 text-center text-2xl ">Starts in</h1>
               
            </div>
            <div className="fixed top-40 left-20 md:top-[45%] md:left-[40%] ">
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div className="flex flex-col p-3 bg-green-700 text-neutral-content rounded-full">
    <span className="countdown font-mono text-xl md:text-5xl">
      {days}
    </span>
    days
  </div> 
  <div className="flex flex-col p-3 bg-green-700 rounded-full text-neutral-content">
    <span className="countdown font-mono  text-xl md:text-5xl">
     {hours}
    </span>
    hours
  </div> 
  <div className="flex flex-col p-3 bg-green-700 rounded-full text-neutral-content">
    <span className="countdown font-mono  text-xl md:text-5xl">
      {minutes}
    </span>
    min
  </div> 
  <div className="flex flex-col p-3 bg-green-700 rounded-full text-neutral-content">
    <span className="countdown font-mono  text-xl md:text-5xl">
     {seconds}
    </span>
    sec
  </div>
</div>
            </div>
            <div className="fixed top-56 left-48 md:top-[60%] md:left-[48%] ">
            <button className=" text-white font-teko text-xl text-center bg-black opacity-70 px-3 my-2 md:px-7 py-2 hover:shadow-[4px_4px_4px_rgb(0,0,0)] hover:text-black rounded-full hover:bg-transparent">Enroll Now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
        //  data-aos="fade-up"
        //  data-aos-duration="1000"
        >
        <div>
            <img className="w-full h-full" src={img3} alt="" />
            <div className="fixed top-20 md:top-[25%] left-28 md:left-[40%]">
                <h1
                 data-aos="fade-up-right"
                 data-aos-duration="3000"
                className="font-teko text-4xl md:text-6xl text-green-700">Make your summer</h1>
                <p
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="3000"
                className="text-3xl md:text-5xl font-agbalumo text-center text-green-700">Unforgotable !</p>
               
            </div>
            <div className="fixed top-40 left-40 md:top-[40%] md:left-[48%] ">
            <button className=" text-white font-teko text-xl text-center bg-red-600 opacity-70 px-3 md:px-7 py-2 hover:shadow-[4px_4px_4px_rgb(255,0,0)] hover:text-red-600 rounded-full hover:bg-transparent">Enroll Now</button>
            </div>
            
          </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default Banner;
