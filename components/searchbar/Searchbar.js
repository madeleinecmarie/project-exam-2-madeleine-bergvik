// import { useState, useEffect } from "react";
import { DateRangePicker } from "@mantine/dates";
import { Icon } from "@iconify/react";

function Searchbar({ hotel }) {
  const [value, setValue] = [new Date(2021, 11, 1), new Date(2021, 11, 5)];
  // const [hotels, setHotels] = useState("");
  // const [query, setQuery] = useState("");

  // const handleOnSearch = (event) => {
  //   event.preventDefault();
  //   setHotels(event.target.value);
  // };

  // const handleSearch = (event) => {
  //   event.preventDefault();
  //   setQuery(event.target.value);
  // };

  // const filterHotels = () => {
  //   return hotel.filter(
  //     (hotel) =>
  //       hotel.name.toLowerCase().indexOf(query.toLocaleLowerCase()) > -1
  //   );
  // };

  return (
    <div>
      <div className="searchbar">
        <form
          className="searchbar__form"
          // onSubmit={(event) => handleOnSearch(event)}
        >
          <div>
            <input
              className="searchbar__input searchbar__input-1"
              placeholder="Search for hotel"
              type="text"
              // onChange={(event) => handleSearch(event)}
            />
          </div>

          <DateRangePicker
            placeholder="Check in/out date"
            className="searchbar__datepicker"
            value={value}
            onChange={setValue}
          />
          <select
            className="searchbar__input searchbar__input-3 searchbar__input-3-margintop"
            type="text"
          >
            <option value="Add guests">Add guests</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>

          <select className="searchbar__input searchbar__input-3" type="text">
            <option value="Add rooms">Add rooms</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>

          <button className="searchbar__btn" type="submit" value="submit">
            <Icon icon="carbon:search" color="#1d282e" width={38} height={38} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Searchbar;
