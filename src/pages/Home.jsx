import React from "react";
import notebook from "../assets/notebook.png";
import interaction from "../assets/interaction.png";
import interactive from "../assets/interactive.png";
import undraw from "../assets/undraw.png";
import chat from "../assets/chat.png";
import WhyUs from "./WhyUs";
import Statistics from "./Statistics";
import Feedback from "./Feedback";

const Home = () => {
  return (
    <div className="relative bg-white w-full h-[4611px] overflow-hidden text-left text-5xl text-black font-inter">
      <div className="absolute top-[0px] left-[0px] bg-black w-[1440px] h-[592px] overflow-hidden text-white">
        <div className="absolute top-[45px] left-[106px] w-[668px] flex flex-row items-center justify-between text-[45px]">
          <b className="relative">EduPro</b>
          <div className="flex flex-row items-center justify-around gap-[26px] text-xl">
            <b className="relative">Home</b>
            <b className="relative">Feature</b>
            <b className="relative">Mentor</b>
            <b className="relative">Benefits</b>
          </div>
        </div>
        <div className="absolute top-[47px] left-[1147px] flex flex-row items-start justify-start gap-[30px] text-base text-black">
          <div className="rounded-3xs bg-white overflow-hidden flex flex-row p-2.5 items-start justify-start">
            <b className="relative">Sign up</b>
          </div>
          <div className="rounded-3xs bg-gray-200 overflow-hidden flex flex-row p-2.5 items-start justify-start text-white">
            <b className="relative">Login</b>
          </div>
        </div>
        <b className="absolute top-[141px] left-[106px] text-[64px]">
          <p className="m-0">{`Embark on `}</p>
          <p className="m-0">{`a journey of exploration `}</p>
          <p className="m-0">through dynamic live classes</p>
        </b>
        <div className="absolute top-[382px] left-[106px] text-xl font-medium">
          <p className="m-0">
            Join a growing community,get peer insights,and discover
          </p>
          <p className="m-0">
            exciting business oppurtunities and collaborations.
          </p>
        </div>
        <div className="absolute top-[460px] left-[106px] rounded-3xs bg-white w-[178px] h-[45px] overflow-hidden text-black">
          <div className="absolute top-[8px] left-[21px] font-semibold">
            Get Started
          </div>
        </div>
        <div className="absolute top-[460px] left-[316px] rounded-3xs bg-gray-200 box-border w-[178px] h-[45px] overflow-hidden text-gray-300 border-[1px] border-solid border-white">
          <div className="absolute top-[8px] left-[21px] font-semibold">
            Get Started
          </div>
          <div className="absolute top-[8px] left-[33px] font-semibold text-white">
            Try Demo
          </div>
        </div>
      </div>
      <div className="absolute top-[2459px] left-[100px] rounded-3xs bg-blueviolet-100 w-[178px] h-[45px] overflow-hidden text-white">
        <div className="absolute top-[8px] left-[20px] font-semibold">
          Learn more
        </div>
      </div>
      <div className="absolute top-[592px] left-[0px] bg-white w-[1440px] h-[316px] overflow-hidden text-xl">
        <b className="absolute top-[42px] left-[100px] text-29xl">
          <p className="m-0">Online</p>
          <p className="m-0">Learning</p>
          <p className="m-0">Designed</p>
          <p className="m-0">For Real Life</p>
        </b>
        <div className="absolute top-[16.5px] left-[405.5px] box-border w-px h-[283px] border-r-[1px] border-solid border-black" />
        <img
          className="absolute top-[61px] left-[465px] w-[97px] h-[97px] object-cover"
          alt=""
          src={notebook}
        />
        <img
          className="absolute top-[61px] left-[839px] w-[97px] h-[97px] object-cover"
          alt=""
          src={interactive}
        />
        <b className="absolute top-[161px] left-[472px]">
          <p className="m-0">{`User-friendly platform to `}</p>
          <p className="m-0">learn in your way</p>
        </b>
        <b className="absolute top-[158px] left-[786px]">
          <p className="m-0">Exploring various domains</p>
          <p className="m-0">in one touch</p>
        </b>
        <b className="absolute top-[161px] left-[1080px]">1:1 Mentorship</b>
        <div className="absolute top-[217px] left-[472px] text-base">
          <p className="m-0">Packed with modern technology,</p>
          <p className="m-0">classroom learning which used to be</p>
          <p className="m-0">done conventionally.</p>
        </div>
        <div className="absolute top-[217px] left-[786px] text-base">
          <p className="m-0">{`A place where one could involve `}</p>
          <p className="m-0">{`and evolve and make the most `}</p>
          <p className="m-0">out of it.</p>
        </div>
        <img
          className="absolute top-[61px] left-[1124px] w-[97px] h-[97px] object-cover"
          alt=""
          src={interaction}
        />
        <div className="absolute top-[217px] left-[1071px] text-base whitespace-pre-wrap">
          <p className="m-0">{`Experienced and knowledgeable instructors  `}</p>
          <p className="m-0">{`providing personalized guidance through `}</p>
          <p className="m-0">tailored one-on-one interactions.</p>
        </div>
        <div className="absolute top-[327px] left-[0px] w-[1440px] h-[438px] overflow-hidden" />
      </div>
      <div className="absolute top-[1436px] left-[3px] rounded-[20px] bg-black w-[1437px] h-[542px] overflow-hidden" />
      <b className="absolute top-[2047px] left-[100px] text-29xl">
        <p className="m-0">{`Keep your Students `}</p>
        <p className="m-0">engaged.</p>
      </b>
      <div className="absolute top-[2161px] left-[100px] inline-block w-[597px]">
        <p className="m-0">&nbsp;</p>
        <p className="m-0">Imagine the endless possibilities</p>
        <p className="m-0">
          <span className="font-inter text-black">with</span>
          <b className="font-inter text-blueviolet-100"> EduPro,</b>
          <span>{`where you can leverage `}</span>
        </p>
        <p className="m-0">interactive tools to provide engaging and</p>
        <p className="m-0">{`personalized learning experiences, tailoring `}</p>
        <p className="m-0">{`education to the specific needs of your learners. `}</p>
        <p className="m-0">{`Additionally, you can effectively track and `}</p>
        <p className="m-0">
          measure their progress, gaining valuable insights into their
          development and areas of improvement.
        </p>
      </div>
      <div className="absolute top-[2369px] left-[1039px] w-[307px] h-[320.95px] text-blueviolet-100">
        <div className="absolute top-[0px] left-[0px] bg-white shadow-[5px_10px_10px_rgba(0,_0,_0,_0.2)] w-[307px] h-[320.95px] overflow-hidden">
          <div className="absolute top-[-3px] left-[-3px] box-border w-[362px] h-1.5 border-t-[6px] border-solid border-black" />
          <img
            className="absolute top-[22px] left-[21px] w-[91px] h-[91px] object-cover"
            alt=""
            src={chat}
          />
          <div className="absolute top-[124px] left-[21px] font-semibold">
            Engage your audience
          </div>
          <div className="absolute top-[164px] left-[21px] text-lgi text-black inline-block w-[295px] h-[145px]">
            Our Learning management system creates a personalized experience for
            learners of all ages, including K-12,higher education,and training.
          </div>
        </div>
      </div>
      <div className="absolute top-[2369px] left-[710px] w-[307px] h-[320.95px] text-blueviolet-100">
        <div className="absolute top-[0px] left-[0px] bg-white shadow-[5px_10px_10px_rgba(0,_0,_0,_0.2)] w-[307px] h-[320.95px] overflow-hidden">
          <div className="absolute top-[-3px] left-[-3px] box-border w-[362px] h-1.5 border-t-[6px] border-solid border-gray-100" />
          <img
            className="absolute top-[22px] left-[21px] w-[91px] h-[91px] object-cover"
            alt=""
            src={chat}
          />
          <div className="absolute top-[124px] left-[21px] font-semibold">
            Engage your audience
          </div>
          <div className="absolute top-[164px] left-[21px] text-lgi text-black inline-block w-[295px] h-[145px]">
            Our Learning management system creates a personalized experience for
            learners of all ages, including K-12,higher education,and training.
          </div>
        </div>
      </div>
      <div className="absolute top-[2031px] left-[1039px] w-[307px] h-[320.95px] text-blueviolet-100">
        <div className="absolute top-[0px] left-[0px] bg-white shadow-[5px_10px_10px_rgba(0,_0,_0,_0.2)] w-[307px] h-[320.95px] overflow-hidden">
          <div className="absolute top-[-3px] left-[7px] box-border w-[303px] h-1.5 border-t-[6px] border-solid border-gray-100" />
          <img
            className="absolute top-[22px] left-[21px] w-[91px] h-[91px] object-cover"
            alt=""
            src={chat}
          />
          <div className="absolute top-[124px] left-[21px] font-semibold">
            Engage your audience
          </div>
          <div className="absolute top-[164px] left-[21px] text-lgi text-black inline-block w-[295px] h-[145px]">
            Our Learning management system creates a personalized experience for
            learners of all ages, including K-12,higher education,and training.
          </div>
        </div>
      </div>
      <div className="absolute top-[2031px] left-[710px] w-[307px] h-[320.95px] text-blueviolet-100">
        <div className="absolute top-[0px] left-[0px] bg-white shadow-[5px_10px_10px_rgba(0,_0,_0,_0.2)] w-[307px] h-[320.95px] overflow-hidden">
          <div className="absolute top-[-3px] left-[-3px] box-border w-[362px] h-1.5 border-t-[6px] border-solid border-black" />
          <img
            className="absolute top-[22px] left-[21px] w-[91px] h-[91px] object-cover"
            alt=""
            src={chat}
          />
          <div className="absolute top-[124px] left-[21px] font-semibold">
            Engage your audience
          </div>
          <div className="absolute top-[164px] left-[21px] text-lgi text-black inline-block w-[295px] h-[145px]">
            Our Learning management system creates a personalized experience for
            learners of all ages, including K-12,higher education,and training.
          </div>
        </div>
      </div>
      <div className="absolute top-[2727px] left-[0px] bg-blueviolet-200 w-[1440px] h-[441px] overflow-hidden">
        <b className="absolute bottom-[252px] left-[calc(50%_-_441px)] text-[60px] inline-block whitespace-pre-wrap w-[807px]">
          <p className="m-0"> Expand your monthly</p>
          <p className="m-0">income with group classes</p>
        </b>
        <div className="absolute top-[201px] left-[190px] text-xl text-white whitespace-pre-wrap inline-block w-[1131px] h-[191px]">
          <p className="m-0">{`Increase your monthly earnings by offering group classes, tapping into the power of collective learning.             `}</p>
          <p className="m-0">{`    Engage with a wider audience, maximize your time, and generate additional revenue as you share `}</p>
          <p className="m-0">
            {" "}
            your expertise with multiple participants in an interactive and
            dynamic learning environment.
          </p>
        </div>
        <div className="absolute top-[297px] left-[441px] rounded-3xs bg-black w-[178px] h-[45px] overflow-hidden text-white">
          <div className="absolute top-[8px] left-[20px] font-semibold">
            Learn more
          </div>
        </div>
        <div className="absolute top-[297px] left-[663px] rounded-3xs bg-gray-300 box-border w-[238px] h-[45px] overflow-hidden border-[1px] border-solid border-black">
          <div className="absolute top-[8px] left-[17px] font-semibold">
            Become a Mentor
          </div>
        </div>
      </div>
      <img
        className="absolute top-[3736px] left-[25px] w-[1337px] h-[962px] object-cover"
        alt=""
        src={undraw}
      />

      {/* Why Us Component */}
      <h2 className="text-2xl font-bold mb-4 p-10">
        <center>Why Us ?</center>{" "}
      </h2>
      <div className="inline-flex">
        <WhyUs text="Online LIVE Class" image="monitor.png" />
        <WhyUs text="Doubt Solving" image="question.png" />
        <WhyUs text="Personal Teacher" image="teacher.png" />
        <WhyUs text="Test Series" image="search.png" />
      </div>

      {/* Statistics and Feedback */}
      <Statistics />
      <Feedback />
    </div>
  );
};

export default Home;
