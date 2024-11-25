// Libraries
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoBedOutline, IoResize } from "react-icons/io5";
import { PiShower } from "react-icons/pi";

// Components
import NavBar from "../../components/Navs/NavBar";
import Project from "../../models/Project";
import portfolio from "../../services/GetPortfolio";

// Styles
import "../../main.css";

const PortfolioPage = () => {
  const [p, setPortfolio] = useState<Project>();
  const { id } = useParams();
  const navigate = useNavigate();

  function determinePortfolio(): void {
    for (let project of portfolio) {
      if (project._id === id) return setPortfolio(project);
    }
    return navigate("/");
  }

  useEffect((): void => {
    determinePortfolio();
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
            src={p?.image}
            alt={`${p?.city}, ${p?.state}`}
          />
          <div>
            <span className="lg-txt">{p?.city}</span>
            <br />
            <span
              className="md-txt semi-bold"
              style={{ color: `var(--primary)` }}
            >
              {p?.state}
            </span>

            <div className="rows" style={{ marginTop: "0px", gap: "20px" }}>
              <div className="rows" style={{ gap: "10px" }}>
                <IoBedOutline size={30} color={`var(--dark)`} />
                <p className="semi-bold sm-txt">{p?.beds}</p>
              </div>
              <div className="rows" style={{ gap: "10px" }}>
                <PiShower size={30} color={`var(--dark)`} />
                <p className="semi-bold sm-txt">{p?.baths}</p>
              </div>
              <div className="rows" style={{ gap: "10px" }}>
                <IoResize size={30} color={`var(--dark)`} />
                <p className="semi-bold sm-txt">
                  {p?.footage} ft{" "}
                  <sup style={{ verticalAlign: "super" }}>2</sup>
                </p>
              </div>
            </div>
            <div
              className="rows"
              style={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <div>
                <span
                  className="xs-txt semi-bold"
                  style={{ color: `var(--primary)` }}
                >
                  Purchase Price
                </span>{" "}
                <br />
                <span className="hero semi-bold">{p?.buy}</span>
              </div>
              <div>
                <span
                  className="xs-txt semi-bold"
                  style={{ color: `var(--primary)` }}
                >
                  Sell Price
                </span>
                <br />
                <span className="hero semi-bold">{p?.sell}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <h1>Before and After</h1>
      </div>
    </>
  );
};

export default PortfolioPage;
