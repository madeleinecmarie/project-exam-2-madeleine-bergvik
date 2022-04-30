import { AttractionsData } from "./AttractionsData";
import Image from "next/image";

function Attractions() {
  const data = AttractionsData;
  return (
    <div className="container m-auto w-11/12 mb-16">
      <h2 className="mb-16 mt-88">Top Attractions in Stavanger</h2>

      <div className="flex flex-wrap gap-10 ml-6">
        {data.map(({ id, image, title, description }) => {
          return (
            <div key={id} className="w-30">
              <Image
                src={image}
                alt="image of attraction"
                height={339}
                width={379}
                className="rounded-sm"
              ></Image>
              <h3 className="mt-3">{title}</h3>
              <p className="mt-2">{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Attractions;
