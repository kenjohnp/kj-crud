import React from "react";

const Table = ({ columns, data }) => {
  const renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return item[column.path];
  };

  const createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };

  return (
    <table className="membersTable">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.path || column.key}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => (
              <td key={createKey(item, column)}>{renderCell(item, column)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
