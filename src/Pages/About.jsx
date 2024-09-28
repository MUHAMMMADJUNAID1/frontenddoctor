import React from "react";
import { assets } from "../assets/assets";
const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500 ">
        <p>
          About <span className="text-gray-700 font-medium">Us</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full max-w-[360px] rounded-lg"
          src={assets.about_image}
          alt=""
        />
        <div className=" flex flex-col justify-center gap-6 md:w-2/4 text-sm  text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            ullam maxime! Ipsum assumenda ducimus quibusdam quisquam officiis
            tempora tenetur nisi, asperiores, temporibus architecto vero
            deleniti rem illum impedit. Quae nesciunt officia ea perspiciatis
            expedita! praesentium ullam obcaecati, unde eaque aut eos ab
            reiciendis, cum
          </p>
          <p>
            ullam maxime! Ipsum assumenda ducimus quibusdam quisquam officiis
            tempora tenetur nisi, asperiores, temporibus architecto vero
            deleniti rem illum impedit. Quae nesciunt officia ea perspiciatis
            expedita!
          </p>

          <b
            className="text-gray-800
             "
          >
            Our vision
          </b>

          <p>
            adipisci laborum pariatur consectetur. Ut at repudiandae eligendi
            hic unde cumque amet.
          </p>
        </div>
      </div>

      <div>
        <p className="text-xl my-4">
          WHY <span className="text-gray-700 font-semibold ">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20 ">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer text-gray-600">
          <b>Effieciency:</b>
          <p>
            streamline the appointment scheduling that fits into your busy life
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer text-gray-600">
          <b>Convience:</b>
          <p>
            Access to a network of trusted healthcare proffessinals in your area
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer text-gray-600">
          <b>Presnalization:</b>
          <p>
            Tailored recommendations and reminders to help you stay on top of
            your health
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
