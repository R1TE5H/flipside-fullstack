import beach_side from "../assets/locations/beachside.jpg";
import toronto from "../assets/locations/toronto.jpg";
import woods from "../assets/locations/woods.jpg";
import la from "../assets/locations/los_angeles.jpg";
import winter from "../assets/locations/winter.jpg";
import desert from "../assets/locations/desert.jpg";
import villa from "../assets/locations/nice_villa.jpg";
import new_york from "../assets/locations/new-york.jpg";
import modern_villa from "../assets/locations/modern_villa.jpg";
import house from "../assets/locations/house.jpg";
import Photos from "../models/Photos";

const photos: Photos[] = [
  {
    _id: "beach_side",
    url: beach_side,
    height: `calc(300px + 15vw)`,
  },
  {
    _id: "toronto",
    url: toronto,
    height: `calc(150px + 15vw)`,
  },

  {
    _id: "woods",
    url: woods,
    height: `calc(290px + 15vw)`,
  },
  {
    _id: "la",
    url: la,
    height: `calc(265px + 15vw)`,
  },
  {
    _id: "winter",
    url: winter,
    height: `calc(190px + 15vw)`,
  },
  {
    _id: "desert",
    url: desert,
    height: `calc(150px + 15vw)`,
  },
  {
    _id: "villa",
    url: villa,
    height: `calc(270px + 15vw)`,
  },
  {
    _id: "new-york",
    url: new_york,
    height: `calc(200px + 15vw)`,
  },
  {
    _id: "modern-villa",
    url: modern_villa,
    height: `calc(110px + 15vw)`,
  },
  {
    _id: "house",
    url: house,
    height: `calc(290px + 15vw)`,
  },
];

export default photos;
