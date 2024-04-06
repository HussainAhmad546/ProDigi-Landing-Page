import React from "react";
import pic from "../../assets/Frame2.png";

const About = () => {
  const arr = [
    {
    title:"Projects",
    range:"2300+"
  },
  {
    title:"Clients",
    range:"2300+"
  },
  {
    title:"Success",
    range:"2300+"
  },
  {
    title:"Years",
    range:"8+"
  },

];

  return (
    <div className="bg-[#EAEFFF] py-10" id="about">
      <div className="lg:w-[84.5%] w-[90%] h-auto mx-auto md:flex justify-between caret-transparent space-y-10">
        <div className="md:w-[50.4%]">
          <span className="font-Poppins text-[17px] text-[#4159A7] font-[500] border-b-[3px] border-[#4159A7] ">
            Who We Are?
          </span>
          <h1 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl  font-[600] font-poppins">
            Top-rated Web & Mobile App Development Company
          </h1>
          <p className="font-poppins font-[300] text-[16px] w-[98.3%] text-[#000000] lg:leading-[34px] md:leading-[25px] ">
            Prodigia is at the forefront of the digital revolution, transforming
            the way businesses interact with technology. Founded [Insert Year],
            we've grown into a beacon of innovation in software development,
            mobile application design, web development, and pioneering Web 3.0
            services. Our team is composed of visionary thinkers, expert
            developers, and creative problem-solvers dedicated to pushing the
            boundaries of what's possible.
          </p>
          <div  className="">
          <button
            type="button"
            className="flex mt-6 items-center md:py-4 md:px-10 text-[#4159A7] font-Poppins border border-gray-800 rounded-[50px] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read More
          </button>
          </div>
        </div>
        <div className="lg:w-[43.5%] md:w-[50%]">
          <div className="flex flex-wrap justify-center xl:gap-5 gap-3">
            {arr.map((data, index) => {
              return (
                <div
                  key={index}
                  className={`sm:w-[47.8%] shadow-lg rounded-sm p-5 h-auto bg-white ${
                    index === 2 || index === 0 ? "-mt-2" : "mt-0"
                  }`}
                >
                  <div className="flex">
                    <svg
                      width="67"
                      height="62"
                      viewBox="0 0 67 62"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M32.1 0.110759C41.0496 -0.722446 49.8219 3.21971 56.2882 9.42816C62.8682 15.7457 67.9313 24.448 66.8553 33.48C65.8488 41.9287 57.7654 47.024 51.1645 52.437C45.4584 57.1161 39.4861 62.3637 32.1 61.9802C24.9502 61.6089 20.2656 55.3002 14.9279 50.5554C9.05623 45.3359 0.645116 41.2882 0.0386749 33.48C-0.584927 25.4509 6.45895 19.3692 12.0535 13.5464C17.8404 7.52344 23.7593 0.887283 32.1 0.110759Z"
                        fill="#EAEFFF"
                      />
                      <g clip-path="url(#clip0_0_1)">
                        <path
                          d="M24.5691 30.835C24.3144 31.3431 24.4136 31.9573 24.815 32.359L25.1373 32.6814C26.0688 31.5776 27.1544 30.3798 28.471 29.0635C28.564 28.9704 28.6598 28.9254 28.7532 28.8396L26.6792 26.7653C25.4734 28.946 24.7703 30.4361 24.5691 30.835Z"
                          fill="#4159A7"
                        />
                        <path
                          d="M35.9286 36.5211C34.6089 37.8408 33.4141 38.9285 32.3165 39.8606L32.7532 40.2973C33.1584 40.7024 33.7784 40.7999 34.2882 40.5376C34.9711 40.1857 36.045 39.6804 38.3247 38.4107L36.1528 36.2389C36.067 36.3326 36.022 36.4281 35.9286 36.5211Z"
                          fill="#4159A7"
                        />
                        <path
                          d="M35.2259 29.7679C34.2731 28.8152 31.5939 29.6694 30.3352 30.9277C26.1247 35.1382 24.2231 38.1234 23.3692 39.886C23.1244 40.391 23.2264 40.9956 23.6233 41.3925C24.0208 41.7904 24.6265 41.8914 25.1318 41.6466C26.855 40.8099 29.8038 38.9171 34.0644 34.6569C35.4483 33.2722 36.1312 30.6736 35.2269 29.769L35.2259 29.7679Z"
                          fill="#4159A7"
                        />
                        <path
                          d="M22.1151 19.5527L18.3862 23.2815C17.9646 23.7031 17.8781 24.3558 18.1768 24.8728C18.4683 25.383 19.0787 25.6429 19.6596 25.4874C21.6749 24.947 23.4482 24.7187 24.6423 25.0249C26.341 22.0047 28.1665 19.2245 30.0997 16.699C28.9815 15.9821 25.2863 16.3814 22.1151 19.5527Z"
                          fill="#4159A7"
                        />
                        <path
                          d="M40.3149 46.8585C40.8227 47.1153 41.4376 47.0161 41.8396 46.6137L45.5688 42.8849C48.4558 39.9972 48.9639 36.2715 48.3089 35.0901C45.4922 37.2129 42.6389 39.0053 39.9768 40.506C40.1604 41.5432 40.0382 42.5495 39.6039 45.4883C39.5191 46.0572 39.813 46.6075 40.3149 46.8585Z"
                          fill="#4159A7"
                        />
                        <path
                          d="M44.1739 15.2248C42.632 16.767 42.632 19.2756 44.1739 20.8178C45.7161 22.36 48.2251 22.36 49.7673 20.8178C51.3095 19.2756 51.3095 16.767 49.7673 15.2248C48.2251 13.6826 45.7161 13.6826 44.1739 15.2248Z"
                          fill="#4159A7"
                        />
                        <path
                          d="M62.9224 3.28609C62.875 2.63412 62.3559 2.1188 61.706 2.07005C58.4681 1.82629 55.2429 2.22454 52.0816 3.19134C52.3195 5.3632 53.4429 7.71358 55.3607 9.63138C57.3015 11.5718 59.7157 12.6948 61.9264 12.905C62.7778 9.92114 63.1816 6.7255 62.9224 3.28609Z"
                          fill="#4159A7"
                        />
                        <path
                          d="M53.4965 11.4959C51.3026 9.30211 49.963 6.67088 49.5331 4.10901C41.6165 7.35581 34.038 14.4461 28.0494 24.4066L31.0246 27.3818C33.0574 26.5565 35.5252 26.3385 37.0904 27.9033C38.6577 29.4709 38.4356 31.9377 37.6106 33.9678L40.6837 37.0408C48.3473 32.4221 57.2696 25.1454 61.0636 15.4641C58.4393 15.0675 55.726 13.7255 53.4965 11.4959ZM51.6315 22.6824C49.0618 25.2522 44.8797 25.2522 42.3096 22.6824C39.7395 20.1123 39.7395 15.9299 42.3096 13.3602C44.8797 10.7904 49.0618 10.7904 51.6315 13.3602C54.2016 15.9303 54.2016 20.1123 51.6315 22.6824Z"
                          fill="#4159A7"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_0_1">
                          <rect
                            width="45"
                            height="45"
                            fill="white"
                            transform="translate(18 2)"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <div className="ml-3">
                      <h1 className="font-poppins text-[#4159A7] lg:text-2xl md:text-xl font-[600]">
                        {data.title}
                      </h1>
                      <h1 className="font-poppins lg:text-base md:text-lg font-[600]">
                        {data.range}
                      </h1>
                    </div>
                  </div>

                  <p className="font-poppins lg:text-[13px] md:text-[12px] font-[300] lg:leading-6 mt-2">
                    ProDigi Delivered the Thousands of Successful projects
                    around the world.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
