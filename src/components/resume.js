import React, { useEffect } from "react";

const Resume = () => {
  //   let Fuck = null;
  useEffect(() => {
    document.getElementById("yert").style.height = document.getElementById(
      "yert"
    ).contentDocument.body.scrollHeight;
  }, []);
  return (
    <iframe
      //   style={{ height: Fuck }}
      id="yert"
      src="https://docs.google.com/document/d/11df3ARoyKy3odC0SnxwVZfVtHe4sWsLxjCrCG91utzs/preview"
    ></iframe>
  );
};
export default Resume;
