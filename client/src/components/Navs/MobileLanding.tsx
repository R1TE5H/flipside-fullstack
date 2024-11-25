import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./nav.module.css";
import "../../main.css";
import Links from "../../models/Links";
import useWindowDimensions from "../../services/UseWindowDimensions";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const MobileLanding = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { height } = useWindowDimensions();

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
    <>
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
          {isOpen ? (
            <IoCloseSharp
              size={30}
              className={[`${isBlue ? styles.white : styles.blue}`].join(" ")}
              onClick={() => setIsOpen((isOpen) => !isOpen)}
            />
          ) : (
            <GiHamburgerMenu
              size={30}
              className={[`${isBlue ? styles.white : styles.blue}`].join(" ")}
              onClick={() => setIsOpen((isOpen) => !isOpen)}
            />
          )}
        </div>
        {isOpen && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              className={[styles.slideIn, styles.phoneContent].join(" ")}
              style={{
                marginTop: "30px",
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
      </div>
    </>
  );
};

export default MobileLanding;
