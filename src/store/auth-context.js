import React from "react";

const AuthContext = React.createContext({
    tokenId: '',
    isLoggedIn:false,
    emailId:'',
    onLogin:(token) => {},
    onLogout:() => {}
});

export default AuthContext;