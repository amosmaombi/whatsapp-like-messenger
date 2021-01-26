import React from 'react'
import "./Login.css"
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionType } from './reducer';

function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
      auth.signInWithPopup(provider)
          .then((result) =>{ 
              dispatch({
                type:actionType.SET_USER,
                user:result.user,
             });
           })
          .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
             <div className="login_container">
                 <div className="login_text">
                    <h1>Sign in with google</h1>
                 </div>

                 <Button type="submit" onClick={signIn} >
                     sign in
                 </Button>
            </div>
        </div>
    )
}

export default Login
