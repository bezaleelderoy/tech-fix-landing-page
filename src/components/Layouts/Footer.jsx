import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mx-auto max-w-[1240px] flex px-4 flex-col items-start pb-10 pt-24">
      <div className="bg-gray-800 bg-cover bg-center rounded-2xl w-full pb-12 px-5 pt-12 ">
        <div className="md:flex justify-between items-center border-b border-gray-500">
          <div className="md:w-[360px] w-full">
            <img src="./logo.png" alt="Logo png" className="w-20" />
            <p className="text-white">
              TechFix adalah layanan jasa servis hp membantu kamu mencapai
              mimpimu dalam terbaik.
            </p>
            <div className="flex text-white py-7 items-center">
              <FaLocationDot className="text-xl mr-2" />{" "}
              <p className="text-slate-300 text-sm">Denpasar, Indonesia</p>
              <FaPhoneAlt className="text-xl mx-2" />
              <p className="text-slate-300 text-sm">+62 812 456 789</p>
            </div>
          </div>
          <div>
            <h1 className="text-white font-medium pb-4">Jasa</h1>
            <p className="text-slate-300 opacity-60 py-2">Servis HP</p>
            <p className="text-slate-300 opacity-60 py-2">Servis Laptop</p>
            <p className="text-slate-300 opacity-60 py-2">Servis Komputer</p>
          </div>
          <div>
            <h1 className="text-white font-medium pb-4">Company</h1>
            <p className="text-slate-300 opacity-60 py-2">Tentang Kami</p>
            <p className="text-slate-300 opacity-60 py-2">Blog</p>
            <p className="text-slate-300 opacity-60 py-2">Komunitas</p>
          </div>
          <div>
            <h1 className="text-white font-medium pb-4">Support</h1>
            <p className="text-slate-300 opacity-60 py-2">Hubungi Kami</p>
            <p className="text-slate-300 opacity-60 py-2">
              Syarat dan Ketentuan
            </p>
            <p className="text-slate-300 opacity-60 py-2">Kebijakan Privasi</p>
          </div>
        </div>
        <div className="flex items-center justify-between my-4 text-slate-400 font-light">
          <h1>© 2025 TechFix. All Rights Reserved.</h1>
          <div className="flex text-3xl">
            <a href="https://www.instagram.com/techfixdps/">
              <FaInstagram />
            </a>
            <a href="https://web.facebook.com/techfix.bali" className="px-3">
              <FaFacebook />
            </a>
            <a href="https://www.youtube.com/@BangHenri09">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
