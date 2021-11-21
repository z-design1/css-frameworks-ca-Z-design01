// import { useState } from "react";
import { Pagination } from "react-bootstrap";
// import styles from "./PaginationNews.module.css";

let active = 1;
let items = [];
for (let number = 1; number <= 4; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

const PaginationNews = () => {
  return (
    <div>
      <Pagination>{items}</Pagination>
      <br />
    </div>
  );
};

export default PaginationNews;
