// Libraries
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoBedOutline, IoResize } from "react-icons/io5";
import { PiShower } from "react-icons/pi";
// Components, Services, and Models
import NavBar from "../../components/Navs/NavBar";
import projects from "../../services/GetProjects";
import Project from "./../../models/Project";
// Styles
import "../../main.css";
import styles from "./project.module.css";

const ProjectsPage = () => {
  const [project, setProject] = useState<Project>();
  const { id } = useParams();
  const navigate = useNavigate();

  function determineProject(): void {
    for (let project of projects) {
      if (project._id === id) return setProject(project);
    }
    return navigate("/");
  }

  useEffect((): void => {
    determineProject();
  }, []);

  return (
    <>
      <NavBar />
      <div className="section">
        <div
          style={{
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          <img
            style={{
              width: `clamp(300px, 100%, 450px)`,
              height: `clamp(300px, 20rem, 450px)`,
              borderRadius: "20px",
            }}
            src={project?.image}
            alt={`${project?.city}, ${project?.state}`}
          />
          <div>
            <span className="lg-txt">{project?.city}</span>
            <br />
            <span
              className="md-txt semi-bold"
              style={{ color: `var(--primary)` }}
            >
              {project?.state}
            </span>
            <div className="rows" style={{ marginTop: "0px", gap: "20px" }}>
              <div className="rows" style={{ gap: "10px" }}>
                <IoBedOutline size={30} color={`var(--dark)`} />
                <p className="semi-bold sm-txt">{project?.beds}</p>
              </div>
              <div className="rows" style={{ gap: "10px" }}>
                <PiShower size={30} color={`var(--dark)`} />
                <p className="semi-bold sm-txt">{project?.baths}</p>
              </div>
              <div className="rows" style={{ gap: "10px" }}>
                <IoResize size={30} color={`var(--dark)`} />
                <p className="semi-bold sm-txt">
                  {project?.footage} ft{" "}
                  <sup style={{ verticalAlign: "super" }}>2</sup>
                </p>
              </div>
            </div>
            <div
              className="rows"
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <div>
                <span
                  className="xs-txt semi-bold"
                  style={{ color: `var(--primary)` }}
                >
                  Purchase Price
                </span>{" "}
                <br />
                <span className="hero semi-bold">{project?.buy}</span>
              </div>
              <div>
                <span
                  className="xs-txt semi-bold"
                  style={{ color: `var(--primary)` }}
                >
                  Target Sell Price
                </span>
                <br />
                <span className="hero semi-bold">{project?.sell}</span>
              </div>
            </div>
            <div>
              <span className="semi-bold">Funding Collected: </span>
              <progress
                className={styles.progress}
                value={
                  project?.currentFunding && project.fundingGoal
                    ? (project.currentFunding / project.fundingGoal) * 100
                    : "70"
                }
                max="100"
              />
              <button className="btn link-btn">Fund Project</button>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <h1>Current Pictures</h1>
        <h1>Expenses and Mock up Plans</h1>
      </div>
      <div
        className="section"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          alignItems: "center",
        }}
      >
        <div className="gridItems">
          Expenses Chart with complete break down fo how the money will be spent
        </div>
        <img
          src={project?.image}
          className={[styles.propertyProjections, "gridItems"].join(" ")}
          alt="Pictures"
        />
      </div>
    </>
  );
};

export default ProjectsPage;
