import { useState } from "react";
import { navLogo } from "../assets";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const navList = [
    { title: "Home", link: "#" },
    { title: "About", link: "#" },
    { title: "Features", link: "#" },
    { title: "Solution", link: "#" },
  ];

  const [menuShow, setMenuShow] = useState(false);
  return (
    <nav className="flex justify-between">
      <div className="left flex items-center gap-[4px]">
        <img src={navLogo} alt="navLogo" />
        <h1>
          Hoo<span>Bank</span>
        </h1>
      </div>
      <div className="right flex items-center ">
        <ul className="gap-[55px] hidden sm:flex">
          {navList.map((l, i) => (
            <li key={i}>
              <a
                href={l.link}
                className="font-normal leading-tight text-opacity-70 text-white"
              >
                {l.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="block  sm:hidden">
          <AiOutlineMenu onClick={() => setMenuShow(true)} />

          <div
            className={`h-[250px] w-full   absolute inset-x-0 top-0  p-3 transition-all delay-0 duration-[1s]  ease-in-out   bg-gray-500 ${
              menuShow ? "translate-y-0" : "translate-y-[-300px]"
            } `}
          >
            <AiOutlineClose
              color={"black"}
              className="float-right"
              onClick={() => setMenuShow(false)}
            />
            <ul className="flex flex-col mt-[20px] gap-7  ">
              {navList.map((l, i) => (
                <li key={i}>
                  <a
                    href={l.link}
                    className="font-normal leading-tight text-opacity-70 text-white"
                    onClick={() => setMenuShow(false)}
                  >
                    {l.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
