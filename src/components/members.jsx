import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";
import Button from "./common/button";
import { MembersContext } from "./contexts/membersContext";

const Members = () => {
  const [members, setMembers] = useContext(MembersContext);

  const columns = [
    {
      path: "_id",
      label: "ID",
    },
    {
      path: "name",
      label: "Name",
      content: (item) => `${item.firstname} ${item.lastname}`,
    },
    {
      path: "email",
      label: "Email",
    },
    {
      path: "contactNumber",
      label: "Contact Number",
    },
    {
      key: "edit",
      content: (item) => (
        <>
          <Link to={`/${item._id}`}>
            <Button label="Edit" className="button-primary" />
          </Link>
          <Button label="Delete" className="button-primary" onClick={() => handleDelete(item._id)} />
        </>
      ),
    },
  ];

  const handleDelete = (id) => {
    const newMembers = { ...members };
    newMembers.data = members.data.filter((member) => member._id !== id);

    setMembers(newMembers);
  };

  return (
    <div className="container">
      <h4>MEMBERS</h4>
      <Link to="/new">
        <Button label="Add New" className="button-primary" />
      </Link>

      {members.data.length > 0 ? <Table columns={columns} data={members.data} /> : <h5>No data. Please Add New.</h5>}
    </div>
  );
};

export default Members;
