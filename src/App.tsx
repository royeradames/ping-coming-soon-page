import React from "react";

import "./styles/main.scss";

// import
import logo from "./images/logo.svg";
import illustrationDashboard from "./images/illustration-dashboard.png";

function App() {
  return (
    <>
      <header className="header">
        <img src={logo} alt="Ping logo" className="header__logo" />
      </header>
      <main className="launching">
        <h1 className="h1 launching__logo">
          We are launching <span className="launching__logo--bold">soon!</span>
        </h1>
        <p className="launching__subtext">Subscribe and get notified</p>
        <form className="launching__form">
          <input
            type="text"
            className="launching__form-input"
            placeholder="Your email adress..."
          />
          <button className="btn launching__form-btn">Notify Me</button>
        </form>
        <img
          src={illustrationDashboard}
          alt="Illustration Dashboard"
          className="launching__illustration-dashboard"
        />
      </main>
      <footer className="footer">
        <article className="socials footer__socials"></article>
        <p className="footer__copy-right">
          &copy; Copyright Ping. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
