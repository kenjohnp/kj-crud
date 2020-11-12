import React, { createContext, useState } from "react";

export const MembersContext = createContext();

export const MembersProvider = (props) => {
  const [members, setMembers] = useState({
    lastId: 0,
    data: [],
  });

  return <MembersContext.Provider value={[members, setMembers]}>{props.children}</MembersContext.Provider>;
};
