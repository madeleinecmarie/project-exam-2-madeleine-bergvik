import { useState } from "react";
import { DateRangePicker } from "@mantine/dates";
import { Icon } from "@iconify/react";

function Searchbar() {
  const [value, setValue] = [new Date(2021, 11, 1), new Date(2021, 11, 5)];

  return (
    <div>
      <div className="searchbar">
        <form className="searchbar__form">
          <input
            className="searchbar__input searchbar__input-1"
            type="search"
            placeholder="Search for hotel"
          />

          <DateRangePicker
            placeholder="Check in/out date"
            className="searchbar__datepicker"
            value={value}
            onChange={setValue}
          />
          <input
            className="searchbar__input searchbar__input-3 searchbar__input-3-margintop"
            type="text"
            placeholder="Add guests"
          />
          <input
            className="searchbar__input searchbar__input-3"
            type="text"
            placeholder="Add rooms"
          />
          <button className="searchbar__btn" type="submit" value="submit">
            <Icon icon="carbon:search" color="#1d282e" width={38} height={38} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Searchbar;
