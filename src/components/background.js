import React from "react";

import { Parallax } from "react-parallax";

import MediaQuery from "react-responsive";

import MountainPink from "../assets/mountainPink.png";
import MountainPurple from "../assets/mountainPurple.png";
import MountainBlue from "../assets/mountainBlue.png";
import MountainDarkBlue from "../assets/mountainDarkBlue.png";

import Stars from "../assets/spaceStars.png";
import StarsReverse from "../assets/spaceStarsReverse.png";

const BackgroundJS = () => {
  return (
    <>
      <MediaQuery maxWidth={1200}>
        <Parallax
          id="background"
          renderLayer={(percentage) => (
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                bottom: `${
                  percentage * percentage * percentage * percentage * 800 - 800
                }px`,
              }}
            >
              <img className="parallaxImages" src={MountainPink} />
            </div>
          )}
        >
          <Parallax
            renderLayer={(percentage) => (
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  bottom: `${
                    percentage * percentage * percentage * 700 - 700
                  }px`,
                }}
              >
                <img className="parallaxImages" src={MountainPurple} />
              </div>
            )}
          >
            <Parallax
              renderLayer={(percentage) => (
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    bottom: `${percentage * percentage * 600 - 600}px`,
                  }}
                >
                  <img className="parallaxImages" src={MountainBlue} />
                  <img className="parallaxImages space" src={StarsReverse} />
                </div>
              )}
            >
              <Parallax
                renderLayer={(percentage) => (
                  <div
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      bottom: `${percentage * 500 - 500}px`,
                    }}
                  >
                    <img className="parallaxImages" src={MountainDarkBlue} />
                    <img className="parallaxImages space" src={Stars} />
                  </div>
                )}
              ></Parallax>
            </Parallax>
          </Parallax>
        </Parallax>
      </MediaQuery>
      <MediaQuery minWidth={1201}>
        <Parallax
          id="background"
          renderLayer={(percentage) => (
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                bottom: `${
                  percentage * percentage * percentage * percentage * 800 - 900
                }px`,
              }}
            >
              <img className="parallaxImages" src={MountainPink} />
            </div>
          )}
        >
          <Parallax
            renderLayer={(percentage) => (
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  bottom: `${
                    percentage * percentage * percentage * 700 - 800
                  }px`,
                }}
              >
                <img className="parallaxImages" src={MountainPurple} />
              </div>
            )}
          >
            <Parallax
              renderLayer={(percentage) => (
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    bottom: `${percentage * percentage * 600 - 700}px`,
                  }}
                >
                  <img className="parallaxImages" src={MountainBlue} />
                  <img className="parallaxImages space" src={StarsReverse} />
                </div>
              )}
            >
              <Parallax
                renderLayer={(percentage) => (
                  <div
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      bottom: `${percentage * 500 - 600}px`,
                    }}
                  >
                    <img className="parallaxImages" src={MountainDarkBlue} />
                    <img className="parallaxImages space" src={Stars} />
                  </div>
                )}
              ></Parallax>
            </Parallax>
          </Parallax>
        </Parallax>
      </MediaQuery>
    </>
  );
};

export default BackgroundJS;
