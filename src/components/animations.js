import React from "react";

import edgeblur from "../assets/edge_blur.png";
import backwheel from "../assets/motorbike_back_wheel.png";
import frontwheel from "../assets/motorbike_front_wheel.png";
import driver from "../assets/motorbike_driver.png";
import plant from "../assets/motorbike_plant.png";

import table from "../assets/table.png";
import resume from "../assets/resume.png";
import cup from "../assets/cup.png";
import water from "../assets/water.png";

const Animations = () => {
  const clickHandleMotor = () => {
    document.getElementById("plant").classList.remove("plantIdle");
    document.getElementById("plant").classList.add("plantActive");
    setTimeout(function () {
      document.getElementById("plant").classList.remove("plantActive");
      document.getElementById("plant").classList.add("plantIdle");
    }, 1000);
  };
  const clickHandle = () => {
    document.getElementById("cup").classList.add("fallover");
    document.getElementById("water").classList.add("water");
  };
  return (
    <div id="animationContainer">
      <div className="kevinmotor" onClick={() => clickHandleMotor()}>
        <div
          className="bonus-features-container"
          // data-aos="fade-right"
          // data-aos-offset="100"
          // // data-aos-delay="50"
          // data-aos-duration="800"
          // data-aos-easing="ease-in-out"
          // data-aos-mirror="true"
          // data-aos-once="true"
        >
          <div className="motoranimationcontainer">
            <div className="motoranimbackground">
              <img className="edgeblurleft" src={edgeblur} />
              <img className="edgeblurright" src={edgeblur} />
            </div>
            <div className="moving">
              <img
                className="motoranim wheel"
                src={backwheel}
                alt="backwheel"
                style={{ top: "90px", right: "55px" }}
              />
              <img
                className="motoranim wheel"
                src={frontwheel}
                alt="frontwheel"
                style={{ top: "90px", left: "67px" }}
              />
              <img
                className="motoranim driver"
                src={driver}
                alt="driver"
                style={{ top: "20px" }}
              />
              <img
                className="motoranim plant plantIdle"
                id="plant"
                src={plant}
                alt="plant"
                style={{ top: "27px", right: "60px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div id="lampAnim" onClick={() => clickHandle()}>
        <div className="lamp">
          {/* the light */}
          <div id="oval">
            <div id="circle"></div>
          </div>
          <div id="trapezoid"></div>
        </div>
        <div
          style={{
            position: "relative",
            bottom: "-100px",
            right: "200px",
            zIndex: "-1",
          }}
        >
          <div className="tableset" style={{ position: "relative" }}>
            {/* the table set */}
            {/* the table */}
            <img
              src={table}
              style={{
                position: "absolute",
                top: "-250px",
                left: "-250px",
                height: "500px",
                width: "500px",
              }}
            />
            {/* the cup */}
            <img
              id="cup"
              src={cup}
              style={{
                position: "absolute",
                top: "-250px",
                left: "-250px",
                height: "500px",
                width: "500px",
                transformOrigin: "200px 200px",
                zIndex: "10",
              }}
            />
            {/* the water */}
            <img
              id="water"
              className="dry"
              src={water}
              style={{
                position: "absolute",
                top: "-260px",
                left: "-220px",
                height: "500px",
                width: "500px",
                zIndex: "5",
                transformOrigin: "200px 200px",
              }}
            />
            {/* the resume */}
            <img
              src={resume}
              style={{
                position: "absolute",
                top: "-250px",
                left: "-250px",
                height: "500px",
                width: "500px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animations;
