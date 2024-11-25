import React from "react";
import NavBar from "../../components/Navs/NavBar";
import styles from "./dashboard.module.css";
import "../../main.css";
import useWindowDimensions from "../../services/UseWindowDimensions";
import projects from "../../services/GetProjects";
import { Link } from "react-router-dom";
import {
  formatNumber,
  isNegative,
  percentageGrowth,
} from "../../services/GlobalMethods";

import user from "../../services/GetUser";

const Dashboard = () => {
  const { width } = useWindowDimensions();
  const growth: string = percentageGrowth(user.totalInput, user.portfolioValue);

  return (
    <>
      <NavBar />
      <div className={["section", styles.top].join(" ")}>
        <p className="hero semi-bold">Welcome back {user.name},</p>
      </div>
      <div
        className={`section center ${width > 800 ? "rows" : "columns"}`}
        style={{ gap: "120px" }}
      >
        <div className="columns">
          <p className="semi-bold md-txt" style={{ textAlign: "center" }}>
            Overview
          </p>
          <div className={[styles.card, styles.financeCard].join(" ")}>
            <div className={styles.finances}>
              <div>
                <span className="xs-txt semi-bold">My Balance</span>
                <div
                  className="rows"
                  style={{ gap: "20px", alignItems: "center" }}
                >
                  {" "}
                  <span className="hero semi-bold">
                    ${formatNumber(user.portfolioValue)}
                  </span>
                  <span
                    className={["semi-bold", styles.growth].join(" ")}
                    style={{
                      background: `${
                        isNegative(growth)
                          ? `var(--redLight)`
                          : `var(--greenLight)`
                      }`,
                      color: `${
                        isNegative(growth)
                          ? `var(--redDark)`
                          : `var(--greenDark)`
                      }`,
                    }}
                  >
                    {growth}%
                  </span>
                </div>
                <span className="xs-txt semi-bold">
                  Amount Invested: ${formatNumber(user.totalInput)}
                </span>
              </div>
              <div className={styles.graphContainer}>
                A Graph showing monthly and yearly changes will go here
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <p className="semi-bold md-txt" style={{ textAlign: "center" }}>
            Your Projects
          </p>{" "}
          <div className={styles.card}>
            {projects
              .sort((a, b) =>
                a.renoProgress && b.renoProgress
                  ? b.renoProgress - a.renoProgress
                  : -1
              )
              .slice(0, 4)

              .map((project, index) => (
                <Link
                  key={index}
                  style={{ textDecoration: "none" }}
                  to={`/projects/${project._id}`}
                >
                  {" "}
                  <div className={[styles.project, "semi-bold"].join(" ")}>
                    <div className="columns" style={{ gap: "10px" }}>
                      {" "}
                      <span className={styles.title}>
                        {project.city}, {project.state}
                      </span>
                      <progress
                        className={styles.progress}
                        value={
                          project.renoProgress
                            ? project.renoProgress
                            : Math.random() * 100
                        }
                        max="100"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            <Link
              to="/projects"
              className={["semi-bold sm-txt center", styles.more].join(" ")}
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
