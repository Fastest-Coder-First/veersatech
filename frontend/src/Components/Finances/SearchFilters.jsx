import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const SearchFilters = () => {
  return (
    <div className="p-5 finances-searchfilter">
      {/* give code for search bar and filter button */}
      <input type="text" placeholder="Search..." />
      <Button className="filter-btn" variant="primary">
        Filter
      </Button>
    </div>
  );
};

export default SearchFilters;
