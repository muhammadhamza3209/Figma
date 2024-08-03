import React from "react";

export default function Card3(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <p className="text-info fs-2 fw-bold">{props.pr}</p>
            <p>{props.tx}</p>
          </div>
        </div>
      </div>
    </>
  );
}
