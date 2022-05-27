const Filter = () => {
  return (
    <div className="filter__hidden">
      <div className="filter__sorting">
        <h4>Filter by</h4>
        <div className="filter__input-wrapper">
          <input type="checkbox" className="filter__input" />
          <label className="filter__label">Free cancellation</label>
        </div>
      </div>
      <div className="filter__rating"></div>
      <h4>Star Rating</h4>
      <div className="inputs">
        <div>
          <input type="checkbox" className="" />
          <label className="inputs__label">1 stars</label>
        </div>
        <div>
          <input type="checkbox" className="" />
          <label className="inputs__label">2 stars</label>
        </div>
        <div>
          <input type="checkbox" className="" />
          <label className="inputs__label">3 stars</label>
        </div>
        <div>
          <input type="checkbox" className="" />
          <label className="inputs__label">4 stars</label>
        </div>
        <div>
          <input type="checkbox" className="" />
          <label className="inputs__label">5 stars</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
