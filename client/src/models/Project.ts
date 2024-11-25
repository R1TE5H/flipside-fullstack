export default interface Project {
  _id: string;
  image: string;
  buy: string;
  sell: string;
  city: string;
  state: string;
  beds: number;
  baths: number;
  footage: string;
  renoProgress?: number;
  fundingGoal?: number;
  currentFunding?: number;
}
