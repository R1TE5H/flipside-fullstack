import desert from "../assets/locations/desert.jpg";
import villa from "../assets/locations/nice_villa.jpg";
import new_york from "../assets/locations/new-york.jpg";

import Project from "../models/Project";

const portfolio: Project[] = [
  {
    _id: "1",
    image: desert,
    buy: "$120,000",
    sell: "$200,000",
    city: "Hoboken",
    state: "New Jersey",
    beds: 3,
    baths: 4,
    footage: "2,300",
  },
  {
    _id: "2",
    image: villa,
    buy: "$130,000",
    sell: "$250,000",
    city: "Miami",
    state: "Florida",
    beds: 3,
    baths: 4,
    footage: "2,300",
  },
  {
    _id: "3",
    image: new_york,
    buy: "$200,000",
    sell: "$350,000",
    city: "Rochester",
    state: "New York",
    beds: 3,
    baths: 4,
    footage: "2,300",
  },
  {
    _id: "4",
    image: villa,
    buy: "$200,000",
    sell: "$350,000",
    city: "Rochester",
    state: "New York",
    beds: 3,
    baths: 4,
    footage: "2,300",
  },
  {
    _id: "5",
    image: new_york,
    buy: "$120,000",
    sell: "$200,000",
    city: "Hoboken",
    state: "New Jersey",
    beds: 3,
    baths: 4,
    footage: "2,300",
  },
  {
    _id: "6",
    image: desert,
    buy: "$120,000",
    sell: "$200,000",
    city: "Hoboken",
    state: "New Jersey",
    beds: 3,
    baths: 4,
    footage: "2,300",
  },
  {
    _id: "7",
    image: villa,
    buy: "$130,000",
    sell: "$250,000",
    city: "Miami",
    state: "Florida",
    beds: 3,
    baths: 4,
    footage: "2,300",
  },
];

export default portfolio;
