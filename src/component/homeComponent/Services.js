import React, { useState } from "react";
import pic1 from "../../assets/service1.png";
import pic2 from "../../assets/service2.png";
import pic3 from "../../assets/service3.png";
import pic4 from "../../assets/service4.png";
import pic5 from "../../assets/service5.png";
import pic6 from "../../assets/service6.png";
import { Link } from 'react-router-dom';

const Services = () => {
  const [serviceData, setServiceData] = useState([
    {
      pic: pic1,
      title: "Web Development",
    },
    {
      pic: pic2,
      title: "App Development",
    },
    {
      pic: pic3,
      title: "Cloud Services",
    },
    {
      pic: pic4,
      title: "SEO Optimization",
    },
    {
      pic: pic5,
      title: "E-commerce Web",
    },
    {
      pic: pic6,
      title: "CMS Integration",
    },
  ]);
  return (
    <>
    <a name="services"></a>
    <div id="services" className="lg:w-[81.4%] w-[93%] mx-auto h-auto py-5">
      <div className="text-center xl:w-[48.99%] lg:w-[52%] w-[100%] mx-auto ">
        <span className="font-Poppins text-base text-[#4159A7] font-[500] border-b-[3px] border-[#4159A7] ">
          Services Offer
        </span>
        <h1 className="font-[600] font-poppins md:text-[42px] sm:text-[35px] text-[30px]">
          What Services Include
        </h1>
        <p className="font-poppins  text-[#000000] text-[16px] md:leading-9">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.
        </p>
      </div>

      <div className="flex flex-wrap lg:justify-between justify-evenly mt-5">
        {serviceData.map((data, index) => {
          return (
            <div
              className={`lg:w-[31.1%] md:w-[40%]  h-auto shadow-md rounded-lg my-7 hover:bg-[#4159A7] hover:text-white  ${ index === 1 ? "text-white bg-[#4159A7]  hover:text-[black] hover:bg-[#F5F5F5]" : "bg-[#F5F5F5]"
              } `}
            >
              <div className="w-[80px] h-[80px] bg-[#FFFFFF] -mt-[2rem] ml-[2rem] shadow-md shadow-inner rounded-lg flex items-center justify-center text-center">
                <img
                  src={data.pic}
                  alt="Your Image"
                  className="max-w-full max-h-full"
                />
              </div>
              <div className="p-6 space-y-3">
                <h1 className="font-poppins text-2xl font-[600]">
                  {data.title}
                </h1>
                <p className="font-poppins font-[275] text-base leading-8 ">
                  Crafting websites that reflect your brand identity and engage
                  your audience effectively.Conducting rigorous Quality
                  Assurance Testing to ensure the performance and reliability of
                  web solutions.
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center my-3">
        <button className="bg-gradient-to-r from-[#4159A7] to-[#2C2D6E] font-poppins font-[600] text-base px-6 py-3 text-[#FFFFFF] rounded-full">
          Request Quote
        </button>
      </div>
    </div>
    </>
  );
}
export default Services;
