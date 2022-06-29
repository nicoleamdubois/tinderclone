import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import './Header.css';
function Header() {
  return (
    <div className="header">
        <PersonIcon/>
        <ChatBubbleIcon />
        <h2>I am a header</h2>
    </div>
  )
}

export default Header