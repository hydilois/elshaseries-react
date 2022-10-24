import React from "react";
import { Link } from "react-router-dom";

function ScrollToTop() {
  return (
    <Link to="#" className="scroll-top">
      <i className="fa fa-angle-up"></i>
    </Link>
  );
}

export default ScrollToTop;
