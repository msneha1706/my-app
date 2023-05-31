import React from "react";
import "./Nabvar.css";

function Navbar() {
  return (
    <div className="body" >
      <div className="img">
        <img src="https://thumbs.dreamstime.com/b/beautiful-girl-studio-high-quality-photos-advertising-best-you-more-photos-i-have-portfolio-girl-105958626.jpg" />
        <h1 style={{ color: "#ff004f" }}>Sneha</h1>
      </div>

      <div className="about">
        <h1 style={{ textAlign: "center" }}>
          SOME WORDS <span style={{ color: "#ff004f" }}>ABOUT ME</span>
        </h1>
        <h2 style={{ color: "#ff004f" }}>About</h2>
        <p>
          {" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I
          am a Fourth year undergraduate student of the Department of Computer
          Science and Engineering,{" "}
          <span style={{ color: "#ff004f" }}>
            Sant Longowal Institute of Engineering and Technology
          </span>{" "}
          India. I was born in Muzaffarpur, Bihar.
        </p>
        <p>
          I was fortunate enough to know from a young age that I wanted to be an
          engineer. The engineering way of thinking came naturally to me. What I
          didn't know was what type of engineer I wanted to be. When push came
          to shove, I chose Software Engineering.
        </p>

        <h2 style={{ color: "#ff004f" }}>Intrest</h2>
        <p>
          I like watching movies and travelling. My hobby is gardening. The joy
          of witnessing blooming flowers and leaves fill my heart with a sense
          of achievement and realizing the fact that the work of my own hands is
          bearing fruit, definitely gives me pleasure. I love music.{" "}
        </p>
      </div>
    </div>
  );
}

export default Navbar;
