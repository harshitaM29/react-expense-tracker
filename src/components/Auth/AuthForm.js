import classes from './AuthForm.module.css';
import { useState,useRef, Fragment } from 'react';
import {useHistory} from 'react-router-dom'

const AuthForm = props => {

   
    const [isLoading, setIsLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const confirmPasswordInputRef = useRef();
    const history =  useHistory()
  
  
  
    const switchAuthModeHandler = () => {
      setIsLogin((prevState) => !prevState);
      
  
    
    };
  

    const signUpHandler = (e) => {
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
  
      e.preventDefault();
      
      const signUpData = {
        email:enteredEmail,
        password:enteredPassword,
        returnSecureToken: true
      }
      setIsLoading(true);
      if(isLogin) {
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBJVhLyraZIaOHKuIYAEHRRqOQ1pCR7qsw', {
          method: 'POST',
          body:JSON.stringify(signUpData),
          headers: {
            'Content-Type' : 'application/json'
          }
  
        }).then(res => {
          setIsLoading(false)
          if(res.ok) {
            res.json().then(data => {
                console.log(data.idToken)
              history.replace('/home')
            });
          } else {
            res.json().then(data => {
              alert(data.error.message)
              })
          }
        })
  
      }else{
        
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBJVhLyraZIaOHKuIYAEHRRqOQ1pCR7qsw', {
          method:'POST',
          body:JSON.stringify(signUpData),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => {
          setIsLoading(false);
          if(res.ok) {
            
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
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
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
         {!isLogin &&  <div className={classes.control}>
            <label htmlFor='password'>Confirm Password</label>
            <input
              type='password'
              id='password'
              ref={confirmPasswordInputRef}
              required
            />
          </div> }
          <div className={classes.actions}>
            {isLoading && <p>Sending Request...</p>}
            {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button> }
            <button
              type='button'
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? 'Create new account' : 'Login with existing account'}
            </button>
          </div>
        </form>
      </section>
    );

}

export default AuthForm;