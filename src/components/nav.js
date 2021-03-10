import React, { useState } from "react";
// import {button} from "react-router-dom";
import Modal from "./modal/modal";
import useModal from "./modal/useModal";
import Resume from "./resume";
// import Projects from "./projects";
import Contact from "./contact";
import "./modal/modal.css";

import $ from "jquery";

const NavBar = () => {
  const { isShowing, toggle } = useModal();
  const [modalState, setModalState] = useState();

  const scrollDown = () => {
    $("html, body").animate(
      {
        scrollTop: $("#projectContainer").offset().top - 100,
      },
      2000
    );
  };

  return (
    <>
      <Modal isShowing={isShowing} hide={toggle} component={modalState} />
      <div>
        <nav>
          <button
            className="navButton"
            id="resumeButton"
            onClick={() => (setModalState(<Resume />), toggle())}
          >
            Resume
          </button>
          <button
            className="navButton"
            id="projectsButton"
            onClick={() => scrollDown()}
          >
            Projects
          </button>
          <button
            className="navButton"
            id="contactButton"
            onClick={() => (setModalState(<Contact />), toggle())}
          >
            Contact
          </button>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
