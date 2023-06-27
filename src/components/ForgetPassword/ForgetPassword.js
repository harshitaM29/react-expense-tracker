import { useRef, useState } from 'react';
import classes from './ForgetPassword.module.css';
import {useHistory} from 'react-router-dom'

const ForgetPassword = () => {
    const [isLoading,setIsLoading] = useState(false);
    const emailInputRef = useRef();
    const history = useHistory();

    const forgetPassHandler = (e) => {
        e.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        setIsLoading(true);
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBJVhLyraZIaOHKuIYAEHRRqOQ1pCR7qsw',{
            method:'POST',
            body:JSON.stringify({
                requestType:'PASSWORD_RESET',
                email:enteredEmail
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => {
            setIsLoading(false);
            if(res.ok){
                alert('Request has been successfully sent on your Email. Please login with new password')
                history.push('/')

            } else {
                res.json().then(data => {
                    alert(data.error.message)
                })
            }
        })
    }

return(
    <section className={classes.auth}>
    <h1> Forget Password </h1>
    <form onSubmit={forgetPassHandler}>
      <div className={classes.control}>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' ref={emailInputRef} required />
      </div>
    
      <div className={classes.actions}>
        {isLoading && <p>Sending Request...</p>}
        {!isLoading && <button>Submit</button> }
      </div>
    </form>
  </section>
)
};

export default ForgetPassword;