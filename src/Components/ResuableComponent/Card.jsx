import React from "react";

export default function Card() {
  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem" }}>
        <img
          src="https://source.unsplash.com/random/300×300?food"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">Some random text</p>
          <div className="container w-100">
            <select className="m-2 h-100 bg-sucess">
              {Array.from(Array(3), (event, index) => {
                return (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-sucess">
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>
            <div className="d-inline" style={{ color: "blue" }}>
              Total: $0.00{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
