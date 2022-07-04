import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import './Header.css';
function Header() {
  return (
    <div className="header">
        <PersonIcon className="header_icon" fontSize='large'/>
        <img 
        className='header__logo'
        src='https://www.flaticon.com/premium-icon/flames_4325956?term=flame&page=1&position=3&page=1&position=3&related_id=4325956&origin=tag'alt='tinder style logo' />
        <ChatBubbleIcon className="header_icon" fontSize='large'/>
        
    </div>
  )
}

export default Header