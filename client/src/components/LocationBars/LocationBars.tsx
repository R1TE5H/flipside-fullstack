// Libraries
import React from "react";
//Style Import
import "../../main.css";
import styles from "./locationBar.module.css";
// Services
import photos from "../../services/GetPhotos";

const LocationBars = () => {
  return (
    <div
      className="center"
      style={{
        justifyContent: "center",
        gap: "1vw",
      }}
    >
      {photos.map((element) => (
        <div
          className={styles.locationBar}
          key={element._id}
          style={{
            height: `${element.height}`,
            background: `url(${element.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
    </div>
  );
};
export default LocationBars;
