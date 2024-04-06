import React from "react";
import companypic1 from "../../assets/company1.png";
import companypic2 from "../../assets/company2.png";
import companypic3 from "../../assets/company3.png";
import companypic4 from "../../assets/company4.png";
import person from "../../assets/person.png";
import Slider from "./Slider";
import sliderData from "../../sliderData";

const Testimonials = () => {
  return (
    <div  className="w-[100%] h-auto bg-[#EAEFFF] p-5" id="testimonial">
    <div className="xl:w-[84.72%] md:w-[90%] mx-auto  md:flex justify-between">
    
      <div className="md:w-[46.14%] h-auto  flex flex-col justify-around">
        <div className="">
          <span className="font-Poppins text-[17px] text-[#4159A7] font-[500] border-b-[3px] border-[#4159A7] ">
            Our Reviews
          </span>
          <h1 className="xl:text-5xl lg:text-4xl md:text-4xl  font-[600] font-poppins">
            Client Testimonials
          </h1>
          <p className="font-poppins font-[300] text-[16px]   text-[#000000] lg:leading-[34px] md:leading-[25px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className=" h-[147px] ">
          <h1 className="text-[#877A7A] font-poppins text-[30px] font-[600]">
            Clients & Partners
          </h1>
          <div className="flex justify-evenly items-center w-[95%] h-[90px]">
            <div><img width={81} height={81} src={companypic1} /></div>
           <div><img width={101} height={72} src={companypic2} /></div>
           <div className=""> <img width={105} height={36} src={companypic3} /></div>
            <div><img width={102} height={102} src={companypic4} /></div>
          </div>
        </div>
      </div>
     
      {/* <div className="md:w-[47.13%] my-5 flex flex-col justify-center">
        <article className=" bg-white p-5 rounded-md shadow-md">
          <div class="flex items-center mb-4">
            <img
              class="w-[72px] h-[72px] me-4 rounded-full"
              src={person}
              alt=""
            />
            <div className="font-poppins text-[25px] font-[600]">
              <p>
                Jese Leos{" "}
                <time
                  datetime="2014-08-16 19:00"
                  class="block text-sm text-gray-500 dark:text-gray-400"
                >
                  21st Sep , 2023
                </time>
              </p>
            </div>
          </div>
          <p className="font-poppins font-[275] text-[16px] xl:leading-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="flex justify-between my-5">
            <div>
              <svg
                width="169"
                height="31"
                viewBox="0 0 169 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3133 5.8541C13.912 4.01148 16.5189 4.01148 17.1176 5.8541L18.1825 9.13165C18.4502 9.95569 19.2182 10.5136 20.0846 10.5136H23.5308C25.4683 10.5136 26.2738 12.9928 24.7064 14.1316L21.9184 16.1573C21.2174 16.6666 20.9241 17.5693 21.1918 18.3934L22.2568 21.6709C22.8555 23.5135 20.7465 25.0458 19.1791 23.907L16.391 21.8813C15.69 21.372 14.7409 21.372 14.0399 21.8813L11.2518 23.907C9.6844 25.0458 7.57544 23.5135 8.17414 21.6709L9.23908 18.3934C9.50683 17.5693 9.21352 16.6666 8.51254 16.1573L5.7245 14.1317C4.15707 12.9928 4.96262 10.5136 6.90006 10.5136H10.3463C11.2127 10.5136 11.9806 9.9557 12.2484 9.13165L13.3133 5.8541Z"
                  fill="#FFCC2E"
                />
                <path
                  d="M47.7442 5.8541C48.3429 4.01148 50.9497 4.01148 51.5485 5.8541L52.6134 9.13165C52.8811 9.95569 53.6491 10.5136 54.5155 10.5136H57.9617C59.8992 10.5136 60.7047 12.9928 59.1373 14.1316L56.3492 16.1573C55.6483 16.6666 55.355 17.5693 55.6227 18.3934L56.6876 21.6709C57.2863 23.5135 55.1774 25.0458 53.61 23.907L50.8219 21.8813C50.1209 21.372 49.1717 21.372 48.4708 21.8813L45.6827 23.907C44.1153 25.0458 42.0063 23.5135 42.605 21.6709L43.67 18.3934C43.9377 17.5693 43.6444 16.6666 42.9434 16.1573L40.1554 14.1317C38.588 12.9928 39.3935 10.5136 41.331 10.5136H44.7772C45.6436 10.5136 46.4115 9.9557 46.6793 9.13165L47.7442 5.8541Z"
                  fill="#FFCC2E"
                />
                <path
                  d="M82.1751 5.8541C82.7738 4.01148 85.3806 4.01148 85.9793 5.8541L87.0443 9.13165C87.312 9.95569 88.0799 10.5136 88.9464 10.5136H92.3926C94.3301 10.5136 95.1356 12.9928 93.5682 14.1316L90.7801 16.1573C90.0792 16.6666 89.7858 17.5693 90.0536 18.3934L91.1185 21.6709C91.7172 23.5135 89.6083 25.0458 88.0409 23.907L85.2528 21.8813C84.5518 21.372 83.6026 21.372 82.9017 21.8813L80.1136 23.907C78.5462 25.0458 76.4372 23.5135 77.0359 21.6709L78.1009 18.3934C78.3686 17.5693 78.0753 16.6666 77.3743 16.1573L74.5863 14.1317C73.0189 12.9928 73.8244 10.5136 75.7618 10.5136H79.2081C80.0745 10.5136 80.8424 9.9557 81.1102 9.13165L82.1751 5.8541Z"
                  fill="#FFCC2E"
                />
                <path
                  d="M116.606 5.8541C117.205 4.01148 119.812 4.01148 120.41 5.8541L121.475 9.13165C121.743 9.95569 122.511 10.5136 123.377 10.5136H126.824C128.761 10.5136 129.567 12.9928 127.999 14.1316L125.211 16.1573C124.51 16.6666 124.217 17.5693 124.485 18.3934L125.549 21.6709C126.148 23.5135 124.039 25.0458 122.472 23.907L119.684 21.8813C118.983 21.372 118.034 21.372 117.333 21.8813L114.545 23.907C112.977 25.0458 110.868 23.5135 111.467 21.6709L112.532 18.3934C112.8 17.5693 112.506 16.6666 111.805 16.1573L109.017 14.1317C107.45 12.9928 108.255 10.5136 110.193 10.5136H113.639C114.505 10.5136 115.273 9.9557 115.541 9.13165L116.606 5.8541Z"
                  fill="#FFCC2E"
                />
                <path
                  d="M151.037 5.8541C151.636 4.01148 154.242 4.01148 154.841 5.8541L155.906 9.13165C156.174 9.95569 156.942 10.5136 157.808 10.5136H161.254C163.192 10.5136 163.997 12.9928 162.43 14.1316L159.642 16.1573C158.941 16.6666 158.648 17.5693 158.915 18.3934L159.98 21.6709C160.579 23.5135 158.47 25.0458 156.903 23.907L154.115 21.8813C153.414 21.372 152.464 21.372 151.763 21.8813L148.975 23.907C147.408 25.0458 145.299 23.5135 145.898 21.6709L146.963 18.3934C147.23 17.5693 146.937 16.6666 146.236 16.1573L143.448 14.1317C141.881 12.9928 142.686 10.5136 144.624 10.5136H148.07C148.936 10.5136 149.704 9.9557 149.972 9.13165L151.037 5.8541Z"
                  fill="#FFCC2E"
                />
              </svg>
            </div>
            <div>
              <svg
                width="73"
                height="30"
                viewBox="0 0 73 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_827)">
                  <path
                    d="M57.4999 0C48.9395 0 42 6.71567 42 14.9999C42 23.2841 48.9395 30.0001 57.4999 30.0001C66.0603 30.0001 73.0001 23.2841 73.0001 14.9999C72.9904 6.71951 66.0566 0.00933834 57.4999 0ZM57.4999 28.4999C49.7955 28.4999 43.5499 22.4558 43.5499 14.9999C43.5499 7.54404 49.7955 1.49991 57.4999 1.49991C65.2043 1.49991 71.4499 7.54404 71.4499 14.9999C71.4411 22.4522 65.2006 28.4914 57.4999 28.4999Z"
                    fill="#4159A7"
                  />
                  <path
                    d="M55.6852 9.18538C55.3628 8.91264 54.8732 8.9445 54.5914 9.25624C54.3098 9.56825 54.3427 10.042 54.6649 10.3148L60.1981 14.9999L54.6646 19.6853C54.3422 19.958 54.3095 20.4318 54.5911 20.7435C54.8729 21.0556 55.3625 21.0874 55.6849 20.8147L61.8848 15.5646C62.0531 15.4223 62.1496 15.2163 62.1496 14.9999C62.1496 14.7835 62.0531 14.5777 61.8848 14.4352L55.6852 9.18538Z"
                    fill="#4159A7"
                  />
                </g>
                <g clip-path="url(#clip1_1_827)">
                  <path
                    d="M0 15.0001C0 23.2844 6.93969 29.9999 15.5001 29.9999C24.0605 29.9999 30.9999 23.2844 30.9999 15.0001C30.9999 6.71583 24.0605 0 15.5001 0C6.93969 0 0 6.71583 0 15.0001ZM13.6971 8.76304L20.2234 14.2895C20.4358 14.4684 20.558 14.7275 20.558 15.0001C20.558 15.2724 20.4358 15.5318 20.2234 15.7104L13.6971 21.2369C13.2917 21.5812 12.6742 21.5425 12.3184 21.1501C11.9626 20.7575 12.0026 20.1602 12.408 19.8159L18.0942 15.0001L12.408 10.1843C12.0026 9.8397 11.9626 9.24239 12.3184 8.85007C12.6742 8.45745 13.2917 8.41871 13.6971 8.76304Z"
                    fill="#4159A7"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_827">
                    <rect
                      width="31"
                      height="30"
                      fill="white"
                      transform="translate(42)"
                    />
                  </clipPath>
                  <clipPath id="clip1_1_827">
                    <rect width="31" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </article>
      </div> */}
      <Slider slides={sliderData}/>
    </div>
    </div>
  );
};

export default Testimonials;
