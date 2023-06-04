import React from "react"
// import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  // const error = useRouteError();
  // console.error(error);

  return (
    <div className="container" style={{ fontFamily: "poppins-mediumitalic" }}>
      <div className="row">
        <div className="col-10 text-center mx-auto pt-5">
          <h1>404</h1>
          <h2>Error</h2>
          <h3>page not found</h3>
          <h5>
            the requested url
            <span className="text-danger"> {this.props.location.pathname}</span>
            was not ound
          </h5>
        </div>
      </div>
    </div>
  );
}
