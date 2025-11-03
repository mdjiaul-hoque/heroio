import React from "react";
import imge from "../assets/hero.png";
import play from "../assets/play.png";
import app from "../assets/apps.png";



const Banner = () => {
  return (
    <>
      <div className="text-center pt-8">
        <h1 className="font-bold text-6xl">We Build <br />
        <span className="text-blue-700 ">productive</span> Apps</h1>
        <p className="py-4">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

        <div className=" flex items-center justify-center pb-3">
            <div>
            <button className="flex border-1 rounded-2xl p-2 m-2">
                <img className="w-[20px]" src={play} alt="" />Google Play
            </button>
        </div>
        <div>
            <button className="flex border-1 rounded-2xl p-2">
                <img className="w-[20px]" src={app} alt="" />App Store
            </button>
        </div>
        </div>
      </div>

      <div className="mx-auto ">
        <img src={imge} alt="" />
      </div>
      <div className="bg-[#632EE3] text-white">
        <h2 className="pt-10 text-center font-bold text-4xl">
          Trusted by Millions, Built for You
        </h2>

        <div className="flex justify-around items-center p-8">
          <div>
            <p>Total Downloads</p>
            <h3 className="font-bold text-4xl">29.6M</h3>
            <p>21% more than last month</p>
          </div>
          <div>
            <p>Total Reviews</p>
            <h3 className="font-bold text-4xl">906K</h3>
            <p>46% more than last month</p>
          </div>
          <div>
            <p>Active Apps</p>
            <h3 className="font-bold text-4xl">132+</h3>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
