import classes from './AuthForm.module.css';
import { useState,useRef, Fragment, useContext } from 'react';
import {useHistory, Redirect} from 'react-router-dom';
import { authActions } from '../../store/auth';
import {useSelector, useDispatch} from 'react-redux'


const AuthForm = props => {

    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
 
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const history =  useHistory()
  
  
  
    const switchAuthModeHandler = () => {
    history.push('/signup')
      
  
    
    };
    const forgetPassword = () => {
      history.push('/forget')
    }

    const signInHandler = (e) => {
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
  
      e.preventDefault();
      
      const signInData = {
        email:enteredEmail,
        password:enteredPassword,
        returnSecureToken: true
      }
      setIsLoading(true);
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBJVhLyraZIaOHKuIYAEHRRqOQ1pCR7qsw', {
          method: 'POST',
          body:JSON.stringify(signInData),
          headers: {
            'Content-Type' : 'application/json'
          }
  
        }).then(res => {
          setIsLoading(false)
          if(res.ok) {
            res.json().then(data => {
                dispatch(authActions.login(data))
              history.replace('/home')
            });
          } else {
            res.json().then(data => {
              alert(data.error.message)
              })
          }
        })
  
      
     
    
    }
    return (
      <section className={classes.auth}>
        <h1> Login </h1>
        <form onSubmit={signInHandler}>
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
          <div className={classes.forget}>
            <button onClick={forgetPassword}>Forget Password?</button>
          </div>
          <div className={classes.actions}>
            {isLoading && <p>Sending Request...</p>}
            {!isLoading && <button>Login</button> }
            <button
              type='button'
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
             Create new account
            </button>
          </div>
        </form>
      </section>
    );

}

export default AuthForm;