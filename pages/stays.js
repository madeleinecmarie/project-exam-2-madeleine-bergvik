import Head from "next/head";
import Nav from "../components/layout/Nav";
import Searchbar from "../components/searchbar/Searchbar";

export default function Stays() {
  return (
    <div className="bg-black">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="stays">
        <section>
          <div className="mt-10 container mx-auto">
            <h3 className=" white__text">Good day,</h3>
            <h1>Find the best place for you to stay</h1>
          </div>
          <div className="searchbar__stays">
            <Searchbar className="pt-10" />
          </div>
        </section>
        <div className="bg-white">
          <h2>Hotels</h2>
          <div className="sorting">
            <h4>Filter by</h4>
            <input type="checkbox" className="default:ring-2" />
          </div>
          <div className="rating"></div>
          <h4>Star Rating</h4>
          <input type="checkbox" className="default:ring-2" />
          <input type="checkbox" className="default:ring-2" />
          <input type="checkbox" className="default:ring-2" />
          <input type="checkbox" className="default:ring-2" />
          <input type="checkbox" className="default:ring-2" />
        </div>
      </main>
    </div>
  );
}
