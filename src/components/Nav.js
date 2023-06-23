import React, { useEffect } from "react";
import "./Nav.css";
function Nav() {
  const [show, setShow] = React.useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShow(window.scrollY > 100);
    });
  }, []);

  return (
    <div className={`nav-container ${show && "nav-container-black"}`}>
       <h1 className="nav-logo">CODEFLIX</h1>

      <img
        className="nav-avatar"
        src="http://www.aumentaty.com/community/wp-content/uploads/2020/02/Picture_20200225090703.png"
        alt="Pasquadev"
      ></img>
    </div>
  );
}

export default Nav;