"use client";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";
import Image from "next/image";
import logo from "@/app/assets/logo.svg";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSpecialPathName, setIsSpecialPathName] = useState(false);
  const pathname = usePathname();
  const isPathSpecial = (ispathname: string) => {
    if (ispathname.startsWith("/product")) {
      setIsSpecialPathName(true);
    } else {
      setIsSpecialPathName(false);
    }
  };
  //toggle menu opening
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // close menu after click link in mobile devices
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  //handle scroll sticky navbar
  useEffect(() => {
    isPathSpecial(pathname);
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });
  //navigation Items Array
  const navItems = [
    { link: "Acceuil", path: "home" },
    { link: "A Propos", path: "about" },
    { link: "Services", path: "services" },
    { link: "Produits", path: "products" },
    { link: "Aide", path: "help" },
    { link: "Contact", path: "contact" },
  ];
  return (
    <header
      className={`&& ${
        isSpecialPathName
          ? "hidden"
          : "w-full md:bg-transparent fixed top-0 left-0 right-0 max-w-screen-white"
      }`}
    >
      <nav
        className={`py-1 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b backdrop-blur-md duration-300 text-gray-500"
            : ""
        }`}
      >
        {/* nav items for large devices */}
        <div className="flex justify-between items-center text-base gap-8 ">
          <Link
            to="/"
            className="text-2x1  font-semibold flex items-center space-x-3 "
          >
            <Image
              src={logo}
              alt="logo"
              className="w-30 inline-block items-center m-2  "
            />{" "}
          </Link>
          {/* nav links for large devices */}
          <ul className="hidden md:flex space-x-12 m-2  ">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                className={`block md:text-xs lg:text-base cursor-pointer p-3 font-semibold hover:text-red-500 first:font-medium m-2 ${
                  path === "contact"
                    ? "bg-red-500 hover:text-white hover:bg-transparent border-1 border-red-500 "
                    : ""
                } && ${isSticky ? "text-black" : "text-white"}  `}
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* menu btn for mobile devices */}
          <div className="md:hidden p-2 ">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-white"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 " />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* nav items for mobile devices */}
        <div
          className={`space-y-4 px-4 mt-16 py-10  bg-red-500 ${
            isMenuOpen ? "block fixed top-3 right-4 left-4" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              className="block text-base text-white hover:text-gray900 first:font-medium cursor-pointer"
              onClick={closeMenu}
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
