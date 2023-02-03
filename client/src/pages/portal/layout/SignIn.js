import './SignIn.css';
import { ReactComponent as Signinline } from './SignInLine.svg';
import React from 'react'

export class SignIn extends React.Component {
  componentDidMount () {
    const script = document.createElement("script");
    script.src = "./sign-in.js";
    script.async = true;
    document.body.appendChild(script);
  }
  
  componentWillUnmount () {
    let allsuspects=document.getElementsByTagName("script");
    for (let i=allsuspects.length; i>=0; i--){
      if (allsuspects[i] && allsuspects[i].getAttribute("src")!==null 
        && allsuspects[i].getAttribute("src").indexOf("./sign-in.js")                !== -1 ){
           allsuspects[i].parentNode.removeChild(allsuspects[i])
        }    
    }
  }

  render() {
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
    )
  }
}