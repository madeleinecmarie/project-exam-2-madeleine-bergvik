import Logo from "../logo/Logo";
import Link from "next/link";
import { useRouter } from "next/router";

function Footer() {
  const router = useRouter();

  return (
    <div className="bg-black flex justify-between h-56">
      <div className="ml-16 mt-10">
        <Logo />
        <div className="mt-3.5">
          <p className="text-white">
            Copyright © 2022 Holidaze.no. All rights reserved.
          </p>
          <p className="text-white mb-10">For educational use only</p>
        </div>
      </div>
      <div className="mr-12 mt-10">
        <ul className="flex flex-row justify-between mr-10">
          <li className="nav__links">
            <Link href="/stays" passHref>
              <a className={router.pathname === "/stays" ? "active" : ""}>
                Stays
              </a>
            </Link>
          </li>
          <li className="nav__links pl-11">
            <Link href="/contact" passHref>
              <a className={router.pathname === "/contact" ? "active" : ""}>
                Contact
              </a>
            </Link>
          </li>
          <p className="nav__links pl-11">Privacy Policy</p>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
