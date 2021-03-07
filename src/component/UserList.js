import axios from "axios";
import React, {useEffect, useContext} from "react";
import UserContext from "../context/user/UserContext"

const UserList = () => {

    const {users, getUsers, getProfile} = useContext(UserContext)

    const login = {
        username: "admin",
        password: 12345678,
    }

    useEffect(() =>{
        getUsers();
        const res = axios.post(`http://localhost:8080/api/auth/signin`, login)
        console.log(res)
        
    }, [])


    return (
        <div>
            {
                users.map(user => (
                    <a href="#!" key = {user.id} onClick = {() => getProfile(user.id)}>
                        <img src={user.avatar} />
                        <p>{user.email}</p>
                    </a>
                ))
            }
        </div>
    )
}

export default UserList;