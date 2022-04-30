import Logo from "../logo/Logo";
import Link from "next/link";
import { useRouter } from "next/router";

function Footer() {
  const router = useRouter();

  return (
    <div className="footer">
      <div className="footer__inner">
        <div className="footer__div-1">
          <Logo />
          <div className="footer__text">
            <p>Copyright © 2022 Holidaze.no. All rights reserved.</p>
            <p>For educational use only</p>
          </div>
        </div>
        <div className="footer__div-2">
          <ul className="footer__links">
            <li className="nav__links">
              <Link href="/stays" passHref>
                <a className={router.pathname === "/stays"}>Stays</a>
              </Link>
            </li>
            <li className="nav__links">
              <Link href="/contact" passHref>
                <a className={router.pathname === "/contact"}>Contact</a>
              </Link>
            </li>
            <li className="nav__links">Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
