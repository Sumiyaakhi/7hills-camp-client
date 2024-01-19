import React from "react";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";

const Map_Info = () => {
  return (
    <>
    <SectionTitle
    title="Camping guide"
    subTitle="For your quickness"
    ></SectionTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-6xl mx-8 md:mx-auto">
      <div>
        <div className="">
            <img className="w-[250px] md:w-[450px] mx-auto" src="https://i.ibb.co/Tvs9Pf9/camp-guide.jpg" alt="" />
        </div>
      </div>
    
      <div className="text-center md:my-auto my-5">
        <h5 className="text-green-500 text-2xl font-bold font-teko ">
        - MAP INFO -
        </h5>
        <h1 className="text-5xl py-2 font-bold font-teko">
        OVERVIEW OUR CAMP TERRITORY
        </h1>
        <p className="text-2xl font-teko text-gray-400 md:my-8">
          <span className="text-green-500 font-bold">
            7Hills Camp is for Boys and Girls.
          </span>
          Nullam vel pellentesque tortor, nec ornare enim. Praesent vehicula. Phasellus semper nisi eu quam eleifend, eu scel erisque nisl fermentum. Nam sit amet placerat eros, id faucibus. Nullam vel pellentesque tortor, nec ornare enim.
        </p>
        <button className="btn bg-red-500 text-white hover:bg-white hover:text-red-600 hover:border-red-700 hover:border-2 rounded-full font-bold">
          FIND OUT MORE
        </button>
      </div>

    </div>
    </>
  );
};

export default Map_Info;
