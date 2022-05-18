import { useState, useEffect } from "react";
import { DateRangePicker } from "@mantine/dates";
import { Icon } from "@iconify/react";
import axios from "axios";

function Searchbar() {
  const [value, setValue] = [new Date(2021, 11, 1), new Date(2021, 11, 5)];

  // const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      // setLoading(true);
      const response = await axios.get("http://localhost:1337/hotels");
      setPosts(response.data);
      // setLoading(false);
    };

    // loading ? (
    //   <h4>Loading ...</h4>
    // ) :

    loadPosts();
  }, []);

  return (
    <div>
      <div className="searchbar">
        <form className="searchbar__form">
          <div>
            <input
              className="searchbar__input searchbar__input-1"
              placeholder="Search for hotel"
              type="text"
              onChange={(e) => setSearchTitle(e.target.value)}
            />

            {posts
              .filter((value) => {
                if (searchTitle === "") {
                  return value;
                } else if (
                  value.name
                    .toLowerCase()
                    .includes(searchTitle.toLocaleLowerCase())
                ) {
                  return value;
                }
              })

              .map((item) => (
                <h5 key={item.id}>{item.name}</h5>
              ))}
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
