import React from "react";

export default function Card2() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="fw-bold fs-4">Appointment Form</p>
            <div className="bg-light px-3 py-4 mt-2">
              <input className="w-100 p-3 bor" type="text" placeholder="Name" />

              <input
                className="w-100 mt-2 p-3 bor"
                type="text"
                placeholder="Email"
              />

              <input
                className="w-100 mt-2 p-3 bor"
                type="text"
                placeholder="Phone"
              />

              <input
                className="w-100 mt-2  p-3 bor "
                type="text"
                placeholder="Date"
              />

              <textarea
                rows={4}
                className="w-100 mt-2 p-2 bor"
                placeholder="Servicese Disprection"
              ></textarea>
              <div className="text-center">
                <button className="mt-3 bg-warning w-100 py-2 border-0">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
