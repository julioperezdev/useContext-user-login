import React from "react"

//components
import Profile from "./component/Profile"
import UserList from "./component/UserList"


//context
import UserState from "./context/user/UserState"


function App() {
  return (
    <div className="App">
      <UserState>
        <UserList/>
        <Profile/>
      </UserState>
    </div>
  );
}

export default App;
