import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "../logo/Logo";

function Nav() {
  const router = useRouter();

  return (
    <div>
      <nav className="nav">
        <Logo />
        <ul className="nav__ul">
          <li className="nav__links">
            <Link href="/" passHref>
              <a
                className={
                  router.pathname === "/"
                    ? "active text-white font-semibold"
                    : ""
                }
              >
                Home
              </a>
            </Link>
          </li>

          <li className="nav__links">
            <Link href="/stays" passHref>
              <a className={router.pathname === "/stays" ? "active" : ""}>
                Stays
              </a>
            </Link>
          </li>
          <li className="nav__links">
            <Link href="/contact" passHref>
              <a className={router.pathname === "/contact" ? "active" : ""}>
                Contact
              </a>
            </Link>
          </li>
          <div>
            <button className="nav__btn">Log in</button>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
