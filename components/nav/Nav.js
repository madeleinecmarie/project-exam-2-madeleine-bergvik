import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// function Nav() {
//   const router = useRouter();

//   return (
//     <div>
//       <nav>
//         <Link href="/" passHref>
//           <a>
//             <Image
//               src="/images/logo.png"
//               width="100%"
//               height="30px"
//               alt="Holidaze logo"
//               className="logo"
//             ></Image>
//           </a>
//         </Link>
//         <ul>
//           <li>
//             <Link href="/" passHref>
//               <a className={router.pathname === "/" ? "active" : ""}>Home</a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/contact" passHref>
//               <a className={router.pathname === "/contact" ? "active" : ""}>
//                 Contact
//               </a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/stays" passHref>
//               <a className={router.pathname === "/stays" ? "active" : ""}>
//                 Stays
//               </a>
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default Nav;

import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
        <ul className="list">
          <li className="items">Home</li>
          <li className="items">Services</li>
          <li className="items">Contact</li>
        </ul>
      )}

      <button onClick={toggleNav} className="btn">
        BTN
      </button>
    </nav>
  );
}
