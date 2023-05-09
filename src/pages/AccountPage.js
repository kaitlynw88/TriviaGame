import React from 'react'
import { UserAuth } from '../components/auth/AuthContext';
import { useNavigate } from "react-router-dom";

const AccountPage = () => {
    const {logOut, user} = UserAuth()
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };

    const beginQuiz =()=>{
        navigate("/trivia")
    }

  return (
      <div>
          <p>Welcome, {user?.displayName}</p>
          Your scores are:
          <ul>
              <li>Easy: 100pts</li>
              <li>Easy: 100pts</li>
              <li>Hard: 40pts</li>
              <li>Medium: 70pts</li>
          </ul>

          <button onClick={beginQuiz}>Test your knowledge!</button>
          <button onClick={handleSignOut}>SignOut</button>
      </div>
  );
}

export default AccountPage
