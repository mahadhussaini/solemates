import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    { platform: "facebook", icon: "fab fa-facebook-square", link: "#" },
    { platform: "youtube", icon: "fab fa-youtube", link: "#" },
    { platform: "twitter", icon: "fab fa-twitter", link: "#" },
    { platform: "instagram", icon: "fab fa-instagram", link: "#" },
  ];

  const navLinks1 = [
    { name: "Collections", path: "/collections" },
    { name: "About us", path: "/about-us" },
    { name: "Contact", path: "/contact" },
  ];

  const navLinks2 = [
    { name: "Products", path: "/products" },
    { name: "Men", path: "/products/men" },
    { name: "Women", path: "/products/women" },
  ];

  return (
    <footer className="text-white bg-very-dark-blue">
      <div className="wrapper px-5 py-12 lg:py-16 md:px-0 lg:mx-20 xl:mx-28 2xl:mx-40 3xl:mx-auto lg:pb-12 lg:px-1 xl:px-3 2xl:px-1 max-w-xl md:max-w-2xl mx-auto lg:max-w-7xl flex flex-col md:flex-row justify-center lg:justify-between items-center md:items-start">
        <div className="w-[138px] my-10 md:my-0">
          <div className="social flex justify-between items-center mt-4">
            {socialLinks.map(({ platform, icon, link }) => (
              <Link to={link} key={platform} aria-label={platform}>
                <i className={`text-2xl hover:text-orange ${icon}`}></i>
              </Link>
            ))}
          </div>
        </div>

        <nav className="as flex flex-col sm:flex-row -mt-3 mb-10 md:mb-0 sm:px-10">
          <ul className="px-4">
            {navLinks1.map(({ name, path }) => (
              <li
                key={name}
                className="my-3 hover:text-orange w-fit sm:w-full mx-auto sm:mx-0"
              >
                <Link to={path}>{name}</Link>
              </li>
            ))}
          </ul>
          <ul className="px-4">
            {navLinks2.map(({ name, path }) => (
              <li
                key={name}
                className="my-3 hover:text-orange w-fit sm:w-full mx-auto sm:mx-0"
              >
                <Link to={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="copyright text-center md:text-left mb-8 md:mb-0">
          © Copyright 2024
          <br />
          <a
            href="https://portfolio-sable-psi.vercel.app"
            className="border-bottom rounded-sm shadow-[inset_0_-1px_0_0_#fff] hover:shadow-[inset_0_-4rem_0_0_#ff7d1a] hover:text-very-dark-blue py-1 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Syed Mahad Hussaini
            <br />
          </a>
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
