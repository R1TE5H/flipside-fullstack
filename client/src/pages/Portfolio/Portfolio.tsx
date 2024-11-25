// Libraries
import React, { ChangeEvent, useState } from "react";
// Components
import NavBar from "../../components/Navs/NavBar";
// Styles
import "../../main.css";
// Services
import portfolio from "../../services/GetPortfolio";
import PropertyCard from "../../components/PropertyCard/PropertyCard";

const Portfolio = () => {
  const [query, setQuery] = useState<string>("");

  const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    setQuery(event.target.value);
    console.log(query);
  };

  return (
    <>
      <NavBar />
      <div className="section">
        <p className="md-txt semi-bold">View our Portfolio</p>
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
        {portfolio.map((element) => (
          <div key={element._id} className="gridItems">
            <PropertyCard
              _id={element._id}
              buy={element.buy}
              sell={element.sell}
              city={element.city}
              state={element.state}
              image={element.image}
              priceText="Sell Price"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
