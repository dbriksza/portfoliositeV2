import React from "react";
// import Email from "./email";
import GitLogo from "../assets/github.png";
import LinkedInLogo from "../assets/LinkedIn.png";
import TwitterLogo from "../assets/twitter.png";
import BioPic from "../assets/bioPic.jpg";

const Contact = () => {
  const openInNewTab = (url) => {
    var win = window.open(url, "_blank");
    win.focus();
  };
  return (
    <div className="contactLinks">
      {/* <Email /> */}
      <div className="bio">
        <img src={BioPic} style={{ padding: "10px", borderRadius: "3px" }} />
        <p>
          Daniel is a full-stack web developer who studied at Lambda School. As
          an outgoing and studious individual, Daniel is a great team player who
          knows when to take the initiative. Diverse interests ranging from
          gardening to animation give Daniel a wide range of skills useful in
          any industry. Daniel is looking to test his skills and abilities in
          the tech industry, and make the world a better place.
        </p>
      </div>
      <div className="contactButtons">
        <button
          className="contactButton"
          onClick={() => openInNewTab("https://github.com/dbriksza")}
        >
          <img src={GitLogo} style={{ borderRadius: "3px", height: "100%" }} />
        </button>
        <button
          className="contactButton"
          onClick={() => openInNewTab("https://twitter.com/BrikszaDaniel")}
        >
          <img
            src={TwitterLogo}
            style={{ borderRadius: "3px", height: "100%" }}
          />
        </button>
        <button
          className="contactButton"
          onClick={() =>
            openInNewTab(
              "https://www.linkedin.com/in/daniel-briksza-23a331191/"
            )
          }
        >
          <img
            src={LinkedInLogo}
            style={{ borderRadius: "3px", height: "100%" }}
          />
        </button>
      </div>
      <button
        className="navButton"
        onClick={() => {
          navigator.clipboard.writeText("dbriksza@gmail.com");
        }}
      >
        Copy my email to clipboard (dbriksza@gmail.com)
      </button>
    </div>
  );
};

export default Contact;