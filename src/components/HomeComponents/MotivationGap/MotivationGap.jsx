import React from "react";
import "./motivationGap.scss";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const MotivationGap = () => {
  return (
    <div className="motivation">
      <div className="container">
        <div className="motiv">
          <h3>
            Good Morning, <span>NAME</span>!
          </h3>
          <h1>
            You have <span>8 TASKS</span> <br /> for today👍
          </h1>

          <div className="message">
            <div className="icon">
              <FormatQuoteIcon sx={{color: "#17ba83", fontSize: 30}}/>
            </div>
            <div className="ideas">
              “An idea is a feat of association, and the height of it is a good
              metaphor.” <br />—<span>Robert Frost</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotivationGap;
