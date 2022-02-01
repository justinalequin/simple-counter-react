import React from "react";

function Header() {
  return (
    <div
      style={{
        backgroundColor: "red",
        display: "flex",
        justifyContent: "space-around",
        width: "99%",
      }}
    >
      <div className="headerLeft">Logo</div>
      <div className="haderRight">Menu</div>
    </div>
  );
}

export default Header;
