import { Boat } from "../models/Boats.js";

export async function createBoat(newBoat) {
  const foundBoat = await Boat.findOne({ boatName: newBoat.boatName });
  if (foundBoat) throw new Error("Boat with this name already exists");
  return Boat.create(newBoat);
}
