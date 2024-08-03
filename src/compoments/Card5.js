import React from "react";

import { TiSocialFacebook } from "react-icons/ti";

export default function Card5(props) {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col text-center">
            <div className="bg-white py-4 rounded-2 ">
              <img className="img-fluid " src={props.z} alt="" />
              <p className=" text-info fw-bold mt-2">John Carter</p>
              <p>CEO & Co-Founder</p>
              <p>
                Lorem ipsum dolor sit amet consecte adipiscing elit amet
                hendrerit pretium nulla sed enim iaculis mi.{" "}
              </p>
              <div className="d-flex justify-content-center gap-4">
                <div className="bg-secondary h-25">
                  <TiSocialFacebook className="text-info fs-3" />
                </div>
                <div className="bg-secondary h-25">
                  <TiSocialFacebook className="text-info fs-3" />
                </div>
                <div className="bg-secondary h-25">
                  <TiSocialFacebook className="text-info fs-3" />
                </div>
                <div className="bg-secondary rounded-2 h-25">
                  <TiSocialFacebook className="text-info fs-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
