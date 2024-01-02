import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { ProgressBar } from "react-bootstrap";

const DangerBar = ({ value }) => {
  return (
    <div className='w-40'>
      <ProgressBar
        variant='danger'
        now={value}
      />
    </div>
  );
};

export default DangerBar;
