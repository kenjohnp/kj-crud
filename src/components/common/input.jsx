import React from "react";

const Input = ({ label, name, onChange, value }) => {
  return (
    <tr className="formControl">
      <td>
        <p className="input-label">{label}</p>
      </td>
      <td>
        <input type="text" name={name} onChange={onChange} value={value} />
      </td>
    </tr>
  );
};

export default Input;
