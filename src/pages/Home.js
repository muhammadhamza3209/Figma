import React from "react";

import Header from "../compoments/Header";

import { FaCirclePlay } from "react-icons/fa6";

import man from "../assets/man.png";

import gr from "../assets/Group 8.png";

import { LuToggleRight } from "react-icons/lu";

import a from "../assets/c1.png";
import b from "../assets/c2.png";
import c from "../assets/c3.png";

import d from "../assets/c4.png";

import e from "../assets/c5.png";
import f from "../assets/c6.png";

import z from "../assets/c21.png";
import y from "../assets/c22.png";
import x from "../assets/c23.png";
import w from "../assets/c24.png";
import v from "../assets/c25.png";
import logo from "../assets/logo.png";
import cen from "../assets/cen.png";
import { FaPlay } from "react-icons/fa";

import Card3 from "../compoments/Card3";

import Card4 from "../compoments/Card4";
import Card5 from "../compoments/Card5";

import Card6 from "../compoments/Card6";

export default function Home() {
  return (
    <>
      <Header />

      {/* Sec 1  */}

      <div className="container">
        <div className="row">
          <div className=" a col-md-6 col-sm-12">
            <p className="fw-bold fs-2">
              Providing Quality
              <span className="text-success"> Healthcare </span> for a<br></br>{" "}
              Brighter and Healthy Future
            </p>
            <p>
              At our hospital, we are dedicated to providing exceptional medical
              <br></br>
              care to our patients and their families. Our experienced team of
              <br></br>
              medical professionals, cutting-edge technology, and compassionate
              <br></br>
              approach make us a leader in the healthcare industry
            </p>
            <div className="d-flex gap-5 mt-5">
              <button className="btn btn-success px-4 ">appointments</button>
              <button className="d-flex gap-3 border-0">
                <FaCirclePlay className="text-success fs-3" />
                <p className="fw-bold">Watch Video</p>
              </button>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 mt-5">
            <div className="hero-bg position-relative">
              <div>
                <img src={man} className="img-fluid" alt="" />
              </div>
              <div className="position-absolute bottom-0 start-0 mb-5 pb-5">
                <img src={gr} className="img-fluid" alt="" />
              </div>
              <button className="btn rounded-4 position-absolute bottom-50 mb-5 end-0 btn-light">
                <p className="fs-5 py-2  m-0 text-black fw-bold">
                  27/7 <span className="fs-6">Service</span>
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sec i close */}

      {/* Sec 2 start */}

      <div className="container bg-white mt-5 px-5">
        <div className="row">
          <p className="fs-2 fw-bold">Find a doctor</p>
          <div className="col-md-3 col-sm-12 mt-3">
            <input className="form-control " type="text" placeholder="Name" />
          </div>
          <div className="col-md-3 col-sm-12 mt-3">
            <input className="form-control" type="text" placeholder="Spaciey" />
          </div>
          <div className="col-md-3 col-sm-12 text-center mt-3">
            <label class="switch">
              <input type="checkbox" />
              <span class="slider"></span>
            </label>
          </div>
          <div className="col-md-3 col-sm-12 mt-3">
            <button className="btn btn-success px-5">Search</button>
          </div>
        </div>
      </div>

      {/* sec 2 clo */}

      {/* Sec 3 start */}

      <div className="container hr ">
        <p className="text-info fs-2 fw-bold text-center">
          Our results in numbers
        </p>
        <div className="row pt-4">
          <div className="col-md-3">
            <Card3 pr="99 %" tx="Customer satisfaction" />
          </div>
          <div className="col-md-3">
            <Card3 pr="15 K" tx="Online Patients" />
          </div>
          <div className="col-md-3">
            <Card3 pr="25 k" tx="Patients Recovered" />
          </div>

          <div className="col-md-3">
            <Card3 pr="40 %" tx="Company growth" />
          </div>
        </div>
      </div>

      {/* Sec 3 Clo */}

      {/* Sec 4 start */}
      <div className="container hr">
        <p className="text-info text-center fs-2">Services we provide </p>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur<br></br> adipiscing elit semper
          dalar elementum tempus hac tellus<br></br> libero accumsan.{" "}
        </p>

        <div className="row">
          <div className="col-md-4 col-sm-12 mt-3">
            <Card4 im={a} pa="Dental treatments" />
          </div>
          <div className="col-md-4 col-sm-12 mt-3">
            <Card4 im={b} pa="Bones treatments" />
          </div>
          <div className="col-md-4 col-sm-12 mt-3">
            <Card4 im={c} pa="Diagnosis" />
          </div>
        </div>
        {/* row 2 */}
        <div className="row mt-4">
          <div className="col-md-4 col-sm-12 mt-3">
            <Card4 im={d} pa="Cardiology" />
          </div>
          <div className="col-md-4 col-sm-12 mt-3">
            <Card4 im={e} pa="Surgery" />
          </div>
          <div className="col-md-4 col-sm-12 mt-3">
            <Card4 im={f} pa="Eye care" />
          </div>
        </div>
      </div>
      {/* Sec 4 Clo */}

      {/* Sec 5 start */}

      <p className="text-info text-center fs-2 mt-5">Meet our team members </p>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur<br></br> adipiscing elit semper
        dalar elementum tempus hac tellus<br></br> libero accumsan.{" "}
      </p>

      <div className="container hr">
        <div className="row">
          <div className="col-md-4 col-sm-12 mt-3">
            <Card5 z={z} />
          </div>
          <div className="col-md-4 col-sm-12 mt-3">
            <Card5 z={y} />
          </div>
          <div className="col-md-4 col-sm-12 mt-3">
            <Card5 z={x} />
          </div>
        </div>

        {/* row2 */}
        <div className="row mt-2">
          <div className="col-md-4 col-sm-12 mt-3">
            <Card5 z={w} />
          </div>
          <div className="col-md-4 col-sm-12 mt-3">
            <Card5 z={v} />
          </div>
          <div className="col-md-4 col-sm-12 mt-3">
            <Card5 z={z} />
          </div>
        </div>
        {/* row 2 clo */}
      </div>

      {/* Sec 5 Clo */}

      {/* Sec 6 start */}

      <p className="text-info text-center fs-2 mt-5">Testimonial </p>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur<br></br> adipiscing elit semper
        dalar elementum tempus hac tellus<br></br> libero accumsan.{" "}
      </p>

      <div className="container hr">
        <div className="row">
          <div className="col-md-4 col-sm-12 mt-3">
            <Card6 />
          </div>
          <div className="col-md-4 col-sm-12 mt-3">
            <Card6 />
          </div>
          <div className="col-md-4 col-sm-12 mt-3">
            <Card6 />
          </div>
        </div>
      </div>

      {/* Sec 6 clo */}

      {/* Sec 7 start */}
      <p className="text-info mt-5 text-center fs-2">
        Trusted by 10,000+ companies around the world
      </p>
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-sm-12 text-center">
            <span className="fw-bold fs-2">Google</span>
          </div>
          <div className="col-md-2 col-sm-12 text-center">
            <span className="fw-bold fs-2">Facebook</span>
          </div>
          <div className="col-md-2 col-sm-12 text-center">
            <div className="d-flex gap-2 text-center">
              <FaPlay className="text-danger fs-2 mt-2 text-center " />
              <span className="fw-bold fs-2 text-center">Youtube</span>
            </div>
          </div>
          <div className="col-md-2 col-sm-12 text-center">
            <span className="fw-bold fs-2">Prients</span>
          </div>
          <div className="col-md-2 col-sm-12 text-center">
            <span className="fw-bold fs-2">Sellers</span>
          </div>
          <div className="col-md-2 col-sm-12 text-center">
            <span className="fw-bold fs-2">Update</span>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col text-center">
            <img src={cen} alt="" />
          </div>
        </div>
      </div>

      {/* Sec 7 clo */}

      {/* Sec 8 start */}

      <p className="text-center text-info mt-5">Subscribe to our newsletter</p>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center gap-3">
            <div className="">
              <input
                className="box p-2 rounded-3"
                type="text"
                placeholder="Enter Your Email "
              />
            </div>
            <div>
              <button className="btn btn-success">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      {/* Sec 8 clos */}

      {/* Sec Footer Start */}

      <div className="back mt-5">
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-3 col-sm-12 mt-4 text-center">
              <div className="d-flex fw-bold gap-2">
                <img src={logo} alt="" />
                <p>
                  <span>Health</span>care
                </p>
              </div>
              <p>
                Copyright © 2022 BRIX Templates<br></br> | All Rights Reserved{" "}
              </p>
            </div>
            <div className="col-md-2 col-sm-12 mt-3 text-center">
              <p>Company</p>
              <p className="opacity-50">Features</p>
              <p className="opacity-50">Case studies</p>
              <p className="opacity-50">Pricing</p>
              <p className="opacity-50">Updates</p>
              <p className="opacity-50">Reviews</p>
            </div>
            <div className="col-md-2 col-sm-12 mt-3 text-center">
              <p>Support</p>
              <p className="opacity-50">Features</p>
              <p className="opacity-50">Case studies</p>
              <p className="opacity-50">Pricing</p>
              <p className="opacity-50">Updates</p>
              <p className="opacity-50">Reviews</p>
            </div>
            <div className="col-md-2 col-sm-12 mt-3 text-center">
              <p>Product</p>
              <p className="opacity-50">Features</p>
              <p className="opacity-50">Case studies</p>
              <p className="opacity-50">Pricing</p>
              <p className="opacity-50">Updates</p>
              <p className="opacity-50">Reviews</p>
            </div>
            <div className="col-md-3 col-sm-12 mt-3 text-center">
              <p>Follow us</p>
              <p className="opacity-50">Features</p>
              <p className="opacity-50">Case studies</p>
              <p className="opacity-50">Pricing</p>
              <p className="opacity-50">Updates</p>
              <p className="opacity-50">Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
