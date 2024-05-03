import { Boat } from "../models/Boats.js";

export async function readAllBoats() {
  const allBoats = await Boat.find({});
  return allBoats;
}
