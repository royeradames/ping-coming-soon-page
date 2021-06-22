import React from "react";
import "./styles/main.scss";

// Front Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

// form and form-validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// imgs
import illustrationDashboard from "./images/illustration-dashboard.png";

// form-validation
interface IFormInputs {
  email: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IFormInputs) => console.log(data);
  return (
    <>
      <header className="header">
        <p className="header__logo">
          PING<span className="header__logo--blue">.</span>
        </p>
      </header>
      <main className="launching">
        <h1 className="h1 launching__title">
          We are launching <span className="launching__title--bold">soon!</span>
        </h1>
        <p className="launching__subtext">Subscribe and get notified</p>
        <form className="launching__form" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email")}
            className={`launching__form-input ${
              errors.email?.message ? "launching__form-input-error" : ""
            }`}
            placeholder="Your email adress..."
          />
          <p className="launching__form-error ">
            {errors.email?.type === "required"
              ? "Whoops! It looks like you forgot to add your email"
              : ""}
            {errors.email?.type === "email"
              ? "Please provide a valid email address"
              : ""}
          </p>
          <button className="btn launching__form-btn">Notify Me</button>
        </form>
        <img
          src={illustrationDashboard}
          alt="Illustration Dashboard"
          className="launching__illustration-dashboard"
        />
      </main>
      <footer className="footer">
        <article className="socials footer__socials">
          <a href="#root">
            <div className="footer__socials-icon">
              <FontAwesomeIcon icon={faFacebookF} className="facebook" />
            </div>
          </a>
          <a href="#root">
            <div className="footer__socials-icon">
              <FontAwesomeIcon icon={faTwitter} className="twitter" />
            </div>
          </a>
          <a href="#root">
            <div className="footer__socials-icon">
              <FontAwesomeIcon icon={faInstagram} className="instagram" />
            </div>
          </a>
        </article>
        <p className="footer__copy-right">
          &copy; Copyright Ping. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
