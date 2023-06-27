import { Fragment, useCallback, useContext, useEffect, useRef, useState } from 'react';
import classes from './Profile.module.css';
import AuthContext from '../../store/auth-context';

const Profile = () => {

    const [percent,setPercent] = useState(64)
    const authCtx = useContext(AuthContext);
    const nameInputRef = useRef();
    const photoURLRef = useRef();
    

    const getData = useCallback(() => {
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBJVhLyraZIaOHKuIYAEHRRqOQ1pCR7qsw', {
        method: 'POST',
        body:JSON.stringify({
          idToken:authCtx.tokenId
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        if(res.ok){
          res.json().then(data => {
            console.log(data.users)
            if(data.users.some(el => el.hasOwnProperty('displayName'))){
              setPercent(100)
            }
            
           
            // if(data.users.hasOwnProperty(displayName)){
            //   setPercent(64)
            // } else {
            //   setPercent(100)
            // }
            nameInputRef.current.value = data.users.map(item => item.displayName)
            photoURLRef.current.value = data.users.map(item => item.photoUrl)
          })
        }
      })
    }, [])
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
        }).then(res => {
          if(res.ok) {
            res.json().then(data => {
              setPercent(100)
             console.log(data)
            });
          } else {
            res.json().then(data => {
              alert(data.error.message)
              })
          }
        })

    }

    useEffect(() => {
      getData();
    }, [getData])
    return (
        <Fragment>
        <div className={classes.profile}>
        <h3>Complete Your Profile</h3>
        <div>
        {percent === 100 ? <p>Your Profile is {percent}% completed</p> : <p>Your Profile is {percent}% completed.Complete now</p>} 
        </div>
        </div>

        <section className={classes.form}>
              <h1>Contact Details</h1>
              <form onSubmit={submitHandler}>
                <div className={classes.control}>
                  <label htmlFor='name'>Full Name</label>
                  <input type='text' id='name' ref={nameInputRef} required />
                </div>
                <div className={classes.control}>
                  <label htmlFor='photo'>Photo URL</label>
                  <input
                    type='url'
                    id='photo'
                    ref={photoURLRef}
                   
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