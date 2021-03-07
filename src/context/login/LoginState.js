import React, { useReducer } from "react";
import LoginReducer from "./LoginReducer"
import LoginContext from "./LoginContext"
import axios from "axios"


const LoginState =  (props) => {

    initialState = {
        username: null,
        password: null,
    }

    const [state, dispatch] = useReducer(LoginReducer, initialState)

    const loginApi = async(username, password) => {
        try{
            const params = {
                username,
                password,
            };

            const response = await axios.post("http://localhost:8080/login", params);
            console.log(response);
            if (response && response.data){
                localStorage.setItem("userInfo", JSON.stringify(response.data));

                localStorage.setItem("token", JSON.stringify(response.data.token));
                dispatch({
                    type: 'SET_USER_INFO',
                    payload: response.data
                });
                return response;
            }
        }catch(error){
            const messageError = error.response ? error.response.data.message : error.message;
            console.log({error});
        }

    }

    return (
        <LoginContext.Provider value = {{
            username: state.username,
            password: state.password,
            token: state.token,
            loginApi,
        }}>
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginState;

