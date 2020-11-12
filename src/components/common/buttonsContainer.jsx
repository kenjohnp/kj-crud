import React from "react";
import Button from "./button";
import { Link } from "react-router-dom";

const ButtonsContainer = () => {
  return (
    <tr>
      <td></td>
      <td className="buttonContainer">
        <Button label="Submit" className="button-primary" />
        <Link to="/members" style={{ textDecoration: "none" }}>
          <Button label="Members" className="button-primary-outlined" />
        </Link>
      </td>
    </tr>
  );
};

export default ButtonsContainer;
