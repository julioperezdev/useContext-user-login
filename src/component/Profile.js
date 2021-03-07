import React, {useContext} from "react";
import UserContext from "../context/user/UserContext";

const Profile = () => {

    const {users, selectedUser, getProfile} = useContext(UserContext)



    return (
        <div>
            {selectedUser ? (<div>{selectedUser.avatar}</div>) : (<h1>no user selected</h1>)}
        </div>
    )
}

export default Profile;