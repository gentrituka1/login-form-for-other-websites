import React from 'react'

function Login() {
  return (
    <div className='form-container'>
            <h1>Welcome back!</h1>
            <div className='form-main'>
                <form>
                  <label>
                    <span>Email</span>
                  <input type='text' placeholder='Email...' />
                  </label>
                  <label>
                    <span>Password</span>
                  <input type='password' placeholder='Password...' />
                  </label>
                  
                  <button type='submit'>Log In</button>
                </form>
            </div>
            <div className='form-footer'>
                <p>Don't have an account? <a href='#'>Sign Up</a></p>
            </div>
        </div>
  )
}

export default Login