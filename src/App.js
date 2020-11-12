import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/navBar";
import AddMember from "./components/addMember";
import Members from "./components/members";
import { MembersProvider } from "./components/contexts/membersContext";

const App = () => {
  return (
    <>
      <NavBar />
      <MembersProvider>
        <Switch>
          <Route path="/members" component={Members} />
          <Route path="/:id" component={AddMember} />
          <Route path="/new" component={AddMember} />
          <Route path="/" component={Members} />
          <Redirect to="/not-found" />
        </Switch>
      </MembersProvider>
    </>
  );
};

export default App;
