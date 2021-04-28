import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  const { currentUser, handleLogout} = props;

  return (
    <div className="layout">
      <Header currentUser={currentUser} handleLogout={handleLogout}/>
      <div className="layout-children">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
