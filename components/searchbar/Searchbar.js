function Searchbar() {
  return (
    <div>
      <div className="searchbar">
        <form className="searchbar__form">
          <input
            className="searchbar__input searchbar__input-1"
            type="search"
            placeholder="Search for an adventure"
          />
          <input
            className="searchbar__input searchbar__input-2"
            type="date"
            placeholder="Check in/out"
          />
          <input
            className="searchbar__input searchbar__input-3"
            type="text"
            placeholder="Add guests"
          />
          <input
            className="searchbar__input searchbar__input-3"
            type="text"
            placeholder="Add rooms"
          />
          <input className="searchbar__btn" type="submit" value="submit" />
        </form>
      </div>
    </div>
  );
}

export default Searchbar;
