import React, { useEffect } from "react";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import "./topBar.scss"
const tg = window.Telegram.WebApp;

const Topbar = () => {

  useEffect(() => {
    tg.ready();
  }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <div className="topBar">
      <div className="container">
        <div className="menues">
          <div className="icon">
            <MenuRoundedIcon onClick={onClose} sx={{ fontSize: 35, color: "#17ba83"}}/>
          </div>
          <div className="avtr">
            <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="Profile_Picture" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
