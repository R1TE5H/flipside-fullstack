import React from "react";
import { Link } from "react-router-dom";

interface PropertyCardProps {
  _id: string;
  image: string;
  buy: string;
  sell: string;
  city: string;
  state: string;
  priceText: string;
}

const PropertyCard = (props: PropertyCardProps) => {
  const { _id, image, buy, sell, city, state, priceText } = props;
  return (
    <>
      <Link
        key={_id}
        to={`${_id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="columns property-card">
          <img
            className="property-card-img"
            src={image}
            alt={`${city}, ${state}`}
          />
          <span className="xs-txt" style={{ margin: "10px 0" }}>
            {city}, {state}
          </span>
          <div
            className="rows sm-txt semi-bold"
            style={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <div className="columns">
              <span className="xs-txt" style={{ color: `var(--primary)` }}>
                Purchase Price
              </span>{" "}
              <span>{buy}</span>
            </div>
            <div className="columns">
              <span
                className="xs-txt"
                style={{ textAlign: "right", color: `var(--primary)` }}
              >
                {priceText}
              </span>{" "}
              <span style={{ textAlign: "right" }}>{sell}</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PropertyCard;
