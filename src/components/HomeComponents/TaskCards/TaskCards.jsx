import React from "react";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import ListIcon from "@mui/icons-material/List";
import "./taskCards.scss";

const TaskCards = () => {
  return (
    <div className="taskCards">
      <div className="container">
        <div className="taskCardsClass">
          <div className="card">
            <div className="icon">
              <ListIcon />
            </div>
            <div className="points">60 %</div>
            <div className="texts">Todo</div>
          </div>
          <div className="card">
            <div className="icon">
              <RocketLaunchIcon />
            </div>
            <div className="points">40 points</div>
            <div className="texts">Progress</div>
          </div>
          <div className="card">
            <div className="icon">
              <SportsScoreIcon />
            </div>
            <div className="points">40 %</div>
            <div className="texts">Growth</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCards;
