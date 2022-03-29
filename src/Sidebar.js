import React from 'react';
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
function Sidebar() {
  return (
  <div className="sidebar">Sidebar
      <div className="sidebar__top">
        <img scr="" alt=""/>
          <Avatar />
          <h2>Emmanuel Hagans </h2>
        <h4>haganemmanuel23@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,540</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,540</p>
        </div>
      </div> 
  </div>
  )
}

export default Sidebar