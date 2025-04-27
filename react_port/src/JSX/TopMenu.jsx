import React from "react";

function TopMenu() {
  const handleScroll = (targetId) => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="but">
      <button className='first' onClick={() => handleScroll("about-me")}>About Me</button>
      <button className='second' onClick={() => handleScroll("skills")}>Skills</button>
      <button className='third' onClick={() => handleScroll("career")}>Career</button>
    </div>
  );
}

export default TopMenu;