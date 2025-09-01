import React from "react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const links = [
    {
      title: "Beranda",
      route: "/#home",
    },
    {
      title: "Tentang Kami",
      route: "/#about",
    },
    {
      title: "Layanan",
      route: "/#services",
    },
    {
      title: "Kontak",
      route: "/#contacts",
    },
  ];

  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div
      className={`${
        scrolled ? "bg-white shadow" : "bg-blue-500"
      } fixed top-0 left-0 w-full z-50 transition-all duration-300`}
    >
      <div
        className={`${
          scrolled ? "px-4" : "px-8"
        } flex justify-between items-center mx-auto max-w-[1240px] transition-all duration-300`}
      >
        <img
          src={`${scrolled ? "./logo-blue.png" : "./logo.png"}`}
          alt="Logo"
          className="object-cover w-20 h-20"
        />

        <ul className="hidden md:flex items-center justify-center">
          {links.map((link, key) => (
            <li key={key} className="px-5">
              <a
                className={`${
                  scrolled
                    ? "text-blue-500 hover:text-blue-400"
                    : "text-white hover:text-slate-100"
                }  font-medium`}
                href={link.route}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <div
          onClick={handleNav}
          className={`${
            scrolled ? "text-blue-500" : "text-white"
          } md:hidden block px-5 cursor-pointer`}
        >
          {nav ? "x" : "="}
        </div>
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 h-full w-[40%] bg-blue-500 shadow ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <img src="./logo.png" alt="Logo" className="object-cover w-20 h-20" />
        <ul className="">
          {links.map((link, key) => (
            <a className="text-white" href={link.route} key={key}>
              <li className="p-4 hover:bg-blue-400 duration-500 cursor-pointer">
                {link.title}
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
