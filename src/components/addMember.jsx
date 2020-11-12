import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Input from "./common/input";
import FormContainer from "./common/formContainer";
import ButtonsContainer from "./common/buttonsContainer";
import { MembersContext } from "./contexts/membersContext";

const AddMember = ({ match }) => {
  const [members, setMembers] = useContext(MembersContext);
  const [member, setMember] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contactNumber: "",
  });
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (match.params.id !== "new") {
      const newMember = members.data.find((member) => member._id == match.params.id);
      if (newMember) return setMember(newMember);

      setRedirect(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMember = { ...member };
    newMember._id = members.lastId + 1;

    const newMembers = [...members.data];
    newMembers.push(newMember);

    setMembers({
      data: newMembers,
      lastId: newMember._id,
    });

    setRedirect(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const id = match.params.id;

    const newMembers = { ...members };

    const index = newMembers.data.findIndex((member) => member._id == id);

    newMembers.data[index] = member;

    setMembers(newMembers);

    setRedirect(true);
  };

  const handleChange = ({ currentTarget: input }) => {
    const newMember = { ...member };
    newMember[input.name] = input.value;
    setMember(newMember);
  };

  return (
    <div className="container">
      <h4>{match.params.id !== "new" ? "EDIT MEMBER" : "ADD NEW MEMBER"}</h4>
      {redirect && <Redirect to="/members" />}
      <FormContainer onSubmit={match.params.id !== "new" ? handleUpdate : handleSubmit}>
        <Input name="firstname" label="Firstname" value={member["firstname"]} onChange={handleChange} />
        <Input name="lastname" label="Lastname" value={member["lastname"]} onChange={handleChange} />
        <Input name="email" label="Email" value={member["email"]} onChange={handleChange} />
        <Input name="contactNumber" label="Contact No." value={member["contactNumber"]} onChange={handleChange} />
        <ButtonsContainer />
      </FormContainer>
    </div>
  );
};

export default AddMember;
