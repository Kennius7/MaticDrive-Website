import { useState, useEffect } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-scroll";



const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])


  return (
    <nav className={`ss:w-full w-[100%] flex justify-between items-center navbar bg-primary`}>
      <div className="flex items-center">
        <img src={logo} alt="Maticdrive logo" className={`${scrolled ? "w-[35px] h-[35px] ss:w-[50px] ss:h-[50px] duration-1000" : ""} w-[50px] h-[50px] ss:w-[70px] ss:h-[70px] m-2`} />
        <div className="text-[20px] text-white">Matic <span className="text-gradient">Drive</span></div>
      </div>
      

      <ul className="list-none md:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[18px] hover:border-b-4 hover:pb-2 hover:border-yellow-300 ${
              active === nav.title ? "text-white" : "text-gray-400"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <Link to={`${nav.id}`} spy={true} smooth={true} offset={50} duration={500}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      <div className="md:hidden flex flex-1 justify-end items-center pr-4">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[32px] h-[32px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 z-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <Link to={`${nav.id}`} spy={true} smooth={true} offset={50} duration={500}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
