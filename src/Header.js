import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';


function Header() {
  return <div className="header">
    <div className="header__left">
          <img src="https://img.icons8.com/external-justicon-lineal-justicon/50/000000/external-linkedin-social-media-justicon-lineal-justicon.png"/>
          <div className="header__search">
            {/*Search Icon */}
            <SearchIcon />
            <input type="text"/> 
          </div>
    </div>
    <div className="header__right">

    </div>
  </div>;
}

export default Header;
