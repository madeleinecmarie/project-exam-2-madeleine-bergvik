function Searchbar() {
  return (
    <div>
      <div className="searchbar bg-black m-auto rounded-sm">
        <form className="flex flex-col md:flex-row mt-9">
          <input
            className="border border-solid border-black md:mr-3 mt-2 p-2 w-253 h-65 rounded-sm"
            type="text"
            placeholder="Search for an adventure"
          />
          <input
            className="border border-solid border-black md:mr-3 mt-2 p-2 w-155 h-65 rounded-sm"
            type="text"
            placeholder="Check in/out"
          />
          <input
            className="border border-solid border-black md:mr-3 mt-2 p-2 w-144 h-65 rounded-sm"
            type="text"
            placeholder="Add guests"
          />{" "}
          <input
            className="border border-solid border-black md:mr-3 mt-2 p-2 w-144 h-65 rounded-sm"
            type="text"
            placeholder="Add rooms"
          />
          <input
            className="searchBtn md:mr-3 mt-2"
            type="submit"
            value="Search"
          />
        </form>
      </div>
    </div>
  );
}

export default Searchbar;
