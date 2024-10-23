import React from "react";
import "./dailyTasks.scss";
import sport from "../../../images/Sport.png";
import science from "../../../images/Science.png";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import daily from "./daily";

const labels = {
  1: "Worse",
  2: "Bad",
  3: "Normal",
  4: "Excellent",
  5: "Great",
};
function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const DailyTasks = () => {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  return (
    <div className="dailyTasks">
      <div className="container">
        <h1 className="task">Your Daily Tasks🗒️</h1>
        <div className="daily_cards">
          {daily.map((el) => (
            <div id={el.id} className="daily_card">
              <div className="icon">
                <img src={el.img} alt="Daily_activities" />
              </div>
              <div className="activity_info">
                <div className="activ_name">
                  <h1>{el.name}</h1>
                </div>
                <div className="statusActivity">
                  <Box
                    sx={{ width: 200, display: "flex", alignItems: "center" }}
                  >
                    <Rating
                      sx={{ fontSize: "18px" }}
                      name="hover-feedback"
                      value={value}
                      precision={1}
                      getLabelText={getLabelText}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      onChangeActive={(event, newHover) => {
                        setHover(newHover);
                      }}
                      emptyIcon={
                        <StarIcon style={{ opacity: 1 }} fontSize="inherit" />
                      }
                    />
                    {value !== null && (
                      <Box sx={{ ml: 1, color: "#fff", fontFamily: "Poppins" }}>
                        {labels[hover !== -1 ? hover : value]}
                        <span className="coins">100+🪙</span>
                      </Box>
                    )}
                  </Box>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyTasks;
