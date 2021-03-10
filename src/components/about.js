import React, { useState } from "react";
import $ from "jquery";

const About = () => {
  const [theTop, setTheTop] = useState(true);
  window.onscroll = function () {
    if (window.pageYOffset > 10) {
      setTheTop(false);
    } else if (window.pageYOffset <= 10) {
      setTheTop(true);
    }
  };
  const scrollDown = () => {
    $("html, body").animate(
      {
        scrollTop: $("#scrollPoint").offset().top - 100,
      },
      3000
    );
  };
  return (
    <>
      <div className="bioContainer">
        <p>
          Hello! My name is Daniel Killian Briksza and I'm a Web Developer. What
          does that mean? Well, I'm kind of a nerd who loves problem solving
          with a penchant for the little details. I love math and art, but I
          wouldn't call myself an expert in either, though they are a great help
          in my line of work. My other interests include gardening, tinkering
          with electronics, and video games (started out making games, but I
          haven't kept up my Google Play Store accounts). I get the same joy
          from working with my hands or from slapping some code on the keyboard.
          I'm very personable and always down for a chat, check out my contact
          info to reach out!
        </p>
      </div>
      {theTop && (
        <div
          style={{ top: "5vh", position: "relative", width: "25px" }}
          className="scrollCTA"
          onClick={() => scrollDown()}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-down"
            class="svg-inline--fa fa-chevron-down fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="white"
              d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
            ></path>
          </svg>
          <svg
            style={{ top: "-15px", position: "relative" }}
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-down"
            class="svg-inline--fa fa-chevron-down fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="white"
              d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
            ></path>
          </svg>
        </div>
      )}
    </>
  );
};

export default About;
