import Link from "next/link";
import Image from "next/image";
import LogoImage from "../../public/images/logo.png";

function Logo() {
  return (
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
  );
}

export default Logo;
