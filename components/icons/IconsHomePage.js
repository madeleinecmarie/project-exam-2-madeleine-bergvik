import Image from "next/image";
import Event from "../../public/images/event.png";
import LoyaltyCard from "../../public/images/loyaltycard.png";
import Card from "../../public/images/card.png";
import Headset from "../../public/images/headset.png";

function IconsHomePage() {
  return (
    <>
      <div className="flex justify-evenly m-auto w-11/12 pt-36">
        <Image
          src={Event}
          alt="Event icon"
          height="110px"
          width="123px"
        ></Image>
        <Image
          src={LoyaltyCard}
          alt="Loyaltycard icon"
          height="112px"
          width="112px"
        ></Image>
        <Image src={Card} alt="Card icon" height="112px" width="112px"></Image>
        <Image
          src={Headset}
          alt="Headset icon"
          height={116}
          width={116}
        ></Image>
      </div>
    </>
  );
}

export default IconsHomePage;
