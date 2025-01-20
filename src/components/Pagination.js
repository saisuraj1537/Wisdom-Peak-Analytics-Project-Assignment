import React from "react";
import "./Pagination.css";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`page-btn ${page === currentPage ? "active" : ""}`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
