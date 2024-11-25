import React from "react";
import styles from "./nav.module.css";
import "../../main.css";
import { Link } from "react-router-dom";
import Links from "../../models/Links";

const DesktopNav = () => {
  const links: Links[] = [
    { path: "/projects", title: "Projects" },
    { path: "/portfolio", title: "Portfolio" },
    { path: "/user/sign-up", title: "Create Account" },
    { path: "/user/sign-in", title: "Sign In" },
  ];

  return (
    <div
      className={`${styles.sticky} rows`}
      style={{
        background: `var(--light)`,
        position: "relative",
      }}
    >
      <div className={["rows", styles.text, styles.container].join(" ")}>
        <Link
          to="/"
          translate="no"
          className={["md-txt", styles.text, styles.blue].join(" ")}
        >
          flipside
        </Link>
        <div className="rows" style={{ gap: "20px" }}>
          {links.map((link, index) => (
            <Link
              key={index}
              className={["sm-txt", styles.text, styles.link, styles.blue].join(
                " "
              )}
              to={link.path}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
