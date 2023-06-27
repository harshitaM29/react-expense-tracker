import classes from './Home.module.css';
import {NavLink, useHistory} from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import { useContext } from 'react';



const Home = () => {
    const history = useHistory()
    const authCtx = useContext(AuthContext)
    const verifyEmailHandler = (e) => {
        e.preventDefault();
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBJVhLyraZIaOHKuIYAEHRRqOQ1pCR7qsw' ,{
            method:'POST',
            body :JSON.stringify({
                requestType:"VERIFY_EMAIL",
                idToken:authCtx.tokenId

            }),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res => {
            if(res.ok){
                console.log(res)
            } else {
                res.json().then(data => {
                    alert(data.error.message)
                })
            }
        })
    }

    const logoutHandler = () => {
        authCtx.onLogout();
        history.replace('/')

    }
    return (
        <div className={classes.home}>
        <h3>Welcome to Expense Tracker</h3>
        
        <div  className={classes.action}>
        <button><NavLink to="/profile" style={{textDecoration: 'none', color:'white'}}>Profile</NavLink></button>
        <button onClick={verifyEmailHandler}>Verify Your Email</button>
        <button onClick={logoutHandler}>Logout</button></div> 
        
        </div>
    )
}

export default Home;