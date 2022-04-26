import Nav from "../layout/Nav";
import Searchbar from "../searchbar/Searchbar";

function Header() {
  return (
    <>
      <div className="heroImg">
        <Nav />
        <div className="text-white">
          <p className="herotext leading-line-3 mt-24 pl-24">
            Be adventurous in
            <span className="herotext__span block">STAVANGER</span>
          </p>
        </div>
        <div className="pt-64">
          <Searchbar />
        </div>
      </div>
    </>
  );
}

export default Header;
