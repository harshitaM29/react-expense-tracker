import { createSlice } from '@reduxjs/toolkit';

const email = localStorage.getItem("emailId");
const token = localStorage.getItem("token");

const initialAuthState = {tokenId: token, isLoggedIn:!!token, emailId:email};

const authSlice = createSlice({
    name:'authentication',
    initialState:initialAuthState,
    reducers: {
        login(state, action) {
            localStorage.setItem("token", action.payload.idToken);
            localStorage.setItem("email", action.payload.email.split('@')[0]);
            state.tokenId = action.payload.idToken
            state.emailId = action.payload.email
            state.isLoggedIn = true;
        },
        logout(state){
           localStorage.removeItem("token");
           localStorage.removeItem("email");
           state.tokenId = null;
           state.emailId = null; 

        }
    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;