import useScript from '../../../hooks/useScript';
import './SignIn.css';
import { ReactComponent as Signinline } from './SignInLine.svg';
import React from 'react'

export function SignIn() {
  useScript('/assets/js/sign-in.js');
  
  return (
    <div className="page">
      <div className="container">
        <div className="left">
          <div className="login">Login</div>
          <div className="eula">By logging in you agree to the ridiculously long terms that you didn't bother to read</div>
        </div>
        <div className="right">
          <Signinline />
          <div className="form">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
            <input type="submit" id="submit" value="Submit" />
          </div>
        </div>
      </div>
    </div>
  );
}