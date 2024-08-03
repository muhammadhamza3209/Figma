import React from "react";
import man from "../assets/Image man.png";

import icon from "../assets/Icon.png";

import pho from "../assets/pho.png";

export default function Card1() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="fs-3 fw-bold">Customers Says</p>
            <div className="bg-light py-3 px-5">
              <div className=" d-flex justify-content-around ">
                <div className="d-flex gap-3">
                  <img src={man} alt="" />
                  <p>
                    Nancy luther
                    <br />
                    NewYork
                  </p>
                </div>
                <div>
                  <img src={icon} alt="" />
                </div>
              </div>
              <p className=" mt-4">
                Pellentesque vehicula eros neque, maximus mattis est sagittis
                facilisi.”In sed pretium metus”. Ppretium id urna sit amet
                tincidunt. Lorem ipsum dolor sit amet,tristique. Duis cursus,in
                elementum tristique
              </p>
            </div>

            <div className="bg-warning px-5 py-2 mt-4">
              <button className="btn btn-light mt-3">Any question</button>
              <p className="fs-5 fw-bold mt-1">
                99.9% Customer Satisfation Based
              </p>
              <p>
                If you have any questions or need help <br></br>contact with our
                team, or call
              </p>
              <div className="d-flex gap-2">
                <img src={pho} alt="" />
                <p>
                  <p>(003) 123 456 7890</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
