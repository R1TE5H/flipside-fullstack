import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../../main.css";
import styles from "./nav.module.css";
import Links from "../../models/Links";

const DesktopLanding = () => {
  const links: Links[] = [
    { path: "/projects", title: "Projects" },
    { path: "/portfolio", title: "Portfolio" },
    { path: "/user/sign-up", title: "Create Account" },
    { path: "/user/sign-in", title: "Sign In" },
  ];

  // Implementing the Scrolling Feature
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isBlue, setIsBlue] = useState<boolean>(true);
  const [isHidden, setIsHidden] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollPos = window.scrollY;
      setIsHidden(currentScrollPos > scrollPosition);
      setScrollPosition(currentScrollPos);
      setIsBlue(currentScrollPos < 70); // Adjust the scroll threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return (): void => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div
      className={["rows", styles.sticky, `${isHidden && styles.hidden}`].join(
        " "
      )}
      style={{
        background: `${isBlue ? "none" : `var(--light)`}`,
      }}
    >
      <div className={["rows", styles.text, styles.container].join(" ")}>
        <Link
          to="/"
          translate="no"
          className={[
            "md-txt",
            styles.text,
            `${isBlue ? styles.white : styles.blue}`,
          ].join(" ")}
        >
          flipside
        </Link>
        <div className="rows" style={{ gap: "20px" }}>
          {links.map((link, index) => (
            <Link
              key={index}
              style={{ fontWeight: "600" }}
              className={[
                "sm-txt",
                styles.text,
                styles.link,
                `${isBlue ? styles.white : styles.blue}`,
              ].join(" ")}
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

export default DesktopLanding;
