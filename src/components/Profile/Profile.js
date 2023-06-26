import { Fragment, useContext, useRef } from 'react';
import classes from './Profile.module.css';
import AuthContext from '../../store/auth-context';

const Profile = () => {

    const authCtx = useContext(AuthContext);
    const nameInputRef = useRef();
    const photoURLRef = useRef();
    const submitHandler = (e) => {
        e.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredPhotoURL = photoURLRef.current.value;
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBJVhLyraZIaOHKuIYAEHRRqOQ1pCR7qsw', {
            method:'POST',
            body:JSON.stringify({
                idToken:authCtx.tokenId,
                displayName:enteredName,
                photoUrl:enteredPhotoURL,
                returnSecureToken:false,
                
            })
        })

    }
    return (
        <Fragment>
        <div className={classes.profile}>
        <h3>Complete Your Profile</h3>
        
        </div>

        <section className={classes.form}>
              <h1>Contact Details</h1>
              <form onSubmit={submitHandler}>
                <div className={classes.control}>
                  <label htmlFor='name'>Full Name</label>
                  <input type='text' id='name' required />
                </div>
                <div className={classes.control}>
                  <label htmlFor='photo'>Photo URL</label>
                  <input
                    type='text'
                    id='photo'
                   
                    required
                  />
                </div>
             
                <div className={classes.actions}>
                  
                 <button>Update</button> 
                  
                </div>
              </form>
            </section>
        </Fragment>
        
     
    )

};

export default Profile;