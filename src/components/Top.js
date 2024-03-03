import React from "react";
import "./Top.css"
const Top = ({ search, sortBy, handleSearch, handleSort }) => {
  return (
    <div className="top-container">
      <input
        type="text"
        placeholder="Search Here By Name or Location..."
        value={search}
        onChange={handleSearch}
        className="search-input"
      />
      <br />
      <button className="sort-button" value={sortBy} onClick={() => handleSort('date')}>Sort by Date</button>
      <button className="sort-button" value={sortBy} onClick={() => handleSort('time')}>Sort by Time</button>
    </div>
  );
};

export default Top;
