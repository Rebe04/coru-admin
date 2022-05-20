import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { useAuth } from "../hooks/useAuth";

export default function ContentWrapper(props) {
  const { loading } = useAuth();

  if (loading) return <h1>loading</h1>;
  return (
    <>
      {/* <!--  HEADER  --> */}
      <Header />
      {/* <!--  END HEADER  --> */}

      {/* <!--  BEGIN MAIN CONTAINER  --> */}
      <div className="main-container" id="container">
        <div className="overlay"></div>
        <div className="search-overlay"></div>

        <NavBar />

        {/* <!--  BEGIN CONTENT PART  --> */}
        <div id="content" className="main-content">
          <div className="layout-px-spacing">
            <div className="page-header"></div>

            <div className="row layout-px-spacing">{props.children}</div>

            <Footer />
          </div>
        </div>
        {/* <!--  END CONTENT PART  --> */}
      </div>
    </>
  );
}
