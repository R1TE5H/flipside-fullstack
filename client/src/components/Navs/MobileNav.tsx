import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./nav.module.css";
import "../../main.css";
import Links from "../../models/Links";
import useWindowDimensions from "../../services/UseWindowDimensions";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { height } = useWindowDimensions();

  const links: Links[] = [
    { path: "/projects", title: "Projects" },
    { path: "/portfolio", title: "Portfolio" },
    { path: "/user/sign-up", title: "Create Account" },
    { path: "/user/sign-in", title: "Sign In" },
  ];

  return (
    <>
      <div className={styles.phone}>
        <Link
          to="/"
          translate="no"
          className={["md-txt", styles.text, styles.blue].join(" ")}
        >
          flipside
        </Link>
        {isOpen ? (
          <IoCloseSharp
            size={30}
            color={`var(--primary)`}
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          />
        ) : (
          <GiHamburgerMenu
            size={30}
            color={`var(--primary)`}
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          />
        )}
      </div>
      {isOpen && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            className={[styles.slideIn, styles.phoneContent].join(" ")}
            style={{
              height: `${height}px`,
            }}
          >
            <div className={styles.phoneLinkContainer}>
              {links.map((link, index) => (
                <Link
                  key={index}
                  className={[
                    "sm-txt",
                    styles.text,
                    styles.link,
                    styles.blue,
                  ].join(" ")}
                  to={link.path}
                  onClick={() => setIsOpen((isOpen) => !isOpen)}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
