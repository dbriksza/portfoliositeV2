import React from "react";

import { Parallax, Background } from "react-parallax";

import MountainPink from "../assets/mountainPink.png";
import MountainPurple from "../assets/mountainPurple.png";
import MountainBlue from "../assets/mountainBlue.png";
import MountainDarkBlue from "../assets/mountainDarkBlue.png";

// const Background = () => {
//   return (
//     <div className="parallax">
//       {/* <div className="bgElement"></div> */}
//       {/* <img src={MountainDarkBlue} className="backgroundIMG" />
//       <img src={MountainBlue} className="backgroundIMG" />
//       <img src={MountainPurple} className="backgroundIMG" />
//       <img src={MountainPink} className="backgroundIMG" /> */}
//       <div className="parallax__layer parallax__layer__0">
//         <img src={MountainDarkBlue} />
//       </div>
//       <div className="parallax__layer parallax__layer__1">
//         <img src={MountainBlue} />
//       </div>
//       <div className="parallax__layer parallax__layer__2">
//         <img src={MountainPurple} />
//       </div>
//       <div className="parallax__layer parallax__layer__3">
//         <img src={MountainPink} />
//       </div>
//       <div className="parallax__cover"></div>
//     </div>
//   );
// };

const BackgroundJS = () => {
  return (
    // <div className="parallax">
    //   <div className="bgElement"></div>
    //   <img src={MountainDarkBlue} className="backgroundIMG" />
    //   <img src={MountainBlue} className="backgroundIMG" />
    //   <img src={MountainPurple} className="backgroundIMG" />
    //   <img src={MountainPink} className="backgroundIMG" />
    //   <div className="parallax__layer parallax__layer__0">
    //     <img src={MountainDarkBlue} />
    //   </div>
    //   <div className="parallax__layer parallax__layer__1">
    //     <img src={MountainBlue} />
    //   </div>
    //   <div className="parallax__layer parallax__layer__2">
    //     <img src={MountainPurple} />
    //   </div>
    //   <div className="parallax__layer parallax__layer__3">
    //     <img src={MountainPink} />
    //   </div>
    //   <div className="parallax__cover"></div>
    // </div>
    <Parallax strength={300} style={{ height: "100%", width: "100%" }}>
      <Background className="custom-bg">
        <img src="http://www.fillmurray.com/500/320" alt="fill murray" />
      </Background>
    </Parallax>
  );
};

export default BackgroundJS;
