import React from 'react'
import { Link } from 'react-router'

const LoginSignInButtons = () => {
  return <div>
    <button>Sign Up</button>
    <button><Link to='/login'>Log In</Link></button>
  </div>
}

export default LoginSignInButtons