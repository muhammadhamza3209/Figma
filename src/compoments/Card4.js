import React from "react";

import { VscArrowSmallRight } from "react-icons/vsc";

export default function Card4(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="bg-white px-3 py-3 rounded-2">
              <img className="img-fluid" src={props.im} alt="" />
              <p className="text-info fs-4 pt-2">{props.pa}</p>
              <p>
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est velitolm.
              </p>
              <div className="d-flex gap-2">
                <p className="text-info">Learn more</p>
                <VscArrowSmallRight className="text-info fs-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
