import React from "react";
import Auth from "../../services/Auth";
import LoginForm from "./LoginForm";

import startAudio from "../../audio/forest.mp3";

function LoginPage() {
  const login = async (loginData) => {
    const loginSuccess = await Auth.login(loginData);
    if (!loginSuccess) {
      alert("Invalid credentials");
    }
  };

  const register = async (registrationData) => {
    const registerSuccess = await Auth.register(registrationData);
    if (!registerSuccess) {
      alert("Couldn't register check credentials and try again");
    }
  };

  return (
    <div className="row">
      <div className="login-container">
        <div className="card login-card">
          <div className="login-box">
            <audio autoplay="autoplay" loop>
              <source src={startAudio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <img
              className="simba-logo"
              src="/images/Simba-ICON.png"
              alt="logo"
            />
            <div className="simba-title">
              <span className="title-name">SIMBA</span> <br />{" "}
              <span className="title-slogan">The Lion King (Learning App)</span>
            </div>
            <div className="login-page">
              <span className="login-txt">Login</span>
              <br />
              <br />
              <div className="login-space">
                <LoginForm onSubmit={login} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
