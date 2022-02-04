import React from 'react';
import "./HeaderOption.css";
function HeaderOption({Icon, Title}) {
  return <div className="headerOption">
      {Icon && < Icon className="headerOption__icon"/>}
      <h3>{title}</h3> 
  </div>;
}

export default HeaderOption;
