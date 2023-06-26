import classes from './SignUp.module.css';
import { Redirect, useHistory } from 'react-router-dom';
import { useState, useRef } from 'react';

const SignUp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const confirmPasswordInputRef = useRef();
    const history = useHistory();
    const switchAuthModeHandler = () => {
      history.push('/')

    }
    const signUpHandler = (e) => {
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const enteredConfirmPassword = confirmPasswordInputRef.current.value;
  
      e.preventDefault();
      
      const signUpData = {
        email:enteredEmail,
        password:enteredConfirmPassword,
        returnSecureToken: true
      }
      setIsLoading(true);
   
        if(enteredConfirmPassword !== enteredPassword) {
            alert('Password does not match')
            setIsLoading(false);
        } else {
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBJVhLyraZIaOHKuIYAEHRRqOQ1pCR7qsw', {
          method:'POST',
          body:JSON.stringify(signUpData),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => {
          setIsLoading(false);
          if(res.ok) {
            history.push('/');
          } else{
            res.json().then(data => {
            alert(data.error.message)
            })
          }
        })
    }
     
    }

    return (
        
            <section className={classes.auth}>
              <h1>Sign Up</h1>
              <form onSubmit={signUpHandler}>
                <div className={classes.control}>
                  <label htmlFor='email'>Email</label>
                  <input type='email' id='email' ref={emailInputRef} required />
                </div>
                <div className={classes.control}>
                  <label htmlFor='password'>Password</label>
                  <input
                    type='password'
                    id='password'
                    ref={passwordInputRef}
                    required
                  />
                </div>
              <div className={classes.control}>
                  <label htmlFor='password'>Confirm Password</label>
                  <input
                    type='password'
                    id='password'
                    ref={confirmPasswordInputRef}
                    required
                  />
                </div> 
                <div className={classes.actions}>
                  {isLoading && <p>Sending Request...</p>}
                  {!isLoading && <button>Create Account</button> }
                  <button
                    type='button'
                    className={classes.toggle}
                    onClick={switchAuthModeHandler}
                  >
                    Login with existing account
                  </button>
                </div>
              </form>
            </section>
      
    )
};

export default SignUp;