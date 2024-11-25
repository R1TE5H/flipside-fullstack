import React from "react";
import DesktopLanding from "./DesktopLanding";
import MobileLanding from "./MobileLanding";
import useWindowDimensions from "../../services/UseWindowDimensions";

const LandingNav = () => {
  const { width } = useWindowDimensions();

  return <> {width > 760 ? <DesktopLanding /> : <MobileLanding />}</>;
};

export default LandingNav;
