import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import ContentWrapper from "../../layout/ContentWrapper";
import { Formik } from "formik";
import * as Yup from "yup";

export default function CreateUser() {
  const navigate = useNavigate();
  const [error, setError] = useState();

  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "",
    displayName: "",
  });

  const { signUp } = useAuth();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const createUser = async (credenciales) => {
    try {
      setUser(credenciales);
      await signUp(
        credenciales.email,
        credenciales.password,
        credenciales.role,
        credenciales.displayName
      );
      navigate("/users", { replace: true });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <ContentWrapper>
      <div className="form w-100 mx-auto">
        <div className="form-container">
          <div className="form-form">
            <div className="form-form-wrap">
              <div className="form-container">
                <div className="form-content">
                  <h1 className="">
                    Create user
                    <span className="brand-name"> Coru App</span>
                  </h1>
                  <Formik
                    initialValues={{
                      displayName: "",
                      email: "",
                      password: "",
                      role: "",
                    }}
                    validationSchema={Yup.object().shape({
                      displayName: Yup.string()
                        .max(255)
                        .required("Username is required"),
                      email: Yup.string()
                        .email("Must be a valid email")
                        .max(255)
                        .required("Email is required"),
                      password: Yup.string()
                        .max(255)
                        .required("Password is required"),
                      role: Yup.string().required("Role is required"),
                    })}
                    onSubmit={createUser}
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
                          <div
                            id="username-field"
                            className="field-wrapper input"
                          >
                            <label htmlFor="email">EMAIL</label>
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
                              className="feather feather-at-sign"
                            >
                              <circle cx="12" cy="12" r="4"></circle>
                              <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
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
                              <div className="text-danger">{error}</div>
                            )}
                          </div>
                          <div
                            id="username-field"
                            className="field-wrapper input"
                          >
                            <label htmlFor="displayName">USER NAME</label>
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
                              id="displayName"
                              name="displayName"
                              type="text"
                              className="form-control"
                              placeholder="User Name"
                              value={values.displayName}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {touched.displayName && errors.displayName && (
                              <div className="text-danger">
                                {errors.displayName}
                              </div>
                            )}
                            {error && (
                              <div className="text-danger">{error}</div>
                            )}
                          </div>
                          <div
                            id="password-field"
                            className="field-wrapper input mb-2"
                          >
                            <label htmlFor="password">PASSWORD</label>
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
                            {touched.password && errors.password && (
                              <div className="text-danger">
                                {errors.password}
                              </div>
                            )}
                            {error && (
                              <div className="text-danger">{error}</div>
                            )}
                          </div>
                          <div
                            id="role-field"
                            className="field-wrapper input mb-2"
                          >
                            <label htmlFor="role">ROLE</label>
                            <select
                              id="role"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className="form-control basic"
                            >
                              <option value="admin">Administrator</option>
                              <option value="standar">Standard User</option>
                            </select>
                            {error && (
                              <div className="text-danger">{error}</div>
                            )}
                            {touched.role && errors.role && (
                              <div className="text-danger">{errors.role}</div>
                            )}
                          </div>
                          <div className="d-sm-flex justify-content-center">
                            <div className="field-wrapper">
                              <button type="submit" className="btn btn-success">
                                Register
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    )}
                  </Formik>
                  <p className="terms-conditions">
                    © 2022 All Rights Reserved.{" "}
                    <a href="index.html">CoruApp </a>
                    is a product of Litchiweb.net.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );

  // <form onSubmit={handleSubmit}>
  //   <label htmlhtmlFor="email"></label>
  //   <input
  //     type="text"
  //     name="email"
  //     placeholder="email"
  //     id="email"
  //     onChange={handleChange}
  //   />
  //   <label htmlhtmlFor="password"></label>
  //   <input
  //     type="password"
  //     name="password"
  //     placeholder="password"
  //     id="password"
  //     onChange={handleChange}
  //   />
  //   <button>register</button>
  // </form>
}
