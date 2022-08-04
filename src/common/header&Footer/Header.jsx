import React from "react";

const Header = () => {
  return (
    <div className="container" style={{marginTop:"20px"}}>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">
          Amazon
        </a>
        <a class="nav-item nav-link" href="/">
            {"Returns & Orders"}
          </a>
      </nav>
    </div>
  );
};

export default Header;
