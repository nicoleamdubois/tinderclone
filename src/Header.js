import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import "./Header.css";
import { IconButton } from "@mui/material";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon className="header_icon" fontSize="large" />
      </IconButton>
      <IconButton>
        <LocalFireDepartmentIcon className="header_icon" fontSize="large" />
      </IconButton>
      <IconButton>
        <ChatBubbleIcon className="header_icon" fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Header;
