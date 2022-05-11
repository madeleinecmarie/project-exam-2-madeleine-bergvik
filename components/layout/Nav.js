// import { useRouter } from "next/router";
import Logo from "../logo/Logo";
import Link from "next/link";
import { useState, useEffect } from "react";

export const Nav = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="nav active flex items-center flex-wrap">
        <Logo />
        <button
          className=" inline-flex p-3 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a className="nav__links lg:inline-flex lg:w-auto w-auto px-3 py-2 rounded text-white  items-center justify-center">
                Home
              </a>
            </Link>
            <Link href="/hotels">
              <a className="nav__links lg:inline-flex lg:w-auto w-auto px-3 py-2 rounded text-white items-center justify-center">
                Hotels
              </a>
            </Link>
            <Link href="/contact">
              <a className="nav__links lg:inline-flex lg:w-auto w-auto px-3 py-2 rounded text-white  items-center justify-center">
                Contact
              </a>
            </Link>
            <div>
              <Link href="/loginPage" passHref>
                <button className="nav__btn">Log in</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
