import React from "react";
import Header from "../Header/Header";
import "./Layout.css";

const Layout = (props) => {
  const { currentUser, handleLogout } = props;

  return (
    <div className="layout">
      <Header currentUser={currentUser} handleLogout={handleLogout} />
      <div className="layout-children">{props.children}</div>
      <footer>© Jordan Montero</footer>
    </div>
  );
};

export default Layout;
