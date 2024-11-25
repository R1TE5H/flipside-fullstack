import React from "react";
import DesktopNav from "./DesktopNav";
import useWindowDimensions from "../../services/UseWindowDimensions";
import MobileNav from "./MobileNav";

const NavBar = () => {
  const { width } = useWindowDimensions();

  return <> {width > 760 ? <DesktopNav /> : <MobileNav />}</>;
};

export default NavBar;
