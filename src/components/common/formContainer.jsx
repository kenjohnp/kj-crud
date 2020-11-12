import React from "react";

const FormContainer = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <table>
        <tbody>{children}</tbody>
      </table>
    </form>
  );
};

export default FormContainer;
