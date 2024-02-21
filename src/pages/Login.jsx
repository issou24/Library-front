import React from 'react';
import PropTypes from 'prop-types';
import {useState} from 'react';


async function loginUser(credentials) {
  return fetch('http://localhost:5173/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <div className="login-wrapper">
      <h1 className='flex justify-start items-center gap-x-2'>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p className='my-1'>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p className='text-3xl my-4 text-align-center'>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit" className='text-3xl-center my-4 center'>Submit</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}


