import React from 'react';

const PageNumbers = ({ totalPages, changeCurrentPage }) => {
  let noOfspan = [];

  for (let i = 1; i <= totalPages; i++) {
    noOfspan.push(
      <span
        key={i}
        to=""
        className="paginationSpan"
        onClick={() => changeCurrentPage(i)}
      >
        {i}
      </span>
    );
  }
  return <div>{noOfspan}</div>;
};

export default PageNumbers;
