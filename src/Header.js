import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import './Header.css';
function Header() {
  return (
    <div className="header">
        <PersonIcon/>
        <img src='https://cdn-icons.flaticon.com/png/512/4325/premium/4325956.png?token=exp=1656545554~hmac=1281912f439b5cf4bbb1128252cc9bd5' alt='tinder style logo' />
        <ChatBubbleIcon />
        
    </div>
  )
}

export default Header