import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ChatIcon from '@mui/icons-material/Chat';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

function Header() {
  return <div className="header">
    <div className="header__left">
      <img src="https://img.icons8.com/external-justicon-lineal-justicon/50/000000/external-linkedin-social-media-justicon-lineal-justicon.png" />
      <div className="header__search">
        {/*Search Icon */}
        <SearchIcon />
        <input type="text" />
      </div>
    </div>
    <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home"/>
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={CircleNotificationsIcon} title="Notification" />
        <HeaderOption Icon={BusinessCenterIcon} title="Business" />
    </div>
  </div>;
}

export default Header;
