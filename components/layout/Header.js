import Nav from "../layout/Nav";
import Searchbar from "../searchbar/Searchbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <div className="searchbar__div">
          <Searchbar />
        </div>
      </div>
    </>
  );
}

export default Header;
