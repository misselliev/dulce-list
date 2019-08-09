import React from "react";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Dulce TodoList</h1>
    </header>
  );
}

const headerStyle = {
  background: "#FF1493",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

export default Header;
