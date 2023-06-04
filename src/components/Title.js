/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";

export default function Title({ name, title }) {
  return (
    <main className="row">
      <div className="col-10 mx-auto text-center" style={{fontFamily:"poppins-extrabold"}}>
        <strong className="font-weight-bold text-capitalize fs-1">
          {name} {title}
        </strong>
      </div>
    </main>
  );
}
