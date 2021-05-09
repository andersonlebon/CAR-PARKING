import React from "react";

const Pagination = (props) => {
  const { page, currentPage, onChangePage, pageSize } = props;
  return (
    <button
      onClick={() => onChangePage(page)}
      disabled={pageSize === 1 ? true : false}
      className={currentPage === page ? "pagination on-page" : "pagination"}
    >
      {page}
    </button>
  );
};

export default Pagination;
