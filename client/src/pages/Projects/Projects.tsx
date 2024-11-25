// Libraries
import React, { ChangeEvent, useState } from "react";
// Components
import NavBar from "../../components/Navs/NavBar";
// Styles
import "../../main.css";
// Services
import projects from "../../services/GetProjects";
import PropertyCard from "../../components/PropertyCard/PropertyCard";

const Projects = () => {
  const [query, setQuery] = useState<string>("");

  const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    setQuery(event.target.value);
    console.log(query);
  };

  return (
    <>
      <NavBar />
      <div className="section">
        <p className="md-txt semi-bold">View our projects</p>
        <input
          style={{ width: "90%", maxWidth: "450px" }}
          type="text"
          placeholder="Enter a State"
          className="search"
          onChange={handleSearch}
        />
      </div>
      <div
        className="section"
        style={{
          display: "grid",
          gap: "0.5rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        {projects.length > 0 ? (
          projects.map((element) => (
            <div key={element._id} className="gridItems">
              {" "}
              <PropertyCard
                _id={element._id}
                buy={element.buy}
                sell={element.sell}
                city={element.city}
                state={element.state}
                image={element.image}
                priceText="Target Sell Price"
              />
            </div>
          ))
        ) : (
          <div className="center columns" style={{ gap: "20px" }}>
            <span className="md-txt semi-bold">
              No Projects Currently available
            </span>
            <button className="btn link-btn">List a Project</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Projects;
