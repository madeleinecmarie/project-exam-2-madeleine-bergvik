import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import LogoImage from "../../public/images/logo.png";

export const Nav = () => {
  const [active, setActive] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="nav active flex items-center flex-wrap">
        <div className="logo-container">
          <Link href="/" passHref>
            <a>
              <Image
                src={LogoImage}
                width={122}
                height={36}
                alt="Holidaze logo"
                className="logo"
              ></Image>
            </a>
          </Link>
        </div>
        <button
          className="nav__hamburger inline-flex p-3 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
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
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto nav__links-wrapper`}
        >
          <div className="nav__mobile gap-14 lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
            <Link href="/">
              <a className={router.pathname === "/" ? "activeNav" : "inactive"}>
                Home
              </a>
            </Link>
            <Link href="/hotels">
              <a
                className={
                  router.pathname === "/hotels" ? "activeNav" : "inactive"
                }
              >
                Hotels
              </a>
            </Link>
            <Link href="/contact">
              <a
                className={
                  router.pathname === "/contact" ? "activeNav" : "inactive"
                }
              >
                Contact
              </a>
            </Link>
            <div>
              <div>
                <Link href="/loginPage" passHref>
                  <button className="nav__btn">Log in</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
