import React, { useState } from "react";
// import {button} from "react-router-dom";
import Modal from "./modal/modal";
import useModal from "./modal/useModal";
import Resume from "./resume";
import Projects from "./projects";
import Contact from "./contact";
import "./modal/modal.css";

const NavBar = () => {
  const { isShowing, toggle } = useModal();
  const [modalState, setModalState] = useState();

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
          <a href="#projectContainer">
            <button className="navButton" id="projectsButton">
              Projects
            </button>
          </a>
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
