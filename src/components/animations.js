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

import AOS from "aos";
import "aos/dist/aos.css";

const Animations = () => {
  AOS.init();
  const clickHandleMotor = () => {
    document.getElementById("plant").classList.remove("plantIdle");
    document.getElementById("plant").classList.add("plantActive");
    document.getElementById("animActiveText1").classList.add("textActive");
    document.getElementById("animActiveText2").classList.add("textActive");
    document.getElementById("animActiveText1").classList.remove("textInactive");
    document.getElementById("animActiveText2").classList.remove("textInactive");
    document.getElementById("animActiveText3").classList.remove("textActive");
    document.getElementById("animActiveText3").classList.add("textInactive");
    document.getElementById("animActiveText4").classList.remove("textActive");
    document.getElementById("animActiveText4").classList.add("textInactive");
    setTimeout(function () {
      document.getElementById("plant").classList.remove("plantActive");
      document.getElementById("plant").classList.add("plantIdle");
      document.getElementById("animActiveText1").classList.remove("textActive");
      document.getElementById("animActiveText2").classList.remove("textActive");
      document.getElementById("animActiveText1").classList.add("textInactive");
      document.getElementById("animActiveText2").classList.add("textInactive");
      document.getElementById("animActiveText3").classList.add("textActive");
      document
        .getElementById("animActiveText3")
        .classList.remove("textInactive");
      document.getElementById("animActiveText4").classList.add("textActive");
      document
        .getElementById("animActiveText4")
        .classList.remove("textInactive");
    }, 1000);
  };
  const clickHandle = () => {
    if (!document.getElementById("cup").classList.contains("fallover")) {
      document.getElementById("cup").classList.add("fallover");
      document.getElementById("water").classList.add("water");
      document.getElementById("dryText").classList.remove("textActive");
      document.getElementById("dryText").classList.add("textInactive");
      document.getElementById("falloverText").classList.remove("textInactive");
      document.getElementById("falloverText").classList.add("textActive");
      setTimeout(function () {
        document.getElementById("falloverText").classList.remove("textActive");
        document.getElementById("falloverText").classList.add("textInactive");
        document.getElementById("waterText").classList.remove("textInactive");
        document.getElementById("waterText").classList.add("textActive");
      }, 1000);
    }
  };
  const setTable = () => {
    document.getElementById("cup").classList.remove("fallover");
    document.getElementById("water").classList.remove("water");
    document.getElementById("dryText").classList.add("textActive");
    document.getElementById("dryText").classList.remove("textInactive");
    document.getElementById("falloverText").classList.add("textInactive");
    document.getElementById("falloverText").classList.remove("textActive");
    document.getElementById("waterText").classList.add("textInactive");
    document.getElementById("waterText").classList.remove("textActive");
  };
  return (
    <>
      <div
        className="animationContainer"
        data-aos="fade-right"
        data-aos-offset="-400"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <div
          style={{ maxHeight: "300px", overflowY: "hidden" }}
          className="animatedText"
        >
          <p className="scrollingText" style={{ paddingTop: "60%" }}>
            {`.motoranimationcontainer {
  display: block;
  position: relative;
  height: 300px;
  min-width: 300px;
  align-items: center;
  .motoranimbackground {
    position: relative;
    background: url("./assets/motorbike_background.png") repeat 0 0;
    background-size: cover;
    animation: slide 3s linear infinite;
    height: 300px;
    width: 300px;
    .edgeblurleft {
      position: absolute;
      left: 0px;
      height: 300px;
      width: 150px;
    }
    .edgeblurright {
      position: absolute;
      transform: scaleX(-1);
      right: 0px;
      height: 300px;
      width: 150px;
    }
  }
  .motoranim {
    position: absolute;
    height: 100%;
    width: 100%;
  }
  .wheel {
    animation: rotating 0.5s linear infinite;
  }
  .driver {
    animation: driver 0.5s cubic-bezier(0.31, 0.44, 0.445, 1.65) infinite;
  }
}`}
            <span id="animActiveText3" className="textActive">{`

.plantIdle {
  animation: plant 0.5s cubic-bezier(0.33333, 0.66667, 0.66667, 1) infinite;
}`}</span>
            <span id="animActiveText1" className="textInactive">
              {`
.plantActive {
  transform-origin: 50% 55% !important;
  animation: plantFlip 1s linear infinite;
}`}
            </span>
            {`
.kevin-motor {
  background-color: #f8fcff;
  background-color: #f1f9fd;
  border-top: 1px solid #ecf1f5;
}
.bonus-features-container {
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  .motorbike {
    width: 350px;
    filter: contrast(105%);
    }
  }
}

//Motorbike Animation keyframes

@keyframes slide {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -300px 0;
  }
}

@keyframes rotating {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}`}
            <span id="animActiveText4" className="textActive">{`

@keyframes plant {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-5deg) translate(5px, -5px);
  }
  50% {
    transform: rotate(10deg) translate(-5px, -5px);
  }
  75% {
    transform: rotate(-7deg) translate(-7px, -8px);
  }
  100% {
    transform: rotate(0deg);
  }
}`}</span>
            {`
@keyframes driver {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-3deg) translate(2px, -1px);
  }
  50% {
    transform: rotate(5deg) translate(-3px, -2px);
  }
  75% {
    transform: rotate(-3deg) translate(-4px, -3px);
  }
  100% {
    transform: rotate(0deg);
  }
}`}
            <span id="animActiveText2" className="textInactive">
              {`
@keyframes plantFlip {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
    top: -10%;
  }
  50% {
    transform: rotate(180deg);
    top: -20%;
  }
  75% {
    transform: rotate(270deg);
    top: -10%;
  }
  100% {
    transform: rotate(359deg);
  }
}`}
            </span>
            {`
//Motorbike Animation Media Queries

@media screen and (max-width: 600px) {
  .bonus-features-container {
    flex-direction: column;

    .bonus-features-CTA {
      padding: 0 5%;
    }
    .motorbike {
      width: 250px;
    }
    .bonus-features-CTA {
      margin-left: 0;
      .fonus-features-title {
        font-size: 1.2rem;
      }
      .bonus-features-description {
        font-size: 1rem;
      }
      .sign-up-CTA {
        font-size: 1.15rem;
        width: 50%;
      }
    }
  }
}`}
          </p>
        </div>
        <div className="kevinmotor" onClick={() => clickHandleMotor()}>
          <div className="bonus-features-container">
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
      </div>
      <div
        className="animationContainer"
        className="animationContainer"
        data-aos="fade"
        data-aos-offset="-400"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <div
          style={{ maxHeight: "500px", overflowY: "hidden" }}
          className="animatedText"
        >
          <p
            className="scrollingText"
            style={{ paddingTop: "210%" }}
          >{`//Lamp Animation

//Lamp Animation Containers

#lampAnim {
  overflow: hidden;
  height: 500px;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

#oval {
  position: relative;
  top: 50px;
  width: 100px;
  height: 50px;
  background: #434c0b;
  border-radius: 100px / 50px;
  margin: auto;
}

#circle {
  position: relative;
  top: 25px;
  width: 30px;
  height: 30px;
  background: yellow;
  border-radius: 50px;
  margin: auto;
}

#trapezoid {
  position: relative;
  top: 25px;
  border-bottom: 500px solid lightyellow;
  border-left: 200px solid transparent;
  border-right: 200px solid transparent;
  height: 0;
  width: auto;
  animation: flicker infinite linear 5s;
}

.lamp {
  z-index: 2;
  transform-origin: top center;
  animation: swing 2s infinite alternate ease-in-out;
}

//Lamp Animation keyframes

@keyframes caret {
  50% {
    border-color: transparent;
  }
}

@keyframes swing {
  from {
    transform: rotate(-15deg);
  }
  to {
    transform: rotate(15deg);
  }
}

@keyframes flicker {
  0% {
    opacity: 0;
  }
  1% {
    opacity: 50%;
  }
  10% {
    opacity: 50%;
  }
  11% {
    opacity: 0;
  }
  13% {
    opacity: 50%;
  }
  16% {
    opacity: 50%;
  }
  17% {
    opacity: 0;
  }
  19% {
    opacity: 50%;
  }
  30% {
    opacity: 50%;
  }
  31% {
    opacity: 0;
  }
  32% {
    opacity: 50%;
  }
  100% {
    opacity: 50%;
  }
}`}</p>
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
              zIndex: "1",
            }}
          >
            <div className="tableset" style={{ position: "relative" }}>
              {/* the table set */}
              {/* the table */}
              <img
                src={table}
                style={{
                  zIndex: "1",
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
                  zIndex: "3",
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
                  zIndex: "2",
                  transformOrigin: "200px 200px",
                }}
              />
              {/* the resume */}
              <img
                src={resume}
                style={{
                  zIndex: "1",
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
        <div className="animatedText">
          <p>
            //Lamp Animation transforms
            <span id="dryText" className="textActive">
              {`

.dry {
  transform: scale(0);
  opacity: 0;
}`}
            </span>
            <span id="falloverText" className="textInactive">
              {`
.fallover {
  transform: rotate(90deg);
  transition: transform 1s ease-in;
}`}
            </span>
            <span id="waterText" className="textInactive">
              {`
.water {
  transform: scale(1);
  opacity: 0.5;
  transition: transform 1s 1s, opacity 1s 1s;
}`}
            </span>
          </p>
          <button onClick={() => setTable()} className="navButton">
            Set Table
          </button>
        </div>
      </div>
    </>
  );
};

export default Animations;
