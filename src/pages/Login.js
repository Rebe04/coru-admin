import React, { useState } from "react";
import Login_app from "../login.png";

import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState();

  const { login, loginWithGoogle } = useAuth();

  const iniciarSesion = async (credenciales) => {
    try {
      await login(credenciales.email, credenciales.password);
      navigate("/", { replace: true });
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSigin = async () => {
    try {
      await loginWithGoogle();
      navigate("/", { replace: true });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="form">
      <div className="form-container outer">
        <div className="form-form">
          <div className="form-form-wrap">
            <div className="form-container">
              <div className="form-content">
                <h1 className="">
                  Log In to
                  <div className=" img-content">
                    <img className="w-75 p-5" src={Login_app} />
                  </div>
                </h1>
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  validationSchema={Yup.object().shape({
                    email: Yup.string()
                      .email("Must be a valid email")
                      .max(255)
                      .required("Email is required"),
                    password: Yup.string()
                      .max(255)
                      .required("Password is required"),
                  })}
                  onSubmit={iniciarSesion}
                >
                  {({
                    values,
                    errors,
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    touched,
                  }) => (
                    <form onSubmit={handleSubmit} className="text-left">
                      <div className="form">
                        <div id="email-field" className="field-wrapper input">
                          <label for="email">EMAIL</label>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-user"
                          >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.email && errors.email && (
                            <div className="text-danger">{errors.email}</div>
                          )}
                          {error && (
                            <div className="text-danger">
                              User and password incorrect
                            </div>
                          )}
                        </div>

                        <div
                          id="password-field"
                          className="field-wrapper input mb-2"
                        >
                          <label for="email">PASSWORD</label>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-lock"
                          >
                            <rect
                              x="3"
                              y="11"
                              width="18"
                              height="11"
                              rx="2"
                              ry="2"
                            ></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                          </svg>
                          <input
                            id="password"
                            name="password"
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {error && (
                            <div className="text-danger">
                              User and password incorrect
                            </div>
                          )}
                        </div>
                        <div className="d-sm-flex justify-content-center">
                          <div className="field-wrapper">
                            <button type="submit" className="btn btn-success">
                              Login
                            </button>
                          </div>
                        </div>
                        <div className="division">
                          <span>OR</span>
                        </div>
                        <div class="field-wrapper mb-3">
                          <button
                            onClick={handleGoogleSigin}
                            class="btn social-fb"
                          >
                            <i className="fab fa-google"> </i>
                            <span class="brand-name"> Login with Google</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </Formik>
                <p className="terms-conditions">
                  © 2022 All Rights Reserved. <a href="index.html">CoruApp </a>
                  is a product of Litchiweb.net.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
