// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Searchbar() {
  return (
    <div>
      <div className="searchbar">
        <form className="sm:flex sm:flex-row md:gap-1 mt-9">
          <input
            className="border border-solid border-black mr-3 mt-2 p-2 sm:w-253 h-65 rounded-sm"
            type="text"
            placeholder="Search for an adventure"
          />
          <input
            className="border border-solid border-black md:mr-3 mt-2 p-2 sm:w-155 h-65 rounded-sm"
            type="text"
            placeholder="Check in/out"
          />
          <input
            className="border border-solid border-black md:mr-3 mt-2 p-2 sm:w-144 h-65 rounded-sm"
            type="text"
            placeholder="Add guests"
          />{" "}
          <input
            className="border border-solid border-black md:mr-3 mt-2 p-2 sm:w-144 h-65 rounded-sm"
            type="text"
            placeholder="Add rooms"
          />
          <input
            className="searchBtn md:mr-3 mt-2"
            type="submit"
            value="submit"
          />
        </form>
      </div>
    </div>
  );
}

export default Searchbar;
