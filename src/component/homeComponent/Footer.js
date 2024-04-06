import React from "react";
import footerpic from "../../assets/footer.png";
import footerpic1 from "../../assets/footer1.png";
import footerpic2 from "../../assets/footer2.png";
import footerpic3 from "../../assets/footer3.png";
import footerpic4 from "../../assets/footer4.png";
import linkedin from "../../assets/linkedin.png";
import insta from "../../assets/insta.png";
import twitter from "../../assets/twitter.png";
const Footer = () => {
  const arr = [{
    pic:footerpic4,
    title:"Location",
    des:"Legian Atkins West, DPS 11490, Bali"
  },
  {
    pic:footerpic1,
    title:"Phone",
    des:"+62-202-555-0133"
  },
  {
    pic:footerpic2,
    title:"Email",
    des:"cashflow@info.com"
  },
  {
    pic:footerpic3,
    title:"Opening Hours",
    des:"Everyday 9 AM - 6 PM"
  },

];
  return (
    <div className="w-[100%] h-auto bg-[#EAEFFF] py-10">
      <div className="md:w-[82.5%] w-[95%] mx-auto ">
        <div className="flex flex-wrap md:justify-center">
          {arr.map((data) => {
            return (
              <div className="lg:w-[24.9%] md:w-[35%] w-[50%] flex space-x-2 my-1">
                <div className="xl:w-[62px] w-[50px] xl:h-[62px] h-[50px] bg-[#546AB2] flex justify-center items-center rounded-[6px]">
                 <img src={data.pic} />
                </div>
                <div>
                  <h1 className="font-Jost font-[600] xl:text-[28px] md:text-[20px]">{data.title}</h1>
                  <p className="font-Jost font-[400] md:text-[14px] text-[11px]">
                  {data.des}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <hr className="border-[#4C4646] my-8 border-t-2"></hr>

        <div className="flex flex-wrap justify-between">
          <div className="md:w-[40%] order-last md:order-first md:mt-0 -mt-10">
            <div className="md:w-[100%] w-[70px]">
              <img src={footerpic} />
            </div>
            <h1 className="text-[#2F3477] font-poppins font-[400] md:text-[20px] text-[14px]">
              Subscribe Our Newsletter
            </h1>
            <div className="my-7">
            <div className="flex justify-between  w-[90%]">
              <label className="text-poppins font-[400] md:text-base text-[12px] text-[#2F3477]">
                Your Email adiress
              </label>
              <svg
                width="14"
                height="14"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.77783 2L18.0001 2V16.2222"
                  stroke="#2F3477"
                  stroke-width="3"
                />
                <path d="M18 2L2 18" stroke="#2F3477" stroke-width="3" />
              </svg>
               </div>
              <input className="border-[#2F3477] border-b-2 bg-transparent w-[90%]" />
            </div>
          </div>
          <div className="md:w-[17%] h-[200px] w-[33%] ">
            <h1 className="font-poppins font-[600] 2xl:text-xl text-lg text-[#2F3477]">
              Quick links
            </h1>
            <ul className="font-poppins font-[400] 2xl:text-lg text-md text-[#2F3477] md:leading-[29px] ">
              <li>Home</li>
              <li>About</li>
              <li>Our Vision</li>
              <li>Services</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="md:w-[17%] h-[200px] w-[33%] ">
            <h1 className="font-poppins font-[600] 2xl:text-xl text-lg text-[#2F3477]">
              News
            </h1>
            <ul className="font-poppins font-[400] 2xl:text-lg text-md  text-[#2F3477] md:leading-[29px]">
              <li>Blog</li>
              <li>FAQ</li>
              <li>Presse kit</li>
            </ul>
          </div>
          <div className="md:w-[17%] h-[200px] w-[33%] flex flex-col justify-between">
            <div>
              <h1 className="font-poppins font-[600] 2xl:text-xl text-lg text-[#2F3477]">
                Others
              </h1>
              <ul className="font-poppins font-[400] 2xl:text-lg text-md text-[#2F3477] md:leading-[29px]">
                <li>How it Works?</li>
                <li>Why ProDigi?</li>
                <li>Benefits with ProDigi</li>
              </ul>
            </div>
            <div className="flex justify-evenly">
              <div className="w-[32px] h-[32px] bg-[#2F3477] flex justify-center items-center rounded-sm">
                <img src={linkedin} alt="LinkedIn" />
              </div>
              <div className="w-[32px] h-[32px] bg-[#2F3477] flex justify-center items-center  rounded-sm">
                <img src={insta} alt="insta" />
              </div>
              <div className="w-[32px] h-[32px] bg-[#2F3477] flex justify-center items-center  rounded-sm">
                <img src={twitter} alt="twitter" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between hidden">
          <h1 className="text-[#2F3477] font-poppins font-[400] text-base">
            Copyright © 2022. All rights reserved. Design by Talha Tahir
          </h1>
          <div className="flex justify-evenly w-[40%] text-[#2F3477] font-poppins font-[400] text-base">
            <div>Terms & Condition</div>
            <div>Privacy Policy</div>
            <div> Cookie Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
