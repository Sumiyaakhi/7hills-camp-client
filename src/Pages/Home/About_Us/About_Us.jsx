import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/autoplay';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Autoplay } from 'swiper/modules';
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";

const About_Us = () => {
  return (
    <>
    <SectionTitle
    title="Let's know about us"
    subTitle="About us"
    ></SectionTitle>
    <div className="my-8 mx-8 md:px-32 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div>
        <h5 className="text-green-500 text-2xl font-bold font-teko ">
          -ABOUT US-
        </h5>
        <h1 className="text-5xl py-2 font-bold font-teko">
          WE ARE THE BEST SUMMER CAMP!
        </h1>
        <p className="text-2xl font-teko text-gray-400 md:my-8">
          <span className="text-green-500 font-bold">
            7Hills Camp is for Boys and Girls.
          </span>
          Nestled on the sandy beaches of beautiful Lake Ossipee amidst the
          White Mountains of New Hampshire, Camp offers a summer experience rich
          in fun, friendship, learning and adventure. Campers range in age from
          seven to fifteen.
        </p>
        <button className="btn bg-red-500 text-white hover:bg-white hover:text-red-600 hover:border-red-700 hover:border-2 rounded-full font-bold">
          FIND OUT MORE
        </button>
      </div>
      <div>
        <h1 className="text-5xl font-teko font-bold my-6">FACILITIES</h1>
        <div className="flex gap-3">
          <input  type="checkbox" checked="checked" className="checkbox [--chkbg:red] [--chkfg:white] rounded-full  checkbox-sm" />
<h4 className="text-2xl font-teko font-semibold">PROFESSIONAL STAFF</h4>
        </div>
        <div className="flex gap-3">
          <input  type="checkbox" checked="checked" className="checkbox [--chkbg:red] [--chkfg:white] rounded-full  checkbox-sm" />
<h4 className="text-2xl font-teko font-semibold">AGES 7-15</h4>
        </div>
        <div className="flex gap-3">
          <input  type="checkbox" checked="checked" className="checkbox [--chkbg:red] [--chkfg:white] rounded-full  checkbox-sm" />
<h4 className="text-2xl font-teko font-semibold">TEAM & INDIVIDUAL SPORTS</h4>
        </div>
        <div className="flex gap-3">
          <input  type="checkbox" checked="checked" className="checkbox [--chkbg:red] [--chkfg:white] rounded-full checkbox-sm" />
<h4 className="text-2xl font-teko font-semibold">PERFORMING & CREATIVE ARTS</h4>
        </div>
        <div className="flex gap-3">
          <input  type="checkbox" checked="checked" className=" [--chkbg:red] [--chkfg:white] rounded-full checkbox checkbox-sm" />
<h4 className="text-2xl font-teko font-semibold">WATERFRONT ACTIVITIES</h4>
        </div>
        <div className="flex gap-3">
          <input  type="checkbox" checked="checked" className=" [--chkbg:red] [--chkfg:white] rounded-full checkbox checkbox-sm" />
<h4 className="text-2xl font-teko font-semibold">SPECIAL EVENTS & TRIPS</h4>
        </div>
      </div>
      <div className="items-center">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards, Autoplay ]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="mySwiper"
        // modules={[Navigation, Pagination, Scrollbar, ]}

      >
        <SwiperSlide><img className=" border-white border-8 w-[350px] " src="https://summercamp.ancorathemes.com/wp-content/uploads/2016/03/gallery_img2-540x675.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className=" border-white border-8 w-[350px]" src="https://summercamp.ancorathemes.com/wp-content/uploads/2016/03/gallery_img4-540x675.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className=" border-white border-8 w-[350px]" src="https://summercamp.ancorathemes.com/wp-content/uploads/2016/03/home1_gallery_photo.jpg" alt="" /></SwiperSlide>
       
      </Swiper>
      </div>
    </div>
   
      </>
  );
};

export default About_Us;
