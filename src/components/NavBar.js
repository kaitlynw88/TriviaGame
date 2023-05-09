import React from 'react'
import { UserAuth } from './auth/AuthContext';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const {user, logOut} = UserAuth()

    const handleSignOut = async ()=>{
        try {
            await logOut()

        }catch (error){
            console.log(error)
        }
    }
  return (
    <div>
        <h1>Trivia Game</h1>
        {user?.displayName ? <button onClick={handleSignOut}>Logout</button> : <Link to="/signin">Log in </Link>}

    </div>
  )
}

export default NavBar;
