import Image from "next/image";
import Event from "../../public/images/event.png";
import LoyaltyCard from "../../public/images/loyaltycard.png";
import Card from "../../public/images/card.png";
import Headset from "../../public/images/headset.png";

function IconsHomePage() {
  return (
    <>
      <div className="flex justify-evenly m-auto w-11/12 pt-36">
        <Image src={Event} alt="Event icon" height={110} width={123}></Image>
        <Image
          src={LoyaltyCard}
          alt="Loyaltycard icon"
          height={112}
          width={112}
        ></Image>
        <Image src={Card} alt="Card icon" height={112} width={112}></Image>
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
