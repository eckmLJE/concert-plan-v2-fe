import React from "react";

import "../css/Spinner.css";

const Spinner = props => {
  return <div className="loader">{props.content}</div>;
};

export default Spinner;
