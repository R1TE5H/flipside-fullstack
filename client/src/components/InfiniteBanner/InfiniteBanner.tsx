import React from "react";
import photos from "../../services/GetPhotos";
import styles from "./infiniteBanner.module.css";
// import { Link } from "react-router-dom";
import Photos from "../../models/Photos";

const InfiniteBanner = () => {
  return (
    <>
      <div className={styles.bannerWrapper}>
        <div className={styles.wrapper}>
          <div className={styles.images}>
            {photos.map((p: Photos, index: number) => (
              // <Link key={index} to={`/projects/${p._id}`}>
              <img
                key={index}
                className={styles.image}
                src={p.url}
                alt={p._id}
              />
              // </Link>
            ))}
          </div>
          <div className={styles.images}>
            {photos.map((p: Photos, index: number) => (
              // <Link key={index} to={`/projects/${p._id}`}>
              <img
                key={index}
                className={styles.image}
                src={p.url}
                alt={p._id}
              />
              // </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InfiniteBanner;
