import React from "react";
import "./Internship.css"

function Card() {
  return (
    <div style={{backgroundColor:"black"}}>
      <div >
        <h1 style={{color:"#ff004f" }}>Internship Project</h1>
    </div>

      <div class="main-card">
        

        <div className="card">
          <img src="https://thumbs.dreamstime.com/b/beautiful-girl-studio-high-quality-photos-advertising-best-you-more-photos-i-have-portfolio-girl-105958626.jpg" />
          <p>
            I like watching movies and travelling. My hobby is gardening. The
            joy of witnessing blooming flowers and leaves fill my heart with a
            sense of achievement and realizing the fact that the work of my own
            hands is bearing fruit, definitely gives me pleasure. I love music. 
          </p>
        </div>

        <div className="card">
          <img src="https://thumbs.dreamstime.com/b/beautiful-girl-studio-high-quality-photos-advertising-best-you-more-photos-i-have-portfolio-girl-105958626.jpg" />
          <p>
            I like watching movies and travelling. My hobby is gardening. The
            joy of witnessing blooming flowers and leaves fill my heart with a
            sense of achievement and realizing the fact that the work of my own
            hands is bearing fruit, definitely gives me pleasure. I love music. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
