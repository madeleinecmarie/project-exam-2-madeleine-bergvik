import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import LogoImage from "../../public/images/logo.png";

function Footer() {
  const router = useRouter();

  return (
    <div className="footer">
      <div className="footer__inner">
        <div className="footer__div-1">
          <div className="footer__logo">
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

          <div className="footer__text">
            <p>Copyright © 2022 Holidaze.no. All rights reserved.</p>
            <p>For educational use only</p>
          </div>
        </div>
        <div className="footer__div-2">
          <ul className="footer__ul">
            <li className="footer__links">
              <Link href="/hotels" passHref>
                <a
                  className={
                    router.pathname === "/hotels" ? "activeNav" : "inactive"
                  }
                >
                  Hotels
                </a>
              </Link>
            </li>
            <li className="footer__links">
              <Link href="/contact" passHref>
                <a
                  className={
                    router.pathname === "/contact" ? "activeNav" : "inactive"
                  }
                >
                  Contact
                </a>
              </Link>
            </li>
            <li className="footer__links">Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
