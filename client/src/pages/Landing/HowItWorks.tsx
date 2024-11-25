import styles from "./landing.module.css";
import useWindowDimensions from "../../services/UseWindowDimensions";
import "../../main.css";

// import video from "./video.mp4";

const HowItWorks = () => {
  const { width } = useWindowDimensions();
  return (
    <div
      style={{ background: `var(--third)`, alignItems: "stretch" }}
      className={`section center ${styles.cardContainer}`}
    >
      <div
        className={`${width < 870 ? "columns" : "rows"}`}
        style={{
          maxWidth: "1200px",
          gap: "0.5rem",
        }}
      >
        <div
          className="gridItems center rows"
          style={{
            width: "100%",
          }}
        >
          <div className={styles.person}>
            <div style={{ padding: "20px" }}>
              <p className="md-txt bold">Investor</p>
              <p className="sm-txt">
                Fuel transformative residential renovation projects and unlock
                the full potential of real estate investing.
              </p>
              <p className="sm-txt">Start investing for as little as $100.</p>
            </div>
          </div>
          <div className={styles.person}>
            <div style={{ padding: "20px" }}>
              <p className="md-txt bold">Homeowner</p>
              <p className="sm-txt">
                Quickly secure funding for your renovations and experience a
                rapid and efficient transformation of your property.
              </p>
              <p className="sm-txt">
                Unlock your property's full potential today.
              </p>
            </div>
          </div>
        </div>
        {/* <div
          className="gridItems center"
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div
            className={styles.person}
            style={{
              height: "100%",
              width: `${width > 870 ? "100%" : "clamp(275px, 100%, 370px)"}`,
            }}
          >
            <div style={{ padding: "20px" }}>
              <p className="md-txt bold">Easily Invest in Real Estate</p>
              <p className="sm-txt">We find the properties.</p>
              <p className="sm-txt">You provide the funding</p>
              <p className="sm-txt">Everyone shares the profits.</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HowItWorks;
