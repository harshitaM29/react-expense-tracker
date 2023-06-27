import AuthContext from "./auth-context";
import { useState } from "react";

const AuthContextProvider = props => {
    const token = localStorage.getItem("token")
    const email = localStorage.getItem("emailId")
    const [tokenId, setToken] = useState(token);
    const [emailId, setEmailId] = useState(email)
    const isUserLoggedIn = !!tokenId;
    const loginHandler = (data) => {
        console.log(data.email)
        setToken(data.idToken);
        setEmailId(data.email);
        localStorage.setItem("token",data.idToken)
        localStorage.setItem("emailId",data.email)
    }
    const logoutHandler = () => {
        setToken(null);
        setEmailId(null);
        localStorage.removeItem("token")
        localStorage.removeItem("emailId")
       
     
    }

    const cartContext = {
        tokenId: tokenId,
        isLoggedIn:isUserLoggedIn,
        emailId:emailId,
        onLogin:loginHandler,
        onLogout:logoutHandler
    }

    return (
        <AuthContext.Provider value={cartContext}>
            {props.children}
        </AuthContext.Provider>
    )

};

export default AuthContextProvider;


