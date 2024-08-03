import React from "react";

import y from "../assets/c31.png";

export default function Card6() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="bg-white px-4 py-3 rounded-2">
              <img className="img-fluid" src={y} alt="" />
              <p className="fw-bold mt-3">“An amazing service”</p>
              <p>
                Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus
                a nunc mauris scelerisque sed egestas.
              </p>
              <p>
                <span className="text-info fw-bold">John Carter</span>
                <br></br>CEO at Google
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
