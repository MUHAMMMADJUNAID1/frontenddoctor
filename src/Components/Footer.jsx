import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left side */}
        <div>
          <img className="mb-4 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            voluptas repellat provident laborum aut voluptates tempora, ea
            repellendus corrupti impedit hic tenetur fugiat soluta unde officia,
            temporibus nobis voluptate similique.
          </p>
        </div>
        {/* center Section */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* right Section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+92-3143034196</li>
            <li>muhammadjunaid9394@gmail.com</li>
            <li>Copyright 2024 @Prescripto all Rights reserved</li>
          </ul>
        </div>
      </div>
      {/**copyright Section */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ Perscriptro - All Right Reserved{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
