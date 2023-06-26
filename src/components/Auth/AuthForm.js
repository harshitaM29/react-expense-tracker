import classes from './AuthForm.module.css';
import { useState,useRef, Fragment } from 'react';

const AuthForm = props => {

    const [isLogin, setIsLogin] = useState(false);
    const [error,setError] = useState(false);
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const confirmPasswordInputRef = useRef();
 const handleSubmit = e => {
        e.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const enteredConfirmPassword = confirmPasswordInputRef.current.value;
        const signUpData = {
            email:enteredEmail,
            password:enteredConfirmPassword,
            returnSecureToken: true
          }
          if(isLogin){

          }
          else{
        if(enteredPassword !== enteredConfirmPassword){
            alert('Password does not match')
            confirmPasswordInputRef.current.value = '';
        }else {
            fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBJVhLyraZIaOHKuIYAEHRRqOQ1pCR7qsw',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(signUpData)
            }).then(res => {
                if(res.ok){
                    console.log('User has successfully signed up')
                }else{
                    res.json().then(data => {
                        alert(data.error.message);
                    })
                }
            })
        }
    }
        
      }

    const switchAuthModeHandler = () => {
        // const enteredConfirmPassword = confirmPasswordInputRef.current.value;
        // const enteredPassword = passwordInputRef.current.value;
        // if(enteredPassword !== enteredConfirmPassword) {
        //     alert('Password does not match')
        // } else {
        // setIsLogin((prevState) => !prevState);
        // }
        
    
      
      };
     
    return (
        <Fragment>
        <section className={classes.auth}>
          <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
          <form onSubmit={handleSubmit}>
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
           {!isLogin && <div className={classes.control}>
              <label htmlFor='password'>Confirm Password</label>
              <input
                type='password'
                id='password'
                ref={confirmPasswordInputRef}
                required
              />
            </div>}
            <div className={classes.actions}>
             {/* <p>Sending Request...</p> */}
          <button>{isLogin ? 'Login' : 'Create Account'}</button> 
          <section>
         <button
         type='button'
         className={classes.toggle}
         onClick={switchAuthModeHandler}
       >
         {isLogin ? 'Create new account' : 'Login with existing account'}
       </button>
       </section>
            </div>
          </form>
         
        </section>
      
       </Fragment>
      );

}

export default AuthForm;