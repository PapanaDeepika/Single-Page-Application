import React from "react";
import "./Bottom.css"
const Bottom = ({ handleprevPage, handlenextPage, page, data }) => {
  return (
    <div className="page-container">
      <button onClick={handleprevPage} className="pagination-button" disabled={page === 1}>
        Previous
      </button>
      <div className="page-number">{page}</div>
      <button onClick={handlenextPage} className="pagination-button" disabled={data.length < 20}>
        Next
      </button>
    </div>
  );
};

export default Bottom;