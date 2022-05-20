import React from "react";

export default function Loader() {
  return (
    <div className="w-auto h-auto d-flex justify-content-center align-content-center align-items-center my-auto mx-auto pt-5 pb-5">
      <div className="d-flex justify-content-between mx-5 mt-3 mb-5">
        <div className="spinner-border text-success align-self-center loader-lg">
          Loading...
        </div>
      </div>
    </div>
  );
}
