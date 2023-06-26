import AuthContext from "./auth-context";
import { useState } from "react";

const AuthContextProvider = props => {
    const token = localStorage.getItem("token")
    const [tokenId, setToken] = useState(token);
    const isUserLoggedIn = !!tokenId;
    const loginHandler = (data) => {
        setToken(data.idToken);
        localStorage.setItem("token",data.idToken)
    }

    const cartContext = {
        tokenId: tokenId,
        isLoggedIn:isUserLoggedIn,
        onLogin:loginHandler,
        onLogout:() => {}
    }

    return (
        <AuthContext.Provider value={cartContext}>
            {props.children}
        </AuthContext.Provider>
    )

};

export default AuthContextProvider;


