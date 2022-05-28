import { Nav } from "./Nav";

function Header() {
  return (
    <>
      <div className="heroImg">
        <Nav />

        <div className="herotext">
          <p className="herotext__p">
            Be adventurous in
            <span className="herotext__span block">STAVANGER</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;
