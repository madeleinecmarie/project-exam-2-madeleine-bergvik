import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <div>
      <Link href="/" passHref>
        <a>
          <Image
            src="/images/logo.png"
            width="122px"
            height="36px"
            alt="Holidaze logo"
            className="logo"
          ></Image>
        </a>
      </Link>
    </div>
  );
}

export default Logo;
